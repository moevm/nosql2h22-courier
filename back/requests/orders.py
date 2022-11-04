from flask import Flask, request, make_response, jsonify
from app import app, db
import json
from bson import ObjectId
from io import StringIO


def get_orders(filter):
    if '_id' in filter.keys():
        filter['_id'] = ObjectId(filter['_id'])
    orders = [i for i in db.orders.find(filter)]
    [i.__setitem__('_id', str(i["_id"])) for i in orders]
    return orders

@app.route('/api/orders', methods=["GET"])
def orders():
    args = request.args.get('filters')
    io = StringIO(args)
    filters = json.load(io)
    return jsonify({"orders": get_orders(filters)}), 200


@app.route('/api/tracker/find', methods=['POST'])
def tracker():
    args = request.get_json()
    return jsonify({"current_tracker_info": get_orders(args)}), 200