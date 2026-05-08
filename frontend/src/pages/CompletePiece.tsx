import Piece from "./Piece";
import { yellowIndexPosition, yellowPiecePosition } from "../utils/yellow";
import { redInBoxposition, redPiecePosition } from "../utils/Red";
import { usePiecePosition } from "../context/PiecePosition";
import { useDice, type Color } from "../context/DiceContext";
import { useColorPlaying } from "../context/colorInPlay";
import { useChangeColorLogic } from "../Hooks/ChangeColor";
import { useCheckAndCutPiece } from "../Hooks/CheckAndCutHook";

const CompletePieces = () => {
  const { currentPositions, movePiece, checkOpeningStatus, changeOpeningStatus, checkIfAllPiecesAreInside } = usePiecePosition();
  const { currentPlayingColor } = useColorPlaying();
  const { diceValue, setRollDisableLogic, resetDiceValueOfColor, diceValueByColor } = useDice();
        
  const changeColor = useChangeColorLogic()
  const checkAndCutPiece =  useCheckAndCutPiece()

  const positions = currentPositions.yellow.map(
    (posIndex) => yellowPiecePosition[posIndex]
  );

  const positionsOfRed = currentPositions.red.map(
    (posIndex) => redPiecePosition[posIndex]
  )

//   const numberOfPlayersPlaying = localStorage.getItem("numberOfPlayers") || 2

  const handlePieceClick = (pieceIndex: number, color: Color) => {

    console.log("red piece position -> ", currentPositions)

    if(currentPlayingColor != color) {
        return
    }
   
    if(diceValueByColor[color] == null) {
        setRollDisableLogic()
        return
    }
    console.log("Piece Index -> ",pieceIndex, " color -> ", color)
    if(currentPlayingColor != color) {
        setRollDisableLogic()
        return
    }

    // if(checkIfAllPiecesAreInside(color) && diceValue != 6) {
    //     // changeColorLogic()
    //     changeColor()
    //     return
    // }

    if(!checkOpeningStatus(color, pieceIndex)) {
        if(diceValue == 6) {
            changeOpeningStatus(color, pieceIndex)
            // changeOpeningStatus(color, pieceIndex)
        } else {
            if(!checkIfAllPiecesAreInside(color)) {
                alert("Please Move any other piece")
                setRollDisableLogic()
                return
            }
        }
        // return
    } else {
        movePiece(currentPlayingColor, pieceIndex, diceValue);
        checkAndCutPiece(pieceIndex, color)
    }

    if(diceValue == 6) {
        resetDiceValueOfColor(color)
        setRollDisableLogic()
        return
    }

    setRollDisableLogic()
    resetDiceValueOfColor(color)
    changeColor()
    // setRollDisableLogic()
    // if(numberOfPlayersPlaying == 2 && diceValue) {
    //     changePlayingColor(currentPlayingColor == "red" ? "yellow" : "red")
    // } else {
    //     changePlayingColor(currentPlayingColor == "red" ? "green" : currentPlayingColor == "green" ? "yellow" : currentPlayingColor == "yellow" ? "blue" : "red")
    // }
  };

  const initialPosition = yellowIndexPosition
  const initialPositionRed = redInBoxposition
//   console.log("Yellow ARRAY:", currentPositions.yellow);

  return (
    <>
      {positions.map((pos, index) => (
        <Piece
          key={index}
        //   top={pos?.top ?? initialPosition[index].top}
          top={checkOpeningStatus("yellow", index) == true ? pos?.top : initialPosition[index].top}
          left={checkOpeningStatus("yellow", index) == true ? pos?.left : initialPosition[index].left}
        //   left={pos?.left ?? initialPosition[index].left}
          onClick={() => handlePieceClick(index, "yellow")}
          color="yellowPieceImage"
        />
      ))}

      {positionsOfRed.map((pos, index) => (
            <Piece
                key={index}
                // top={pos?.top ?? initialPositionRed[index].top}
                top={checkOpeningStatus("red", index) == true ? pos?.top : initialPositionRed[index].top}
                left={checkOpeningStatus("red", index) == true ? pos?.left : initialPositionRed[index].left}
                // left={pos?.left ?? initialPositionRed[index].left}
                onClick={() => handlePieceClick(index, "red")}
                color="redPieceImage"
            />
        ))}
    </>
  );
};

export default CompletePieces;