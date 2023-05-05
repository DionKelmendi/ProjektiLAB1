import requests

endpoint = "http://127.0.0.1:8000/prova/category/"

name = input("Enter new Category name: \n")

data = {
    "name" : name
}

get_response = requests.post(endpoint, json=data)
print("Category Created:")
print(get_response.json())
