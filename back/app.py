import os 
from flask import Flask
from flask_cors import CORS
from repos.views import licence_blueprint


os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./key.json"

app = Flask(__name__)
cors = CORS(app, resources={r"/licence/*": {"origins": "*"}})
app.register_blueprint(licence_blueprint)

if __name__ == '__main__':
    app.run(debug=True)