import Piece from "./Piece";
import { yellowPiecePosition } from "../utils/yellow";
import { usePiecePosition } from "../context/PiecePosition";
import { useDice } from "../context/DiceContext";
import { useColorPlaying } from "../context/colorInPlay";

const YellowPieces = () => {
  const { currentPositions, movePiece } = usePiecePosition();
  const { currentPlayingColor, changePlayingColor } = useColorPlaying();
  const { diceValue } = useDice();

  // ✅ derive all positions at once
  const positions = currentPositions.yellow.map(
    (posIndex) => yellowPiecePosition[posIndex]
  );

  const numberOfPlayersPlaying = localStorage.getItem("numberOfPlayers") || 2

  const handlePieceClick = (pieceIndex: number) => {
    console.log("Piece Index -> ",pieceIndex)
    movePiece(currentPlayingColor, pieceIndex, diceValue);
    if(numberOfPlayersPlaying == 2) {
        changePlayingColor(currentPlayingColor == "red" ? "yellow" : "red")
    } else {
        changePlayingColor(currentPlayingColor == "red" ? "green" : currentPlayingColor == "green" ? "yellow" : currentPlayingColor == "yellow" ? "blue" : "red")
    }
  };

  const initialPosition = yellowPiecePosition[0]
  console.log("Yellow ARRAY:", currentPositions.yellow);

  return (
    <>
      {positions.map((pos, index) => (
        <Piece
          key={index}
          top={pos?.top ?? initialPosition.top}
          left={pos?.left ?? initialPosition.left}
          onClick={() => handlePieceClick(index)}
          color="yellowPieceImage"
        />
      ))}
    </>
  );
};

export default YellowPieces;