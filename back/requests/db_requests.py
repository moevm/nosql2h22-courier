from bson import ObjectId


def find(filter, db):
    if '_id' in filter.keys():
        filter['_id'] = ObjectId(filter['_id'])
    res = [i for i in db.find(filter)]
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res


def find_user_orders(user, db):
    res = [i for i in db.find({"sender_info": user})]
    [res.append(i) for i in db.find({"recipient_info": user}) if i is not None]
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res