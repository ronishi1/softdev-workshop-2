# Shaggy 2.0 - Ray Onishi & Bill Ni
# SoftDev2 pd7
# K06 -- Import/Export Bank
# 2019-03-04

'''
    American movies scraped from Wikipedia Database
    This json file contains all American movies from 1900, including information about genre, cast, and title.
    Link to raw data: https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
    When importing the json file into the mongoDB server, use the command below
    mongoimport --db DATABASE_NAME --collection COLLECTION_NAME --drop --jsonArray --file DIRECTORY_NAME/movies.json

'''
import pymongo
SERVER_ADDR = "68.183.130.243"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.movies
collection = db.movielist

def search_year(year):
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
