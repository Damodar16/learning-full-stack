from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///mydatabase.db'
app.config['SQL_ALCHEMY_TRACK_MODIFICATION'] = False

db = SQLAlchemy(app)
