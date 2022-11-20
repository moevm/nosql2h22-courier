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
    res = [i for i in db.find({"sender_info": user})]
    [res.append(i) for i in db.find({"recipient_info": user}) if i is not None]
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
