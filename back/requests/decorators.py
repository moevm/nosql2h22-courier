from flask import request, make_response
import jwt
from app import app


def check_admin(func):
    def wrapper():
        try:
            print(request.headers)
            print(request.headers.get('Set_cookie'))
            print(jwt.decode(request.headers.get('Set_cookie'), app.secret_key))
            if jwt.decode(request.headers.get('Set_cookie'), app.secret_key)['type'] == 'a':
                return func()
        except Exception as e:
            print("Exception: ", e) # get info about exception
            return make_response('Bad access', 403)
        return make_response('Bad access', 403)
    wrapper.__name__ = func.__name__
    return wrapper


def check_access(func):
    def wrapper():
        try:
            if jwt.decode(request.headers.get('Set_cookie'), app.secret_key)['type']:
                return func()
        except Exception as e:
            print("Exception: ", e) # get info about exception
            return make_response('Bad access', 403)
        return make_response('Bad access', 403)
    wrapper.__name__ = func.__name__
    return wrapper
