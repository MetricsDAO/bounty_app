from fastapi import Depends, HTTPException, Security
from fastapi.security.api_key import APIKeyQuery, APIKeyHeader
import sqlalchemy
from sqlalchemy.orm import Session
from typing import Generator

from db.session import SessionLocal


def get_db() -> Generator:
    db = None
    try:
        db = SessionLocal()
        yield db
    finally:
        if db:
            db.close()


api_key_query = APIKeyQuery(name="api_key", auto_error=False)
api_key_header = APIKeyHeader(name="x-api-key", auto_error=False)


async def get_api_key(
    api_key_query: str = Security(api_key_query),
    api_key_header: str = Security(api_key_header),  
) -> str:
    if api_key_header:
        return api_key_header
    elif api_key_query:
        return api_key_query
    else:
        raise HTTPException(status_code=403, detail="Unauthenticated :(")

