import React, { useState, useEffect } from "react";

export default function QuizApp() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What is 7 + 15?",
      options: ["14", "22", "16", "17"],
      answer: "22", // fixed correct answer
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "J.K. Rowling",
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
      ],
      answer: "Harper Lee",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "N2"],
      answer: "H2O",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Euro", "Dollar", "Pound"],
      answer: "Yen",
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Onion", "Avocado", "Lime"],
      answer: "Avocado",
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
  ];

  const [step, setStep] = useState("user"); // user | quiz | result
  const [userData, setUserData] = useState({ name: "", email: "", rollno: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // Timer logic
  useEffect(() => {
    if (step === "quiz" && currentQuestionIndex < questions.length) {
      if (timeLeft === 0) {
        handleAnswer(null);
        return;
      }
      const interval = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft, step, currentQuestionIndex]);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setStep("quiz");
    setTimeLeft(10);
  };

  const handleAnswer = (selected) => {
    const q = questions[currentQuestionIndex];
    if (selected === q.answer) {
      setScore((s) => s + 1);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          question: q.question,
          correctAnswer: q.answer,
          yourAnswer: selected || "No answer",
        },
      ]);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((i) => i + 1);
      setTimeLeft(10);
    } else {
      setStep("result");
    }
  };

  const restartQuiz = () => {
    setStep("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(10);
    setIncorrectAnswers([]);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logo}>
            <img
              src="logo.png"
              alt="CBP Logo"
              style={{ height: 50, width: 50 }}
            />
            <h1>
              <span style={{ color: "#7e57c2" }}>CBP</span> QUIZ
            </h1>
          </div>
        </header>

        {step === "user" && (
          <section>
            <h2>Enter Your Details</h2>
            <form onSubmit={handleUserSubmit}>
              <label>Name:</label>
              <input
                type="text"
                required
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                style={styles.input}
              />
              <label>Email-ID:</label>
              <input
                type="email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                style={styles.input}
              />
              <label>Roll No:</label>
              <input
                type="text"
                required
                value={userData.rollno}
                onChange={(e) =>
                  setUserData({ ...userData, rollno: e.target.value })
                }
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Start Quiz
              </button>
            </form>
          </section>
        )}

        {step === "quiz" && (
          <section>
            <h2>Quiz Time!</h2>
            <div style={styles.timer}>Time Left: {timeLeft} seconds</div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${
                    (currentQuestionIndex / questions.length) * 100
                  }%`,
                }}
              />
            </div>

            <div style={styles.questionCard}>
              <h3>
                {currentQuestionIndex + 1}.{" "}
                {questions[currentQuestionIndex].question}
              </h3>
              <div>
                {questions[currentQuestionIndex].options.map((opt) => (
                  <label key={opt} style={styles.option}>
                    <input
                      type="radio"
                      name="option"
                      value={opt}
                      onChange={() => handleAnswer(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </section>
        )}

        {step === "result" && (
          <section style={{ textAlign: "center" }}>
            <h2>Quiz Results</h2>
            <div style={styles.resultBox}>
              <p>
                <b>Name:</b> {userData.name}
              </p>
              <p>
                <b>Roll No:</b> {userData.rollno}
              </p>
              <p>
                <b>Email-ID:</b> {userData.email}
              </p>
              <h3>
                Your Score: {score} out of {questions.length}
              </h3>
            </div>

            {incorrectAnswers.length > 0 && (
              <div style={styles.incorrectBox}>
                <h4>Review Incorrect Answers:</h4>
                {incorrectAnswers.map((item, idx) => (
                  <div key={idx} style={styles.incorrectItem}>
                    <p>
                      <strong>Q:</strong> {item.question}
                    </p>
                    <p style={{ color: "#d32f2f" }}>
                      <strong>Your Answer:</strong> {item.yourAnswer}
                    </p>
                    <p style={{ color: "#388e3c" }}>
                      <strong>Correct Answer:</strong> {item.correctAnswer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button onClick={restartQuiz} style={styles.restartBtn}>
              Restart Quiz
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

// Inline styles (converted from your CSS)
const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #e0f7fa, #e1bee7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    margin: 0,
  },
  container: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "650px",
  },
  header: { textAlign: "center" },
  logo: { display: "flex", justifyContent: "center", gap: "12px" },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "2px solid #b39ddb",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    background: "#7e57c2",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  timer: {
    textAlign: "center",
    fontSize: "1.25rem",
    margin: "1rem 0",
    fontWeight: "bold",
    color: "#dc3545",
  },
  progressBar: {
    width: "100%",
    height: "14px",
    background: "#eee",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "1.5rem",
  },
  progressFill: { height: "100%", background: "#7e57c2" },
  questionCard: {
    background: "#f8faff",
    border: "1px solid #dbe4f0",
    padding: "1rem",
    borderRadius: "10px",
  },
  option: { display: "flex", alignItems: "center", marginBottom: "0.5rem" },
  resultBox: {
    background: "#f0f9ff",
    border: "1px solid #b3daff",
    padding: "1rem",
    borderRadius: "12px",
  },
  incorrectBox: {
    marginTop: "2rem",
    background: "#fff3f3",
    border: "1px solid #ffcccc",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "left",
  },
  incorrectItem: { borderBottom: "1px dashed #e57373", marginBottom: "1rem" },
  restartBtn: {
    marginTop: "1rem",
    background: "#28a745",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
