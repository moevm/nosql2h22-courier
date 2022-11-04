from flask import Flask, request, make_response, jsonify
from app import app, db
import json
from bson import ObjectId
from io import StringIO


@app.route('/api/orders', methods=["GET"])
def orders():
    args = request.args.get('filters')
    io = StringIO(args)
    filters = json.load(io)
    if '_id' in filters.keys():
        filters['_id'] = ObjectId(filters['_id'])
    orders = [i for i in db.orders.find(filters)]
    [i.__setitem__('_id', str(i["_id"])) for i in orders]
    return jsonify({"orders": orders}), 200
