from flask import Flask, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
@cross_origin()
def index():
    # return "Hello wolrd"
    return render_template('index.html')
