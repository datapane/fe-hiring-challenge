### How to start the app

1. Create a virtualenv:
```bash
# if you don't have it installed please run
# pip3 installl --user virtualenv or sudo apt-get install python-virtualenv

virtualenv -p python3 venv
```

2. Activate it
```bash
source venv/bin/activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Go to `app` directory and create a file named `.env` with values for config variables that will be used by the app (you can refer to `.env.example` as an example)
```bash
cd app
cp .env.example .env
vim .env # or use any other preferred text editor
```

4. In the same directory, run migrations to create a SQLite database:
```bash
python manage.py migrate
```

5. Start the app, it will be accessible from `http://localhost:8000`
```bash
python manage.py runserver
```
