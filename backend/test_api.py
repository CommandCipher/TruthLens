import requests
import json

url = "http://127.0.0.1:5000/analyze"

data = {
    "text": "This is outrageous propaganda! It is allegedly a rigged agenda-driven plot. You won't believe this shocking clickbait! However, it is supported by data and documented evidence."
}

print("Testing the TruthLens API...")
response = requests.post(url, json=data)
print(json.dumps(response.json(), indent=2))