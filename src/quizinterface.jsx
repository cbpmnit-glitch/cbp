// src/quizinterface.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Change this if your backend runs elsewhere.
 * Example full URL:
 *   const BACKEND_URL = "http://localhost:3000/save-result";
 */
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbzK_BO7Nmc-JmfDZmU3mIYuo7gffWBOha6mqcdXm8p7tLlhbA7_jv8xh15qGL6d/exec";

export default function QuizApp() {
  // ---------- Questions ----------
  const questions = useMemo(
    () => [
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
        answer: "22",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.K. Rowling", "Harper Lee", "Mark Twain", "Ernest Hemingway"],
        answer: "Harper Lee",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
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
    ],
    []
  );

  // ---------- State ----------
  const [step, setStep] = useState("user"); // "user" | "quiz" | "submitted"
  const [userData, setUserData] = useState({ name: "", email: "", rollno: "" });

  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  // these are kept only in state and NEVER shown on the UI
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [answers, setAnswers] = useState([]); // raw answers by user (or "No Answer")

  // track total time (not shown on UI, only sent to backend)
  const [totalStart, setTotalStart] = useState(null);
  const [totalEnd, setTotalEnd] = useState(null);

  // internal guard to prevent double-finishing
  const finishedRef = useRef(false);

  // ---------- Timer ----------
  useEffect(() => {
    if (step !== "quiz") return;
    if (current >= questions.length) return;

    if (timeLeft === 0) {
      // auto submit "No Answer" on timeout
      handleAnswer(null);
      return;
    }

    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft, step, current, questions.length]);

  // ---------- Handlers ----------
  const startQuiz = (e) => {
    e.preventDefault();
    setStep("quiz");
    setCurrent(0);
    setTimeLeft(10);
    setScore(0);
    setIncorrectAnswers([]);
    setAnswers([]);
    finishedRef.current = false;
    const start = new Date();
    setTotalStart(start);
    setTotalEnd(null);
  };

  const handleAnswer = (selected /* string|null */) => {
    if (finishedRef.current) return; // safety

    const q = questions[current];
    const chosen = selected || "No Answer";

    // save raw answer for qN
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = chosen;
      return next;
    });

    // scoring (not shown)
    if (selected === q.answer) {
      setScore((s) => s + 1);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        { question: q.question, correctAnswer: q.answer, yourAnswer: chosen },
      ]);
    }

    // move to next question or finish
    const isLast = current + 1 >= questions.length;
    if (!isLast) {
      setCurrent((c) => c + 1);
      setTimeLeft(10);
    } else {
      // finish
      finishedRef.current = true;
      const end = new Date();
      setTotalEnd(end);

      // compute final score including last correct if needed (since setScore is async)
      const finalScore = score + (selected === q.answer ? 1 : 0);
      const totalSeconds =
        totalStart && end ? Math.floor((+end - +totalStart) / 1000) : 0;
      const totalMin = Math.floor(totalSeconds / 60);
      const totalSec = totalSeconds % 60;

      // create q1..q10 map
      const answerMap = {};
      for (let i = 0; i < questions.length; i++) {
        const key = `q${i + 1}`;
        answerMap[key] = answers[i] ?? (i === current ? chosen : "No Answer");
      }

      // Save to backend (includes private fields score, time, incorrectAnswers, q1..q10)
      saveResult({
        name: userData.name,
        email: userData.email,
        rollno: userData.rollno,
        score: finalScore,
        totalQuestions: questions.length,
        incorrectAnswers,
        totalTime: `${totalMin} min ${totalSec} sec`,
        ...answerMap,
      }).finally(() => {
        // switch UI AFTER save attempt (even if it fails, we still move)
        setStep("submitted");
      });
    }
  };

  const BACKEND_URL = "https://script.google.com/macros/s/AKfycbzK_BO7Nmc-JmfDZmU3mIYuo7gffWBOha6mqcdXm8p7tLlhbA7_jv8xh15qGL6d/exec"

  async function saveResult(payload) {
    try {
      await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Failed to save:", err);
    }
  }

  // ---------- Derived ----------
  const progressPct = Math.min((current / questions.length) * 100, 100);

  // Note: total time is NOT displayed on UI per your request, but it is sent to backend.

  // ---------- UI ----------
  return (
    <>
      {/* Keep your original palette and layout */}
      <style>{`
        :root{
          --blue-dark: #001f4b;
          --blue-800: #012a63;
          --blue-700: #03386d;
          --blue-650: #04487f;
          --blue-600: #015b98;
          --blue-500: #2e78a6;
          --blue-450: #4f88ad;
          --blue-400: #6497b1;
          --blue-300: #8ab3c8;
          --blue-250: #9fbfd2;
          --blue-200: #b2cde1;
          --blue-150: #c7d9ea;
          --card-bg: #ffffff;
          --text-dark: #1d2a39;
          --muted: #607D8B;
          --muted-2: #728A96;
          --success: #0f9d58;
          --warning: #ffb300;
          --error: #d32f2f;
          --shadow: rgba(0, 0, 0, 0.1);
        }

        /* Page */
        .page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, var(--blue-200), var(--blue-400));
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 24px;
        }

        /* Card Container */
        .container {
          background-color: var(--card-bg);
          padding: 2.5rem;
          border-radius: 1.25rem;
          box-shadow: 0 8px 24px var(--shadow);
          width: 92%;
          max-width: 760px;
          position: relative;
          z-index: 0;
          animation: fadeIn 0.6s ease-in-out;
          overflow: hidden;
        }

        /* Layered glow border */
        .container::after {
          content: "";
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          background: var(--card-bg);
          border-radius: 2rem;
          z-index: -1;
        }
        .container::before {
          content: "";
          position: absolute;
          left: -12px; top: -12px;
          width: calc(100% + 24px);
          height: calc(100% + 24px);
          border-radius: 1.5rem;
          background: linear-gradient(
            90deg,
            var(--blue-dark),
            var(--blue-700),
            var(--blue-600),
            var(--blue-400),
            var(--blue-200),
            var(--blue-400),
            var(--blue-600),
            var(--blue-700),
            var(--blue-dark)
          );
          background-size: 400%;
          filter: blur(14px);
          z-index: -2;
          animation: colorflow 26s infinite linear;
          opacity: 0.75;
        }
        @keyframes colorflow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) }
          to { opacity: 1; transform: translateY(0) }
        }

        /* Header & logo */
        header .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 1rem;
        }
        header img {
          height: 54px; width: 54px; object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        header h1 {
          font-size: 2rem;
          color: var(--text-dark);
          font-weight: 800;
          margin: 0;
          letter-spacing: .3px;
        }
        .highlight { color: var(--blue-dark); }

        /* Session info */
        .session-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.25rem;
          margin-bottom: 1.15rem;
          padding: 0 0.25rem;
          gap: 12px;
        }
        .session-title {
          color: var(--blue-600);
          font-size: 1.55rem;
          font-weight: 800;
          margin: 0;
          text-align: left;
        }
        .speaker-name {
          font-size: 1.06rem;
          color: var(--blue-dark);
          margin: 0;
          text-align: right;
          font-style: italic;
        }

        /* Section headings */
        section h2 {
          color: var(--blue-700);
          margin-top: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.35rem;
        }

        /* User form */
        #user-info-form {
          max-width: 480px;
          margin: 0 auto;
        }
        #user-info-form label {
          display: block;
          margin: 0.5rem 0 0.3rem;
          font-weight: 700;
          color: var(--blue-dark);
          letter-spacing: .25px;
        }
        #user-info-form input[type="text"],
        #user-info-form input[type="email"] {
          width: 100%;
          padding: 0.8rem .9rem;
          margin-bottom: 1rem;
          border: 2px solid var(--blue-400);
          border-radius: 10px;
          outline: none;
          transition: 0.18s ease;
          font-size: 1rem;
          color: var(--text-dark);
          background: #fcfdff;
        }
        #user-info-form input[type="text"]::placeholder,
        #user-info-form input[type="email"]::placeholder {
          color: #9db1c0;
        }
        #user-info-form input[type="text"]:focus,
        #user-info-form input[type="email"]:focus {
          border-color: var(--blue-600);
          box-shadow: 0 0 0 3px rgba(1,91,152,0.18);
        }

        /* Start button */
        #user-info-form button {
          display: block;
          margin: 1rem auto 0;
          padding: 12px 24px;
          font-size: 1rem;
          background: linear-gradient(90deg, var(--blue-dark), var(--blue-650));
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 8px 16px rgba(0,31,75,0.25);
          font-weight: 700;
          letter-spacing: .3px;
        }
        #user-info-form button:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 22px rgba(0,31,75,0.28);
        }
        #user-info-form button:active {
          transform: translateY(0px) scale(.99);
        }

        /* Timer */
        #timer {
          text-align: center;
          font-size: 1.08rem;
          margin: 0.8rem 0 1rem;
          font-weight: 800;
          color: var(--blue-700);
          padding: 0.55rem .8rem;
          border: 2px dashed var(--blue-600);
          border-radius: 12px;
          background: #f4f9fd;
          letter-spacing: .2px;
        }

        /* Progress bar */
        #progress-bar {
          width: 100%;
          height: 14px;
          background-color: #eef2f6;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1.2rem;
          box-shadow: inset 0 1px 2px rgba(0,0,0,.06);
        }
        #progress-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, var(--blue-600), var(--blue-400));
          transition: width 0.35s ease-in-out;
        }

        /* Question card */
        .question {
          background-color: #f8fbff;
          border: 1px solid #dbe7f3;
          padding: 1.05rem 1.1rem;
          margin-bottom: 1rem;
          border-radius: 14px;
          animation: slideIn 0.28s ease;
        }
        .question h3 {
          margin: .1rem 0 .8rem;
          color: var(--blue-dark);
          font-size: 1.15rem;
        }
        .options {
          display: grid;
          grid-template-columns: 1fr;
          gap: .55rem;
        }
        .options label {
          display: flex;
          align-items: center;
          gap: .55rem;
          padding: .55rem .7rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
          color: #243b53;
          border: 1px solid #e3edf6;
          background: #ffffff;
          transition: background .15s ease, border-color .15s ease, transform .05s ease;
        }
        .options label:hover {
          background: #f1f7fc;
          border-color: #cfe3f7;
        }
        .options input[type="radio"] {
          accent-color: var(--blue-600);
          transform: scale(1.05);
        }
        .options label:active {
          transform: scale(.996);
        }

        @keyframes slideIn {
          from { transform: translateX(14px); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }

        /* Result section (no score or time shown) */
        #result-section {
          text-align: center;
          padding: .75rem;
        }
        #result-info {
          background: #eef7ff;
          border: 1px solid #cfe3f7;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          color: #223a5a;
          animation: slideUp .35s ease;
        }
        #result-info h3 {
          color: var(--blue-600);
          font-size: 1.35rem;
          margin-top: 0.6rem;
        }
        #result-info p {
          font-size: 1rem;
          color: #3a506b;
          margin: .35rem 0;
        }
        .result-item {
          display: flex;
          gap: .4rem;
          justify-content: center;
          align-items: center;
          line-height: 1.3;
          flex-wrap: wrap;
        }
        .result-item b { color: var(--blue-dark); }

        @keyframes slideUp {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }

        .hidden { display: none; }

        /* Subtle footer / note */
        .note {
          margin-top: .85rem;
          font-size: .92rem;
          color: var(--muted-2);
        }
      `}</style>

      <div className="page">
        <div className="container">
          {/* Header */}
          <header>
            <div className="logo">
              <img src="logo.png" alt="CBP Logo" />
              <h1>
                <span className="highlight">CBP</span> QUIZ
              </h1>
            </div>
          </header>

          {/* Session Info */}
          <div className="session-info">
            <h2 className="session-title">Day 01: Secret of Success</h2>
            <h3 className="speaker-name">Speaker: Vimal Dubey</h3>
          </div>

          {/* User Info */}
          {step === "user" && (
            <section id="user-info-section">
              <h2>Enter Your Details</h2>
              <form id="user-info-form" onSubmit={startQuiz}>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />

                <label htmlFor="email">Email-ID:</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                />

                <label htmlFor="rollno">Roll No:</label>
                <input
                  id="rollno"
                  type="text"
                  required
                  value={userData.rollno}
                  onChange={(e) =>
                    setUserData({ ...userData, rollno: e.target.value })
                  }
                  placeholder="Your roll number"
                />

                <button type="submit" aria-label="Start Quiz">
                  Start Quiz
                </button>
              </form>
            </section>
          )}

          {/* Quiz Section */}
          {step === "quiz" && (
            <section id="quiz-section">
              <h2>Quiz Time!</h2>

              <div id="timer" role="status" aria-live="polite">
                Time Left: {timeLeft} seconds
              </div>

              <div id="progress-bar" aria-label="Quiz progress">
                <div id="progress-fill" style={{ width: `${progressPct}%` }} />
              </div>

              {/* Question */}
              <div id="question-container">
                <div className="question" key={current}>
                  <h3>
                    {current + 1}. {questions[current].question}
                  </h3>
                  <div className="options">
                    {questions[current].options.map((opt) => (
                      <label key={opt}>
                        <input
                          type="radio"
                          name={`option-${current}`}
                          value={opt}
                          onChange={() => handleAnswer(opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Submitted (show ONLY Name, Roll No, Email and success message). 
              Score and Total Time are NOT shown, but were sent to the backend. */}
          {step === "submitted" && (
            <section id="result-section">
              <h2>Quiz Results</h2>
              <div id="result-info">
                <p className="result-item">
                  <b>Name:</b> <span>{userData.name}</span>
                </p>
                <p className="result-item">
                  <b>Roll No:</b> <span>{userData.rollno}</span>
                </p>
                <p className="result-item">
                  <b>Email-ID:</b> <span>{userData.email}</span>
                </p>

                <h3>✅ Your quiz has been submitted successfully!!</h3>

                {/* Intentionally hidden on UI:
                    - Total time
                    - Score
                    - Incorrect answers
                    They are still captured and POSTed to the backend. */}
                <p className="hidden">
                  (Time and score are hidden by design.)
                </p>

                <p className="note">
                  You can close this window now. Have a great day!
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
