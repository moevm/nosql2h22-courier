from datetime import datetime
from calendar import monthrange
from bson import ObjectId


def find(filter, db):
    if '_id' in filter.keys():
        filter['_id'] = ObjectId(filter['_id'])
    res = [i for i in db.find(filter)]
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def find_user_orders(user, db):
    res = list(db.find({'$or': [{"sender_info": user}, {"recipient_info": user}]}))
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def find_workers(db):
    res = list(db.find({'type': {'$in': ['a', 'c', 'd']}}))
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def delay_requests(db, user):
    if len(user.keys()) != 0:
        res = list(db.find({'$where': 'this.expected_date < this.real_date', 'courier_info.email': user['email']}))
    else:
        res = list(db.find({'$where': 'this.expected_date < this.real_date'}))
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def month_stats_by_courier(db):
    data = datetime.now()
    res = list(db.aggregate([
        {
            '$match': {
                'expected_date': {
                    '$gte': datetime(data.year, data.month - 1, monthrange(data.year, data.month - 1)[1]),
                    '$lte': datetime(data.year, data.month + 1, 1)
                }
            }
        }, {
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
    ]))
    return res
