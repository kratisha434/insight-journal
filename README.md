Insight Journal 🧠📊

A full-stack emotional analytics journal application that analyzes user mood from journal entries, tracks trends over time, and provides personalized insights and recommendations.

🚀 Features

✍️ Add journal entries

😊 Automatic mood score using sentiment analysis

📈 Mood trend visualization with line chart

📊 Average mood calculation

💡 Dynamic insight generation

🧘 Personalized recommendations

🎨 Clean modern UI (React + Chart.js)

🔗 REST API powered by Flask

🏗 Tech Stack
Backend

Python

Flask

Flask-CORS

TextBlob (Sentiment Analysis)

Frontend

React (Vite)

Chart.js

react-chartjs-2

📂 Project Structure
insight-journal-app/
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── frontend-react/
│   ├── package.json
│   └── src/
│       └── App.jsx
│
└── README.md

⚙️ Setup Instructions
1️⃣ Backend Setup

Navigate to backend:

cd backend


Create virtual environment (optional but recommended):

python -m venv venv


Activate environment:

Windows

venv\Scripts\activate


Mac/Linux

source venv/bin/activate


Install dependencies:

pip install -r requirements.txt


Run server:

python app.py


Backend runs at:

http://127.0.0.1:5000

2️⃣ Frontend Setup

Navigate to frontend:

cd frontend-react


Install dependencies:

npm install


Run development server:

npm run dev


Frontend runs at:

http://localhost:5173

📊 How It Works

User submits a journal entry.

Backend analyzes sentiment using TextBlob.

Sentiment polarity is converted into a mood score.

Entry is stored in memory.

Frontend:

Displays mood score

Updates average mood

Updates trend chart

Generates insights & recommendations

🧠 Mood Analysis Logic

Polarity range: -1 (negative) to +1 (positive)

Converted to mood score (0–100 scale)

Average mood determines:

Emotional trend

Insight message

Personalized recommendation

📈 Example Use Case

Track emotional patterns over days

Identify emotional dips

Receive simple actionable advice

Visualize improvement over time



📌 Future Improvements

Database integration (PostgreSQL / MongoDB)

User authentication

Persistent data storage

Deployment (Render / Vercel)

AI-powered deeper emotional insights

👤 Author

Kratisha Hiran
GitHub: https://github.com/kratisha434

📜 License

This project is for educational and demonstration purposes.