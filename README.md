# AUTOSALLON PARADISE (Projekti Lab 1)

This repository contains the source code for a project built with MySQL, Django (Django Rest Framework), and React.

## Installation

To set up the project locally, follow the instructions below:

### Prerequisites

- Python (version 3.11.3)
- Node.js (version 18.15.0)
- XAMPP (version 3.3.0)

1. Clone the repository:

   ```bash
   git clone https://github.com/DionKelmendi/ProjektiLAB1.git
   ```

2. Update the `.env` file with the necessary keys and configuration for your project.
  - Rename `.envR` into `.env`
  - Update the file with the necessary info

### React Setup

3.1. Navigate to the React frontend directory:

   ```bash
   cd reactapp/
   ```

3.2. Install the Node.js dependencies:

   ```bash
   npm install
   ```

3.3. Create a static build:

   ```bash
   npm run build
   ```

3.4. Start the React development server:

   ```bash
   npm start
   ```

### Django Setup

4.1. Install the Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4.2. Configure the MySQL database:

   - Create a MySQL database for the project.
   - Update the database settings in the `autosallon/settings.py` file to match your MySQL database configuration.
   - Import in mySQL the file called `autosallon.sql` in your database `autosallon`

4.3. Apply migrations to create the necessary database tables:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4.4. Replace the default Django `contrib/auth/models.py` file with our modified file called `changeContribAuthModel`.
  - Copy the text in a file called `changeContribAuthModel.txt`
  - Click CTRL+SHIFT+F and search for `contrib.auth.models`
  - Follow the link @ `USER` (by either using alt+click, or ctrl+click or any other way ) in the line `from django.contrib.auth.models import User`
  - Open it and paste from the file you copied

4.5. Start the Django API server:
   -You must create a superuser and with that superuser you should login in http://127.0.0.1:8000/en/admin/
  ```bash
  py manage.py createsuperuser 
  ```

4.6. On a seperate command line than the react server, start the django api server
```bash
  py manage.py runserver
```
  
5. Open your browser and access the application at `http://localhost:3000`.
6. You can access the admin dashboard at `http://127.0.0.1:8000/en/admin`.

