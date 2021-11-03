from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from actions.api_v1.api import api_router

app = FastAPI(
    title="MetricsDAO Bounty API",
    description="This API provides a REST interface to MetricsDAO Bounty API.",
)

origins = [    
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3002",
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3002",
    "http://127.0.0.1:3004",
    "https://metricsdao.xyz",
    "https://questions.metricsdao.xyz",
    "https://bounty.metricsdao.xyz",
    "https://bounties.metricsdao.xyz",
    "https://app.metricsdao.xyz",
    "https://www.metricsdao.xyz",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
