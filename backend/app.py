from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define a "Route" (URL path)
@app.route('/')
def home():
    return "<h1>Hello, Flask!</h1><p>This is my first web server.</p>"

# API endpoint that returns JSON data
@app.route('/api/data')
def get_data():
    data = {
        'message': 'Hello from Flask backend!',
        'numbers': [1, 2, 3, 4, 5],
        'status': 'success'
    }
    return jsonify(data)

# API endpoint that accepts POST data
@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()  # This picks up the JSON you sent
    print(data)

    data = {
        'message': 'Data received by Flask!',
        'status': 'success'
    }
    return jsonify(data)

# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

