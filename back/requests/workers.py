from flask import Flask, request, make_response, jsonify
from app import app, db
import jwt
from .decorators import check_admin, check_access
from .db_requests import find, find_workers, find_worker_orders


@app.route('/api/worker/check-access-token/<token>/<user_hash>', methods=['GET'])
def check_access_token(token, user_hash):
    hash_val = str(hash(token))
    if hash_val[len(hash_val)-5:len(hash_val)] == user_hash:
        return make_response('ok', 200)
    return make_response('error', 400)


@app.route('/api/workers', methods=['GET'])
@check_admin
def get_workers():
    return jsonify(find_workers(db.users)), 200


@app.route('/api/worker/worker_orders', methods=['POST'])
@check_access
def worker_orders():
    args = request.get_json()
    user = jwt.decode(request.headers.get('Set_cookie'), app.secret_key)
    user_info = {
        'courier_info.second_name': user['second_name'],
        'courier_info.first_name': user['first_name'],
        'courier_info.fathers_name': user['fathers_name'],
        'courier_info.email': user['login'],
    }
    [args.__setitem__(i, user_info[i]) for i in user_info.keys()]
    return jsonify({"my_orders": find_worker_orders(args, db.orders)}), 200





