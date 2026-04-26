import { useState } from "react"

const BOARD_SIZE = 15

// simple path (just for demo, real ludo path is more complex)
const path = [
  [6, 1],[6, 2],[6, 3],[6, 4],[6, 5],
  [5, 6],[4, 6],[3, 6],[2, 6],[1, 6],
  [1, 7],[2, 7],[3, 7],[4, 7],[5, 7],
  [6, 7],[7, 7],
]

const LudoBoard2 = () => {
  const [pieceIndex, setPieceIndex] = useState(0)

  const movePiece = () => {
    setPieceIndex((prev) => (prev + 1) % path.length)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`,
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {[...Array(BOARD_SIZE * BOARD_SIZE)].map((_, i) => {
        const row = Math.floor(i / BOARD_SIZE)
        const col = i % BOARD_SIZE

        const isPieceHere =
          path[pieceIndex][0] === row &&
          path[pieceIndex][1] === col

        return (
          <div
            key={i}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #555",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                row === 7 && col === 7 ? "gold" : "white",
            }}
            onClick={movePiece}
          >
            {isPieceHere && "🔴"}
          </div>
        )
      })}
    </div>
  )
}

export default LudoBoard2