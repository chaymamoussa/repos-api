import json
from flask import Blueprint, jsonify
from repos.controllers import get_licences

licence_blueprint = Blueprint('licence_blueprint', __name__)

@licence_blueprint.route("/licence", methods=['GET'])
def get():
    licences = get_licences()
    return jsonify(licences)