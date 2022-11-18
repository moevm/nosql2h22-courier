from flask import Flask, request, make_response, jsonify
from app import app, db
import json
import jwt

from .decorators import check_admin
from .db_requests import find


@app.route('/api/autopark', methods=["POST"])
@check_admin
def autopark():
    args = request.get_json()
    return jsonify({"autopark": find(args, db.autopark)}), 200
