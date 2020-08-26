from flask import Flask


def create_app(deployment="production"):
    flask_app = Flask(__name__, static_folder='./dist')
    with flask_app.app_context():
        from app import routes

    return flask_app
