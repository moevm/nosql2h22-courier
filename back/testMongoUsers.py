import pymongo
client = pymongo.MongoClient('localhost', 27017)
db = client.courier
db.users.insert_one({
      'first_name': 'Nikita',
      'second_name': 'Ierusalimov',
      'fathers_name': '',
      'login': 'ccc@ccc.com',
      'password': '1111',
      'timetable': [],
      'type': 'u'
})