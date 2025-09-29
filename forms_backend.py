from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# RDS credentials
DB_HOST = "contact-form-db.cfcymk6oez3w.ap-south-1.rds.amazonaws.com"
DB_PORT = "5432"
DB_USER = "postgres"
DB_PASSWORD = "!Future2025!"
DB_NAME = "contact-form-db"

def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        dbname=DB_NAME
    )
    return conn

@app.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    mobile = data.get('mobile')
    message = data.get('message')

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO contact_messages (name, email, mobile, message)
        VALUES (%s, %s, %s, %s)
    """, (name, email, mobile, message))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"status": "success", "message": "Form submitted successfully!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
