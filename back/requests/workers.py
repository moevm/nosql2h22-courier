from flask import Flask, request, make_response, jsonify
from app import app, db
import itertools
from .decorators import check_admin, check_access
from .db_requests import find, find_workers


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





