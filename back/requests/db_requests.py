from datetime import datetime
from calendar import monthrange
from bson import ObjectId
from typing import Dict, Any


def find(filter, db):
    if '_id' in filter.keys():
        filter['_id'] = ObjectId(filter['_id'])
    filter = make_mongo_filter(filter)
    res = [i for i in db.find(filter)]
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def find_user_orders(user, db):
    res = list(db.find({'$or': [{"sender_info": user}, {"recipient_info": user}]}))
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res



def make_mongo_filter(filter: Dict[str, Any]) -> Dict[str, Any]:
    """
    filter format: {key:{key1:str, key2:str}, key:str, key:[str, str]}
    """
    mongo_filter = {}
    for key in filter:
        if isinstance(filter[key], str) or isinstance(filter[key], list):
            mongo_filter[key] = filter[key]
        elif isinstance(filter[key], dict):
            # TODO car info is dict
            for other_key in filter[key]:
                mongo_filter[f"{key}.{other_key}"] = filter[key][other_key]
    return mongo_filter

def find_workers(db):
    res = list(db.find({'type': {'$in': ['a', 'c', 'd']}}))
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def month_stats(db, elem, month_range):
    data = datetime.now()
    gte = datetime(data.year, data.month - month_range, monthrange(data.year, data.month - month_range)[1]) if data.month - month_range >= 1 else datetime(data.year-1, 12 - (data.month - month_range), monthrange(data.year-1, 12 - (data.month - month_range))[1])
    lte = datetime(data.year, data.month + month_range, 1) if data.month + month_range <= 12 else datetime(data.year+1, 12 - data.month + month_range, 1)
    pipeline = [{
            '$match': {
                'expected_date': {
                    '$gte': gte,
                    '$lte': lte
                }
            }
        }]
    [pipeline.append(i) for i in elem]
    res = list(db.aggregate(pipeline))
    return res

