# AUTOSALLON PARADISE (Projekti Lab 1)

This repository contains the source code for a project built with MySQL, Django (Django Rest Framework), and React.

## Installation

To set up the project locally, follow the instructions below:

### Prerequisites

- Python (version 3.11.3)
- Node.js (version 18.15.0)
- MySQL (version 15.1)

### Django Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/DionKelmendi/ProjektiLAB1.git
   ```

2. Install the Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Configure the MySQL database:

   - Create a MySQL database for the project.
   - Update the database settings in the `autosallon/settings.py` file to match your MySQL database configuration.

4. Apply migrations to create the necessary database tables:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Replace the default Django `contrib/auth/models.py` file with our modified file called `changeContribAuthModel`.
  - Copy the text in a file called `changeContribAuthModel`
  - Click CTRL+SHIFT+F and search for `contrib.auth.models`
  - CTRL+CLICK IN USER from django.contrib.auth.models import User
  - Open it a paste from the file you copied

6. Update the `.env` file with the necessary keys and configuration for your project.
  - Rename `.envR` into `.env`
  - Update the file with the necessary info

7. Start the Django API server:

  ```bashk
  py manage.py runserver
  ```
  
### React Setup

7.1. Navigate to the React frontend directory:

   ```bash
   cd reactapp/
   ```

7.2. Install the Node.js dependencies:

   ```bash
   npm install
   ```

7.3. Start the React development server:

   ```bash
   npm start
   ```

7.4. Open your browser and access the application at `http://localhost:3000`.

