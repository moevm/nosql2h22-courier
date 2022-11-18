from flask import Flask
from flask_cors import CORS
import pymongo


app = Flask(__name__)
CORS(app)
app.config['Access-Control-Allow-Origin'] = '*'
app.secret_key = b'\xf5\xd9v\xe6$\xa1\xb4N.C0\xcc\xe2\xb5i\x8f'
client = pymongo.MongoClient('localhost', 27017)
db = client.courier

import utils.auth
import requests.orders
import requests.users
import requests.autopark
import requests.workers


@app.route('/', methods=['get'])
def home():
    return 'Hello on develop server'
