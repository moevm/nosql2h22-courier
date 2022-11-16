from flask import Flask, request, make_response, jsonify
from app import app, db
import json
import jwt

from .decorators import check_admin
from .db_requests import find


@app.route('/api/orders', methods=["POST"])
@check_admin
def orders():
    args = request.get_json()
    return jsonify({"orders": find(args, db.orders)}), 200


@app.route('/api/tracker/find', methods=['POST'])
@check_admin
def tracker():
    args = request.get_json()
    return jsonify({"current_tracker_info": find(args, db.orders)}), 200
