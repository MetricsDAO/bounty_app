from uuid import uuid4

from .user import User
from .webhook_event_canny import WebhookEventCanny

def get_uid() -> str:
    return str(uuid4())
