
from typing import Any
from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Cookie,
    Header,
    Request
)
from pydantic import UUID4
from web3.auto import w3
from eth_account.messages import defunct_hash_message

from db.session import SessionLocal
from models import User, WebhookEventCanny, get_uid
from actions.deps import get_db
from schemas import user_requests
from services.auth import create_jwt, get_user
from core.environment import WEB3_MSG_TO_SIGN


router = APIRouter(tags=["webhook_events"])

@router.post(
    "/canny",
    summary="New Canny Event",
    status_code=status.HTTP_200_OK,
)
async def create_canny_event(
    info: Request,
    db: SessionLocal = Depends(get_db),
):
    canny_data = await info.json()
    created = canny_data['created']
    object = canny_data['object']
    object_type = canny_data['objectType']
    event_type = canny_data['type']
    ce = WebhookEventCanny(
        id=get_uid(),
        object=object, 
        object_type=object_type, 
        event_type=event_type,
        event_created_at=created
    )
    db.add(ce)
    db.commit()
    db.flush()

    return {
        "event_created": True
    }