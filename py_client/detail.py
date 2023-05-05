import requests

category_id = input("What is the category id you want to use?\n")
try:
    category_id = int(category_id)
except:
    category_id = None
    print(f'{category_id} not a valid id')

if category_id:    
  endpoint = f"http://127.0.0.1:8000/prova/category/{category_id}/"

  get_response = requests.get(endpoint)
  print(f"Showing Category id={category_id}:")
  print(get_response.json())
