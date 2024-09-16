# Fruit.ai Application

This is a full-stack application for health manager product. The frontend is built with React, and the backend is implemented using Django REST framework. It provides a user interface for adding, updating, deleting, and viewing FAQs related to fruits. The app also includes a translator.

## Features

- User authentication with login page.
- FAQ management (Add, Update, Delete, View, Viewall).
- Translator for content translation.
- About page about Fruit.ai.

---

## Project Structure

### Frontend (React)

- **App.jsx**: The main application file that contains all the routes for different pages.
- **Pages/**: Contains the main pages (Login, Home) of the application.
- **components/Home/**: This folder contains components related to the Home section, including the Chatbot, FAQ management, Translator, and About page.
  - **ChatBot/**: The Chatbot component.
  - **Faq/**: Contains FAQ-related components such as `FAQList`, `AddFAQ`, `UpdateFAQ`, `DeleteFAQ`, and `FAQDetail`.
  - **Translator/**: The Translator component.
  - **About/**: The About page component.

### Backend (Django)

- **models.py**: Defines the `FruitFaq` model that stores fruit-related questions and answers.
- **serializers.py**: Contains the `FruitFaqSerializer` to handle JSON serialization for the `FruitFaq` model.
- **home/urls.py**: Defines API routes for the Fruit FAQ feature using Django REST framework.
- **home/views.py**: Implements the `FruitFaqViewSet` to provide CRUD operations for the FAQ model.

---

## Installation

### Prerequisites

- Node.js (for frontend)
- Python 3.x (for backend)
- Django
- Django REST framework
- React Router

### Setup Instructions

#### Backend (Django)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nikhil007R/Fruitai.git
   cd Backend/faqapi

2. Create and activate virtual environment:

bash
python3 -m venv venv
source venv/bin/activate

3. Install dependencies:

bash
pip install -r requirements.txt

4. Migrate the database:

bash
python manage.py migrate

5. Run the Django server:

bash
python manage.py runserver

#### Frontend (React)
1. Navigate to the frontend directory:

bash
cd ../frontend

2. Install dependencies:

bash
npm install


3. Run the React app:

bash
npm start