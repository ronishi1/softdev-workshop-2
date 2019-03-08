import pymongo
import json

def connect(ip):
    connection = pymongo.MongoClient(ip)
    return connection

#Import the database
def import_db(connection):
    f = open("movies.json","r",encoding="utf8")
    data = json.loads(f.read())
    f.close()

    #Drop the existing database if exists
    connection.drop_database('test')
    collection = connection['test']['movies']
    collection.insert_many(data)
    return collection

#Search movies by the year
def search_year(collection,year):
    results = collection.find({"year":year})
    return [movie['title'] for movie in results]

#Search movies by the genre
def search_genre(collection,genre):
    results = collection.find({"genres":genre})
    return [movie['title'] for movie in results]

#Search movies by the cast
def search_cast(collection,name):
    results = collection.find({"cast" : name})
    return [movie['title'] for movie in results]

#Search movies by the genre and year
def search_genre_year(collection,genre,year):
    results = collection.find({'$and': [{"genres": genre},{'year': year}]})
    return [movie['title'] for movie in results]
