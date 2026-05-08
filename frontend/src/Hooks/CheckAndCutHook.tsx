// import { useColorPlaying } from "../context/colorInPlay";
import { useDice, type Color } from "../context/DiceContext";
import { usePiecePosition } from "../context/PiecePosition";


export const useCheckAndCutPiece = () => {
    const { currentPositions, MovePieceToZero } = usePiecePosition();
    const { diceValue } = useDice();
  
    const checkAndCutPiece = (index: number, color: Color) => {
      if (index < 0 || index > 3) {
        throw new Error("Please provide correct index for the piece");
      }
  
      const currentColorPositions = currentPositions[color];
      const newIndex = currentColorPositions[index] + diceValue;
  
      const colors: Color[] = ["red", "blue", "green", "yellow"];
  
      for (const opponentColor of colors) {
        if (opponentColor === color) continue;
  
        const opponentPositions = currentPositions[opponentColor];
  
        for (let i = 0; i < 4; i++) {
          if (opponentPositions[i] === newIndex) {
            MovePieceToZero(opponentColor, i);
            return; // stop after first cut
          }
        }
      }
    };
  
    return checkAndCutPiece;
  };