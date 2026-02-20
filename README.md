Insight Journal

Personal Emotional Analytics Dashboard

1. Problem Statement
Most journaling applications allow users to record thoughts but do not provide structured emotional analytics. Users lack visibility into mood patterns, volatility, or emerging emotional trends over time.

Insight Journal bridges this gap by combining journaling with lightweight emotional analysis and trend detection.

2. Solution Overview
Insight Journal is a full-stack web application that:
Stores journal entries
Performs sentiment analysis on each entry
Tracks mood averages over time
Detects emotional trends and volatility
Generates dynamic insights based on recent patterns

The system provides a clean frontend dashboard backed by a REST-based Flask API.

3. Architecture
Backend
Python (Flask)
SQLite database
REST API design
Sentiment analysis via TextBlob
Rolling-window trend and volatility detection

Frontend
Vanilla HTML/CSS/JavaScript
Fetch-based API calls
Chart.js for mood visualization

Architecture Flow
User Input → Flask API → Sentiment Processing → Database Storage → Aggregation Logic → Insight Generation → Frontend Dashboard

4. Key Technical Decisions
1. RESTful Backend Separation
Frontend and backend are decoupled to ensure scalability and modularity.

2. Rolling-Window Mood Analysis
Insights are generated using the last N entries instead of global averages to better reflect recent emotional shifts.

3. Lightweight Sentiment Analysis
TextBlob was chosen for simplicity and interpretability over heavier ML frameworks.

4. SQLite for Simplicity
Given single-user scope and evaluation constraints, SQLite ensures zero external dependency setup.

5. Insight Logic
The system calculates:
Sentiment polarity per entry
Average mood score
Mood trend over time
Volatility detection (large emotional swings)

Based on these metrics, the application dynamically generates contextual insights such as:
Stable emotional state
Improving mood trend
Declining emotional trend
High emotional volatility

6. AI Usage
AI was used as a development assistant for:
Refining backend logic
Debugging edge cases
Improving structure and modularity
Reviewing architectural clarity

All generated code was manually validated and tested before integration.

7. Risks & Trade-offs
Sentiment analysis is heuristic-based and may misinterpret nuanced language.
Small datasets can produce unstable trends.
Single-user system (no authentication layer).
No model retraining or adaptive personalization.

8. Future Improvements
Multi-user authentication
Persistent user profiles
Improved NLP models (e.g., transformer-based sentiment models)
Emotion classification beyond polarity
Historical analytics dashboard
Exportable emotional reports
Real-time insight recalibration

9. Setup Instructions
1. Clone the Repository
git clone <repo-link>
cd insight-journal/backend

2. Install Dependencies
pip install -r requirements.txt

3. Run Backend
python app.py

4. Launch Frontend
Open frontend/index.html in a browser.

10. Project Structure
insight-journal/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│
├── frontend/
│   └── index.html
│
├── README.md
├── ai_guidelines.md
└── walkthrough.md