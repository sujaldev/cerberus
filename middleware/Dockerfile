FROM python:alpine

WORKDIR /app

RUN python3 -m venv venv
ENV PATH="/app/venv/bin:$PATH"

COPY requirements.txt .
RUN pip install -Ur requirements.txt

COPY . .

CMD ["python", "app.py"]
