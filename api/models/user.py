from sqlalchemy import Column, String, Integer
from db.base_class import Base
from sqlalchemy import func


class User(Base):

    blockchain = Column("blockchain", String)
    network = Column("network", String)
    public_address = Column("public_address", String, index=True)
    nonce = Column("nonce", Integer, default=1)
    discord_handle = Column("discord_handle", String)
    username = Column("username", String, index=True)
