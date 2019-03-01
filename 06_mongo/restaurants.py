# Ray Onishi & Theodore Peters
# SoftDev2 pd7
# K06 -- Yummy Mongo Py
# 2019-02-28
import pymongo
SERVER_ADDR = "68.183.130.243"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def borough(borough):
    for restaurant in db.restaurants.find({"borough":borough}):
        print(restaurant)

#borough("Brooklyn")

def zipcode(zipcode):
    for restaurant in db.restaurants.find({"address.zipcode":zipcode}):
        print(restaurant)

#zipcode("10282")

def zipcode_grade(zipcode,grade):
    for restaurant in db.restaurants.find({'$and': [{"address.zipcode": zipcode},{"grades.0.grade": grade}]}):
        print(restaurant)

#zipcode_grade("10019","A")

def zipcode_threshold(zipcode,threshold):
    for restaurant in db.restaurants.find({'$and': [{"address.zipcode": zipcode},{"grades.0.score":{ '$lt': threshold }}]}):
        print (restaurant)

#zipcode_threshold("10019",8)

def cuisine_threshold(cuisine,threshold):
    for restaurant in db.restaurants.find({'$and': [{"cuisine": cuisine},{"grades.0.score":{ '$lt': threshold }}]}):
        print(restaurant)

#cuisine_threshold("French",10)
