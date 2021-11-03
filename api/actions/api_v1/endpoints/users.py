from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Cookie,
    Header
)
from pydantic import UUID4
from web3.auto import w3
from eth_account.messages import defunct_hash_message

from db.session import SessionLocal
from models import User, get_uid
from actions.deps import get_db
from schemas import user_requests
from services.auth import create_jwt, get_user
from core.environment import WEB3_MSG_TO_SIGN


router = APIRouter(tags=["users"])


def recover_address(message, signature):
    message_hash = defunct_hash_message(text=message)
    address = w3.eth.account.recoverHash(message_hash, signature=signature)
    return address


@router.get(
    "/me",
    summary="Get Current User",
    response_model=user_requests.MeResponse,
    status_code=status.HTTP_200_OK,
)
async def get_me(
    Authorization: str = Header(None),
    AnonUserID: UUID4 = Header(None),
    db: SessionLocal = Depends(get_db),
):
    user = get_user(Authorization, db) if Authorization else None
    return user_requests.MeResponse(
        user=user
    )


@router.get(
    "/auth/nonce/{public_address}",
    summary="Get Nonce",
    response_model=user_requests.GetNonceResponse,
    status_code=status.HTTP_200_OK,
)
async def get_nonce(
    public_address: str,
    db: SessionLocal = Depends(get_db),
):
    public_address = public_address.lower()
    try:
        user = db.query(User).filter(User.public_address == public_address).one()
    except:
        user = None
    
    nonce = user.nonce if user else 1

    return user_requests.GetNonceResponse(nonce=nonce, msg=WEB3_MSG_TO_SIGN.format(nonce=nonce))


@router.post(
    "/auth",
    summary="Authenticate",
    response_model=user_requests.AuthResponse,
    status_code=status.HTTP_200_OK,
)
async def authenticate_address(
    auth_req: user_requests.AuthRequest,
    AnonUserID: UUID4 = Header(None),
    db: SessionLocal = Depends(get_db),
):
    if not auth_req.public_address:
        raise HTTPException(status_code=400, detail=f"Public address is required!")

    public_address = auth_req.public_address.lower()
    try:
        user = db.query(User).filter(User.public_address == public_address).one()
    except:
        user = None
    
    nonce = user.nonce if user else 1
    address = recover_address(WEB3_MSG_TO_SIGN.format(nonce=nonce), auth_req.signature)

    if address.lower() != public_address.lower():
        raise HTTPException(status_code=403, detail=f"Cannot authenticate user!")

    discord_handle = auth_req.discord_handle.lower()

    if user:
        user.nonce = nonce + 1
    else:
        user = User(
            id=get_uid(),
            public_address=public_address,
            discord_handle=discord_handle,
            nonce=nonce+1
        )
        db.add(user)
    
    if not user.discord_handle and discord_handle:
        user.discord_handle = discord_handle

    db.flush()
    db.commit()

    return user_requests.AuthResponse(
        user=user,
        jwt=create_jwt(user.id, user.public_address, user.discord_handle)
    )
