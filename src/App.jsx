import { useState } from "react";
import { TERMS } from "./terms";

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createBoard() {
  const shuffled = shuffle(TERMS).slice(0, 24);
  const boardTerms = shuffled.map((item) => item.term);
  boardTerms.splice(12, 0, "FREE");
  return boardTerms;
}

function createMarkedBoard() {
  const marks = Array(25).fill(false);
  marks[12] = true;
  return marks;
}

export default function App() {
  const [board, setBoard] = useState(createBoard);
  const [marked, setMarked] = useState(createMarkedBoard);
  const [currentClue, setCurrentClue] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [remainingClues, setRemainingClues] = useState(() => shuffle(TERMS));

  const isCaller =
    new URLSearchParams(window.location.search).get("caller") === "true";

  function toggle(index) {
    if (board[index] === "FREE") return;
    const newMarked = [...marked];
    newMarked[index] = !newMarked[index];
    setMarked(newMarked);
  }

  function nextDefinition() {
    let clues = [...remainingClues];

    if (clues.length === 0) {
      clues = shuffle(TERMS);
    }

    const nextClue = clues[0];
    const updatedClues = clues.slice(1);

    setCurrentClue(nextClue);
    setRemainingClues(updatedClues);
    setShowAnswer(false);
  }

  function newBoard() {
    setBoard(createBoard());
    setMarked(createMarkedBoard());
    setCurrentClue(null);
    setShowAnswer(false);
    setRemainingClues(shuffle(TERMS));
  }

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>CCNA Bingo</h1>

      {isCaller && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: 16,
            marginBottom: 20,
            borderRadius: 8,
            background: "#f8f8f8"
          }}
        >
          <h2 style={{ marginTop: 0 }}>Caller Panel</h2>

          <div style={{ marginBottom: 12 }}>
            <button
              onClick={nextDefinition}
              style={{
                padding: "10px 18px",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: 10
              }}
            >
              Next Definition
            </button>

            <button
              onClick={() => setShowAnswer(true)}
              style={{
                padding: "10px 18px",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: 10
              }}
            >
              Reveal Answer
            </button>

            <button
              onClick={newBoard}
              style={{
                padding: "10px 18px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              New Board
            </button>
          </div>

          <div style={{ marginTop: 10 }}>
            <strong>Definition:</strong>{" "}
            {currentClue
              ? currentClue.definition
              : "Click 'Next Definition' to begin."}
          </div>

          <div style={{ marginTop: 10 }}>
            <strong>Matching Term:</strong>{" "}
            {currentClue ? (showAnswer ? currentClue.term : "[hidden]") : "--"}
          </div>
        </div>
      )}

      {!isCaller && (
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <button
            onClick={newBoard}
            style={{
              padding: "10px 18px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            New Board
          </button>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10
        }}
      >
        {board.map((term, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            style={{
              border: "1px solid black",
              padding: 20,
              textAlign: "center",
              background: marked[i] ? "#4CAF50" : "white",
              color: marked[i] ? "white" : "black",
              cursor: term === "FREE" ? "default" : "pointer",
              minHeight: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {term}
          </div>
        ))}
      </div>
    </div>
  );
}