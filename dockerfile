FROM python:3.10.4

WORKDIR /app

COPY . .

RUN pip3 install -r ./requirements.txt

CMD [ "gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]