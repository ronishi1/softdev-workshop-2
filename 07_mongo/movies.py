# sHaGGy2.0 - Ray Onishi & Bill Ni
# SoftDev2 pd7
# K07 -- Import/Export Bank
# 2019-03-04

'''
    American movies scraped from Wikipedia Database
    This json file contains all American movies from 1900, including information about genre, cast, and title.
    Link to raw data: https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
    To import the movies data, run movies.py with import_db() uncommented. After running it, comment out the function call.

'''
import pymongo
import json

SERVER_ADDR = "68.183.130.243"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.Shaggy
collection = db.movielist

def import_db():
    f = open("movies.json","r",encoding="utf8")
    data = json.loads(f.read())
    f.close()

    collection.insert_many(data)

#import_db()

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

search_genre_cast("Action",2001)
