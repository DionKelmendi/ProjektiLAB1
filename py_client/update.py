import requests

category_id = input("What Category do you want to update?\n")
try:
    category_id = int(category_id)
except:
    category_id = None
    print(f'{category_id} not a valid id')

if category_id:    
  endpoint = f"http://127.0.0.1:8000/prova/category/{category_id}/update"

  name = input("Enter the new Category name:\n")

  data = {
      "name" : name
  }

  get_response = requests.put(endpoint, json=data)
  print(get_response.json())
