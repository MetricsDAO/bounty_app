from uuid import uuid4

from .user import User


def get_uid() -> str:
    return str(uuid4())
