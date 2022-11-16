from flask import Flask, request, make_response, jsonify
from app import app, db
import json
import jwt

from .decorators import check_admin
from .db_requests import find


@app.route('/api/users', methods=["POST"])
@check_admin
def orders():
    args = request.get_json()
    return jsonify({"users": find(args, db.users)}), 200

