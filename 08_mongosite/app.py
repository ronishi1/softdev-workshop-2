# Team Garfield - Ray Onishi, Jiayang Chen, Theodore Peters
# SoftDev2 pd7
# K08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-08

'''
    American movies scraped from Wikipedia Database
    This json file contains all American movies from 1900, including information about genre, cast, and title.
    Link to raw data: https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
'''


from flask import Flask, redirect, url_for, render_template, session, request, flash
import os
import json

from util import mongo

app = Flask(__name__)
app.secret_key = os.urandom(32)
collection = None

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/handle',methods=["GET","POST"])
def handle():
    ip = request.form.get('ip').strip()
    connection = mongo.connect(ip)
    global collection
    collection = mongo.import_db(connection)
    return redirect(url_for('search'))

@app.route('/search')
def search():
    return render_template('search.html')

@app.route('/results')
def results():
    result = []
    if 'year' in request.args and request.args['year'].strip() != '':
        year = int(request.args['year'])
        movies = mongo.search_year(collection,year)
        result = movies

    if 'genre' in request.args and request.args['genre'].strip() != '':
        genre = request.args['genre']
        movies = mongo.search_genre(collection,genre)
        result = movies

    if 'cast' in request.args and request.args['cast'].strip() != '':
        cast = request.args['cast']
        movies = mongo.search_cast(collection,cast)
        result = movies

    return render_template('results.html', movies = result)


if __name__ == "__main__":
    app.debug = True
    app.run()
