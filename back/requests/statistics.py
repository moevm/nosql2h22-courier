from flask import Flask, request, make_response, jsonify
from app import app, db

import itertools
from .decorators import check_admin, check_access
from .db_requests import delay_requests, month_stats


@app.route('/api/stats/delays', methods=['POST'])
@check_admin
def worker_stats():
    args = request.get_json()
    return jsonify(delay_requests(db.orders, args)), 200


@app.route('/api/stats/month_stats_by_courier', methods=['GET'])
@check_admin
def month_stats_by_courier():
    args = request.get_json()
    pipeline = {
            '$group': {
                '_id': '$courier_info',
                'sum_val': {
                    '$sum': '$cost'
                },
                'count': {
                    '$sum': 1
                }
            }
        }
    return jsonify(month_stats(db.orders, pipeline, month_range=args['range'])), 200