import ludoBoardImage from "../assets/Ludo_Board_1.jpg"
import Pieces from "./Pieces"
import Dice from "./Dice"

const LudoBoard = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {/* Dice on LEFT */}
      <div
        style={{
          position: "absolute",
          left: "240px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Dice />
      </div>

      {/* Board Wrapper */}
      <div
        style={{
          position: "relative",
          width: "90vmin",
          height: "90vmin",
        }}
      >
        <img
          src={ludoBoardImage}
          alt="Ludo Board"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        <Pieces />
      </div>
    </div>
  )
}

export default LudoBoard