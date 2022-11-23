FROM python:3.8-slim

COPY ./ back
WORKDIR back

RUN pip3 install -r requirements.txt

CMD FLASK_APP=app.py FLASK_ENV=product flask run
