from fastapi import APIRouter

from actions.api_v1.endpoints import health_checks, users, webhooks

api_router = APIRouter()
api_router.include_router(health_checks.router, prefix="/checks", tags=["health_checks"])
api_router.include_router(users.router, prefix="/api/v1/users", tags=["users"])
api_router.include_router(webhooks.router, prefix="/api/v1/webhooks", tags=["webhooks"])
