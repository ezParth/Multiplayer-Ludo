import { useDice } from "../context/DiceContext"

const diceFaces = [
  "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"
]

const Dice = () => {
    const { diceValue, rollDice } = useDice()

  return (
    <div
      onClick={() => rollDice("red")}
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: "white",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        userSelect: "none",
        transition: "transform 0.1s ease",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {diceFaces[diceValue - 1]}
    </div>
  )
}

export default Dice