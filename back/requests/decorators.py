from flask import request, make_response
import jwt
from app import app


def check_admin(func):
    def wrapper():
        token = request.headers.get('Cookie')
        if token is None:
            return make_response('Bad access', 403)
        try:
            user = jwt.decode(token, app.secret_key)
            if user['type'] != 'a':
                return make_response('Bad access', 403)
        except:
            return make_response('Bad access', 403)
        return func()
    return wrapper
