# django-react-template [WIP]

A template for a Django project with a React frontend. Supports the following:
1. Django backend (along with Django REST Framework)
2. React with TypeScript support
3. My preferred styling setup
4. Necessary scaffolding for elastic beanstalk deployment

## Getting Started

1. Clone the repo with `git clone https://github.com/prashanthselvam/django-react-template` and cd into the directory.
2. Create a new virtualenv using `virtualenv venv` and activate it with `source venv/bin/activate`
3. Install the dependencies with `pip install -r requirements.txt`
4. Create `.env` file from the `dot-env` template with `cp dot-env .env`
5. Run `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())’` to generate a dango secret key
6. Paste the generated key into the `SECRET_KEY` field in `.env`
7. Run `npm i` to install the frontend dependencies

After these steps, you should have an app that is fully ready to go. 

You can now run `./manage.py runserver` in one terminal tab and `npm run start:dev` in another to start the backend and frontend servers respectively.
