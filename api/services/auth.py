import jwt
from sqlalchemy.orm import session

from core.environment import JWT_SECRET
from utils.canny import clean_discord_handle
from models import User


def create_jwt(user_id, public_address, discord_handle):
    user_data = {
        'avatarURL': None, # optional, but preferred
        'email': f'{clean_discord_handle(discord_handle)}+external-signup@bounty.metricsdao.xyz',
        'id': str(user_id),
        'name': discord_handle,
        "customFields": {
            'public_address': public_address,
            'discord_handle': discord_handle
        },
    }

    encoded_jwt = jwt.encode(
        user_data, 
        JWT_SECRET, 
        algorithm="HS256"
    )
    return encoded_jwt


def decode_jwt(jwt_data):
    print("decode jwt: ", jwt_data)
    data = jwt.decode(jwt_data, JWT_SECRET, algorithms=["HS256"])
    return data


def get_user(jwt_data, db: session):
    data = decode_jwt(jwt_data)
    try:
        return db.query(User).filter(User.id == data['id']).one()
    except:
        return None
