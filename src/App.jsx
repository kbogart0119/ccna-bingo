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
  shuffled.splice(12, 0, "FREE");
  return shuffled;
}

function createMarkedBoard() {
  const marks = Array(25).fill(false);
  marks[12] = true; // center FREE square starts marked
  return marks;
}

export default function App() {
  const [board, setBoard] = useState(createBoard);
  const [marked, setMarked] = useState(createMarkedBoard);

  function toggle(index) {
    if (board[index] === "FREE") return;
    const newMarked = [...marked];
    newMarked[index] = !newMarked[index];
    setMarked(newMarked);
  }

  function newBoard() {
    setBoard(createBoard());
    setMarked(createMarkedBoard());
  }

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>CCNA Bingo</h1>

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