import Piece from "./Piece";
import { redPiecePosition, redInBoxposition } from "../utils/Red";
import { usePiecePosition } from "../context/PiecePosition";
import { useDice } from "../context/DiceContext";
import { useColorPlaying } from "../context/colorInPlay";
import { yellowIndexPosition } from "../utils/yellow";

const Pieces = () => {
  const { currentPositions, movePiece } = usePiecePosition();
  const { currentPlayingColor } = useColorPlaying();
  const { diceValue } = useDice();

  // ✅ derive all positions at once
  const positions = currentPositions.red.map(
    (posIndex) => redPiecePosition[posIndex]
  );

  const handlePieceClick = (pieceIndex: number) => {
    console.log("Piece Index -> ",pieceIndex)
    movePiece(currentPlayingColor, pieceIndex, diceValue);
  };

  // const initialPosition = redPiecePosition[0]
  const initialPosition = yellowIndexPosition
  console.log("RED ARRAY:", currentPositions.red);

  return (
    <>
      {positions.map((pos, index) => (
        <Piece
          key={index}
          // top={pos?.top ?? initialPosition.top}
          top={initialPosition[index].top}
          left={initialPosition[index].left}
          // left={pos?.left ?? initialPosition.left}
          onClick={() => handlePieceClick(index)}
          color="redPieceImage"
          />
      ))}
    </>
  );
};

export default Pieces;


// import Piece from "./Piece";
// import {redPiecePosition, type Iposition} from "../utils/Red"
// import { usePiecePosition } from "../context/PiecePosition";
// // import { useState } from "react";
// import { useDice } from "../context/DiceContext";
// import { useEffect, useState } from "react";
// import { useColorPlaying } from "../context/colorInPlay";

// const Pieces = () => {
//   const { currentPositions, movePiece } = usePiecePosition()
//   const { currentPlayingColor } = useColorPlaying()
//   const { diceValue } = useDice()
//   const [picecPosition1, setPiecePosition1] = useState<Iposition | null>(null)
//   const [picecPosition2, setPiecePosition2] = useState<Iposition | null>(null)
//   const [picecPosition3, setPiecePosition3] = useState<Iposition | null>(null)
//   const [picecPosition4, setPiecePosition4] = useState<Iposition | null>(null)
//   const positionNumber = 50
//   useEffect(() => {
//     setPiecePosition1(redPiecePosition[currentPositions.red[0]])
//     setPiecePosition2(redPiecePosition[currentPositions.red[1]])
//     setPiecePosition3(redPiecePosition[currentPositions.red[2]])
//     setPiecePosition4(redPiecePosition[currentPositions.red[3]])
//   }, [currentPositions.red])
//   const position = redPiecePosition[positionNumber]

//   // console.log("POSITION->",picecPosition1, " diceValue -> ", diceValue, " current postion of red -> ", currentPositions.red)
//   const handlePieceClick = (pieceIndex: number) => {
//     try {
//       movePiece(currentPlayingColor, pieceIndex, diceValue)
//     } catch (error) {
//       console.log("Error in handling peice click -> ", error)
//     }
//   }

//   return (
//     <>
//       {/* <Piece top={616} left={284} /> */}
//       {/* <Piece top={569} left={284} /> */}
//       <Piece top={position.top} left={position.left} onClick={() => handlePieceClick(1)} />
//       <Piece top={picecPosition1?.top == undefined ? 0 : picecPosition1.top} left={picecPosition1?.left == undefined ? 0 : picecPosition.left} onClick={() => handlePieceClick(1)} />
//       <Piece top={picecPosition2?.top == undefined ? 0 : picecPosition2.top} left={picecPosition2?.left == undefined ? 0 : picecPosition.left} onClick={() => handlePieceClick(2)} />
//       <Piece top={picecPosition3?.top == undefined ? 0 : picecPosition3.top} left={picecPosition3?.left == undefined ? 0 : picecPosition.left} onClick={() => handlePieceClick(3)} />
//       <Piece top={picecPosition4?.top == undefined ? 0 : picecPosition4.top} left={picecPosition4?.left == undefined ? 0 : picecPosition.left} onClick={() => handlePieceClick(4)} />
//       {/* <Piece top={newPosition.top} left={newPosition.left} /> */}
//       {/* <Piece top={569} left={284} /> */}
//     </>
//   );
// };

// export default Pieces;