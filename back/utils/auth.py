from flask import Flask, jsonify, request, make_response
from app import app, db
import jwt
import datetime


def create_jwt(user):
    user['exp'] = datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    token = jwt.encode(user, app.secret_key)
    del user['exp']
    return token.decode("utf-8")


@app.route('/api/login', methods=["POST"])
def login():
    args = request.get_json()
    user = db.users.find_one(args)
    if user is not None:
        del user['password']
        user['_id'] = str(user['_id'])
        return jsonify({"token": create_jwt(user), "user": user})
    return make_response('Incorrect login or password', 401)


@app.route('/api/singUp', methods=["POST"])
def singUp():
    args = request.get_json()
    args['timetable'] = []
    args['type'] = 'u'
    if db.users.find_one({"login": args['login']}) is None:
        try:
            res = db.users.insert_one(args)
            return make_response('ok', 200)
        except:
            return make_response('some problems', 400)
    return make_response('User already exists', 401)


@app.route('/api/auth', methods=["POST"])
def auth():
    args = request.get_json()
    try:
        user = jwt.decode(args['token'], app.secret_key)
    except:
        return make_response('Signature has expired', 400)

    return jsonify({"user": user, "token": create_jwt(user)})
