from flask import Flask, request, make_response, jsonify
from app import app, db
import itertools
from .decorators import check_admin, check_access
from .db_requests import delay_requests


@app.route('/api/stats/delays', methods=['POST'])
@check_admin
def worker_stats():
    args = request.get_json()
    return jsonify(delay_requests(db.orders, args)), 200

