from pydantic import BaseModel
from typing import Optional

from .user import User


class GetNonceResponse(BaseModel):
    nonce: int
    msg: str


class AuthRequest(BaseModel):
    public_address: str
    discord_handle: str
    signature: str


class AuthResponse(BaseModel):
    user: Optional[User]
    jwt: str


class MeResponse(BaseModel):
    user: Optional[User]
