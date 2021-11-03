import datetime
from typing import Optional
from pydantic import BaseModel, UUID4


# Shared properties
class UserBase(BaseModel):
    public_address: Optional[str] = None
    discord_handle: Optional[str] = None
    nonce: Optional[int] = None


# Properties to receive via API on creation
class UserCreate(UserBase):
    pass


# Properties to receive via API on update
class UserUpdate(UserBase):
    pass


class UserInDBBase(UserBase):
    id: UUID4

    created_at: datetime.datetime
    updated_at: Optional[datetime.datetime]
    deleted_at: Optional[datetime.datetime]

    class Config:
        orm_mode = True


# Additional properties to return via API
class User(UserInDBBase):
    pass
