import ludoBoardImage from "../assets/Ludo_Board_1.jpg"
import Pieces from "./Pieces"
import Dice from "./Dice"
import YellowPieces from "./YellowPiece"
import CompletePieces from "./CompletePiece"
import { useColorPlaying } from "../context/colorInPlay"

const LudoBoard = () => {
  const { currentPlayingColor } = useColorPlaying()
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
      <div
        style={{
          position: "absolute",
          left: "1140px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "30px",
          fontFamily: "sans-serif"
        }}
      >
        {currentPlayingColor}
      </div>
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

        {/* <Pieces /> */}
        {/* <YellowPieces /> */}
        <CompletePieces />
      </div>
    </div>
  )
}

export default LudoBoard