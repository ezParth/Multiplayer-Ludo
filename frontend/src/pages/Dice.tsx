import { useColorPlaying } from "../context/colorInPlay"
import { useDice } from "../context/DiceContext"

const diceFaces = [
  "⚀", "⚁", "⚂", "⚃", "⚄", "⚅", "❌"
]

const Dice = () => {
    const { diceValue, rollDice, rollDisable } = useDice()
    const { currentPlayingColor } = useColorPlaying()

  return (
    <div
      onClick={ () => !rollDisable && rollDice(currentPlayingColor)}
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: "white",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        // cursor: "pointer",
        cursor: rollDisable ? "not-allowed" : "pointer",
        opacity: rollDisable ? 0.5 : 1,
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