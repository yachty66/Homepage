# import required packages
# Create constructor object
# Creating routing
# Running web app

from flask import Flask,render_template

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello !!"

@app.route("/test")
def name(username):
    return "ein test"


if __name__ == "__main__":
    app.run(port=8080)