from flask import Flask, request, make_response, jsonify
from app import app, db
import json
import jwt
from utils.users import delete_pass_from_users
from .decorators import check_admin, check_access
from .db_requests import find, find_user_orders


@app.route('/api/users', methods=["POST"])
@check_admin
def users():
    args = request.get_json()
    args['type'] = 'u'
    users = {"users": find(args, db.users)}
    return jsonify(delete_pass_from_users(users)), 200


@app.route('/api/user/my_orders', methods=['POST'])
@check_access
def my_orders():
    args = request.get_json()
    print(args)
    return jsonify({"my_orders": find_user_orders(args['user'], db.orders)}), 200


@app.route('/api/user/generate-access-token/<token>', methods=['GET'])
def access_token(token):
    hash_val = str(hash(token))
    return jsonify({"code": hash_val[len(hash_val)-5:len(hash_val)]}), 200
