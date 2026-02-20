import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function App() {
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);
  const [averageMood, setAverageMood] = useState("-");
  const [insight, setInsight] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [trendData, setTrendData] = useState([]);

  const API = "http://127.0.0.1:5000";

  const loadEntries = async () => {
    const res = await fetch(`${API}/entries`);
    const data = await res.json();
    setEntries(data);
  };

  const loadAverage = async () => {
    const res = await fetch(`${API}/mood-average`);
    const data = await res.json();
    setAverageMood(data.average_mood);
  };

  const loadInsights = async () => {
    const res = await fetch(`${API}/insights`);
    const data = await res.json();
    setInsight(data.insight);
    setRecommendation(data.recommendation);
  };

  const loadTrend = async () => {
    const res = await fetch(`${API}/mood-trend`);
    const data = await res.json();
    setTrendData(data);
  };

  const addEntry = async () => {
    if (!content.trim()) return;

    await fetch(`${API}/entries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    setContent("");
    loadEntries();
    loadAverage();
    loadInsights();
    loadTrend();
  };

  useEffect(() => {
    loadEntries();
    loadAverage();
    loadInsights();
    loadTrend();
  }, []);

  const chartData = {
    labels: trendData.map((item) => item.date),
    datasets: [
      {
        label: "Mood Score",
        data: trendData.map((item) => item.mood_score),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Insight Journal</h1>
        <p style={styles.subtitle}>
          Personal Emotional Analytics Dashboard
        </p>

        <label htmlFor="journalEntry" style={{ fontWeight: "600" }}>
          Your Journal Entry
          </label>

          <textarea
           id="journalEntry"
           name="journalEntry"
           style={styles.textarea}
           rows="4"
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

        <button style={styles.button} onClick={addEntry}>
          Submit Entry
        </button>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <h3>Average Mood</h3>
            <p style={styles.statValue}>{averageMood}</p>
          </div>
        </div>

        <div style={styles.chartContainer}>
          <h3>Mood Trend</h3>
          <Line data={chartData} />
        </div>

        <div style={styles.insightBox}>
          <h3>Insight</h3>
          <p>{insight}</p>
        </div>

        <div style={styles.recommendationBox}>
          <h3>Recommendation</h3>
          <p>{recommendation}</p>
        </div>

        <div style={styles.entriesBox}>
          <h3>Journal Entries</h3>
          {entries.map((entry) => (
            <div key={entry.id} style={styles.entryItem}>
              <p>{entry.content}</p>
              <small>Mood: {entry.mood_score}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#F3F4F6",
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "800px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: "5px",
  },
  subtitle: {
    color: "gray",
    marginBottom: "30px",
  },
  textarea: {
    width: "100%",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    marginBottom: "15px",
    fontSize: "14px",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4F46E5",
    color: "white",
    cursor: "pointer",
    marginBottom: "25px",
  },
  statsRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  statBox: {
    backgroundColor: "#EEF2FF",
    padding: "20px",
    borderRadius: "10px",
    flex: 1,
  },
  statValue: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  chartContainer: {
    marginBottom: "30px",
  },
  insightBox: {
    backgroundColor: "#ECFDF5",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  recommendationBox: {
    backgroundColor: "#FEF3C7",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  entriesBox: {
    marginTop: "20px",
  },
  entryItem: {
    borderBottom: "1px solid #eee",
    padding: "10px 0",
  },
};

export default App;
