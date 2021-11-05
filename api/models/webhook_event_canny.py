from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.ext.mutable import MutableDict, MutableList
from db.base_class import Base
from sqlalchemy import func


class WebhookEventCanny(Base):

    event_type = Column("event_type", String, index=True)
    object_type = Column("object_type", String, index=True)
    object = Column("event_obj", MutableDict.as_mutable(JSONB))
    event_created_at = Column("event_created_at", DateTime, default=None, nullable=False)
