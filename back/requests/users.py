from flask import Flask, request, make_response, jsonify
from app import app, db
import json
import jwt

from .decorators import check_admin, check_access
from .db_requests import find, find_user_orders


@app.route('/api/users', methods=["POST"])
@check_admin
def users():
    args = request.get_json()
    args['type'] = 'u'
    return jsonify({"users": find(args, db.users)}), 200


@app.route('/api/user/my_orders', methods=['GET'])
@check_access
def my_orders():
    user = jwt.decode(request.headers.get('Set_cookie'), app.secret_key)
    args = {
        'second_name': user['second_name'],
        'first_name': user['first_name'],
        'fathers_name': user['fathers_name'],
        'email': user['login']
    }
    return jsonify({"my_orders": find_user_orders(args, db.orders)}), 200


@app.route('/api/user/generate-access-token/<token>', methods=['GET'])
def access_token(token):
    hash_val = str(hash(token))
    return jsonify({"code": hash_val[len(hash_val)-5:len(hash_val)]}), 200
