import random 
import os
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/', methods=['GET'])
@cross_origin()
def result():
    lines = open("./generated.txt", encoding="utf8").readlines() 
    randomString = random.choice(lines)
    if randomString != "\n" and randomString != "====================":
        print(randomString.strip())
        return jsonify({'string': randomString.strip()})
    
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)