# Goal Tracking App

A simple web application to set weekly goals, track daily progress, and generate performance reports.

---

## Features

- **Goal Management**: Add, update, and delete goals seamlessly.
- **Progress Tracking**: Monitor progress daily and ensure it doesn’t exceed the target.
- **Weekly Reports**: View weekly progress filtered by current-week goals.
- **Downloadable Reports**: Export weekly performance reports in JSON format.

---

## Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Database**: SQLite

---

## Setup Instructions

### Backend Setup

1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone <repository-link>
   cd backend
2. Create and activate a virtual environment:
    ```bash
     python -m venv env
    source env/bin/activate      # Linux/Mac
       .\env\Scripts\activate       # Windows
3.     ```bash
pip install -r requirements.txt
  python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver

4.   ```bash
     cd frontend
      npm install
     npm start

