Ensure you have pipenv installed.

for MacOS : 

    brew install pipenv

    cd datapane-test
    pipenv shell --python=<path_to_python_3.8>

You can use different version of python as well. Just update the same in Pipfile

    pipenv isntall django
    ./manage.py migrate
    ./manage.py runserver 

Open `localhost:8000` to access the MPA