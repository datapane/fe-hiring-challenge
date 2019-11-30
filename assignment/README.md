# Datapane Coding Challenge

My goal here is to achieve full mpa. 

datapane -> Main Django ( backend ) project
resources -> ( csvuploader, entryform, loremipsum )
csvuloader -> nextjs, reactjs
entryform -> starlette
loremipsum -> flask

How to run:

csvuploder
    
    npm install

    npm run dev

entryform 

    pipenv install

    pipenv run uvicorn server:app --port 4000

loremipsum

    export FLASK_APP=app.py
    
    pipenv install

    pipenv run flask run