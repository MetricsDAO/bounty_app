import os

# [ENV]
PROD_ENV = "prod"
LOCAL_ENV = "local"

ENV = os.environ.get("ENV")
DEBUG = True
IS_DEV = True if ENV and ENV != PROD_ENV else False

SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")

JWT_SECRET = os.environ.get("JWT_SECRET")

WEB3_MSG_TO_SIGN = "Welcome to the MetricsDAO. Sign this message to authenticate and begin contributing. Login count: {nonce}"

print("ENV: ", ENV)
print("SQLALCHEMY_DATABASE_URI: ", SQLALCHEMY_DATABASE_URI)
print("JWT_SECRET: ", JWT_SECRET)