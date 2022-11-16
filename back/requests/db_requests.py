from bson import ObjectId


def find(filter, db):
    if '_id' in filter.keys():
        filter['_id'] = ObjectId(filter['_id'])
    res = [i for i in db.find(filter)]
    [i.__setitem__('_id', str(i["_id"])) for i in res]
    return res
