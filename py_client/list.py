import requests

endpoint = "http://127.0.0.1:8000/prova/category/"

get_response = requests.get(endpoint)
print("Listing all Categories:")
print(get_response.json())
