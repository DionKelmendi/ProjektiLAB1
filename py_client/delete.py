import requests

category_id = input("What Category do you want to delete?\n")
try:
    category_id = int(category_id)
except:
    category_id = None
    print(f'{category_id} not a valid id')

if category_id:    
  endpoint = f"http://127.0.0.1:8000/prova/category/{category_id}/destroy"

  get_response = requests.delete(endpoint)
  print("Category deleted" if get_response.status_code==204 else "Category not found" )
