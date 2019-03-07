from flask import Flask, redirect, url_for, render_template, session, request
import pymongo
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/handle',methods=["POST"])
def handle():
    SERVER_ADDR = "68.183.130.243"
    connection = pymongo.MongoClient(SERVER_ADDR)
    db = connection.Shaggy
    collection = db.movielist

def search_year(year):
    print (db)
    for movie in collection.find({"year":year}):
        print(movie)

#search_year(1900)

def search_genre(genre):
    for movie in collection.find({"genres":genre}):
        print(movie)

#search_genre("Action")

def search_cast(name):
    for movie in collection.find({"cast":name}):
        print(movie)

#search_cast("Tom Cruise")

def search_genre_cast(genre,year):
    for movie in collection.find({'$and': [{"genres": genre},{'year': year}]}):
        print(movie)

#search_genre_cast("Action",2001)

if __name__ == "__main__":
    app.debug = True
    app.run()
