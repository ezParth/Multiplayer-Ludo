import React, { createContext, useContext, useState } from "react";

export interface InitialPositionType {
  red: number[];
  blue: number[];
  green: number[];
  yellow: number[];
}

export interface InitialOpenedType {
  red: boolean[];
  blue: boolean[];
  green: boolean[];
  yellow: boolean[];
}

type Color = "red" | "blue" | "green" | "yellow";

interface PiecePositionContextType {
  currentPositions: InitialPositionType;
  movePiece: (color: Color, pieceIndex: number, steps: number) => void;
  resetPositions: () => void;
  checkOpeningStatus: (color: Color, pieceIndex: number) => boolean;
  changeOpeningStatus: (color: Color, pieceIndex: number) => void;
  checkIfAllPiecesAreInside: (color: Color) => boolean;
  MovePieceToZero: (color: Color, pieceIndex: number) => void;
}

const PiecePositionContext = createContext<PiecePositionContextType | null>(
  null
);

export const PiecePositionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: InitialPositionType = {
    red: [3, 0, 0, 0],
    blue: [0, 0, 0, 0],
    green: [0, 0, 0, 0],
    yellow: [25, 0, 0, 0],
  };

  const initialOpeningState: InitialOpenedType = {
    red: [true, true, false, false],
    blue: [false, false, false, false],
    green: [false, false, false, false],
    yellow: [true, true, false, false],
  };

  const [currentPositions, setCurrentPositions] =
    useState<InitialPositionType>(initialState);
  const [pieceOpened, setPieceOpened] =
    useState<InitialOpenedType>(initialOpeningState);

    const movePiece = (color: Color, pieceIndex: number, steps: number) => {
      setCurrentPositions((prev) => {
        const updatedColorPositions = [...prev[color]];
    
        if (pieceIndex < 0 || pieceIndex >= updatedColorPositions.length) {
          console.error("Invalid pieceIndex:", pieceIndex);
          return prev;
        }
    
        // move piece
        updatedColorPositions[pieceIndex] += steps;
    
        const newIndex = updatedColorPositions[pieceIndex];
    
        const newState = {
          ...prev,
          [color]: updatedColorPositions,
        };
    
        const colors: Color[] = ["red", "blue", "green", "yellow"];
    
        // cut logic
        for (const opponentColor of colors) {
          if (opponentColor === color) continue;
    
          const opponentPositions = [...newState[opponentColor]];
    
          for (let i = 0; i < opponentPositions.length; i++) {
            if (opponentPositions[i] === newIndex) {
              opponentPositions[i] = 0;
    
              newState[opponentColor] = opponentPositions;
            }
          }
        }
    
        return newState;
      });
    };

  const MovePieceToZero = (color: Color, pieceIndex: number) => {
    setCurrentPositions((prev) => {
      const updated = [...prev[color]];

      if (pieceIndex < 0 || pieceIndex >= updated.length) {
        console.error("Invalid pieceIndex:", pieceIndex);
        return prev;
      }

      updated[pieceIndex] = 0;

      return {
        ...prev,
        [color]: updated,
      };
    });
  };

  const changeOpeningStatus = (color: Color, pieceIndex: number) => {
    setPieceOpened((prev) => {
      const updated = [...prev[color]];

      if (pieceIndex < 0 || pieceIndex >= updated.length) {
        console.error("Invalid pieceIndex:", pieceIndex);
        return prev;
      }

      updated[pieceIndex] = !updated[pieceIndex];

      console.log("Updated -> ", updated, "Piece -> ", updated[pieceIndex]);

      return {
        ...prev,
        [color]: updated,
      };
    });
  };

  const checkOpeningStatus = (color: Color, pieceIndex: number) => {
    return pieceOpened[color][pieceIndex];
  };

  const checkIfAllPiecesAreInside = (color: Color) => {
    return pieceOpened[color].every((el) => el === false);
  };

  const resetPositions = () => {
    setCurrentPositions({
      red: [0, 0, 0, 0],
      blue: [0, 0, 0, 0],
      green: [0, 0, 0, 0],
      yellow: [0, 0, 0, 0],
    });
  };

  return (
    <PiecePositionContext.Provider
      value={{
        currentPositions,
        movePiece,
        resetPositions,
        checkOpeningStatus,
        changeOpeningStatus,
        checkIfAllPiecesAreInside,
        MovePieceToZero,
      }}
    >
      {children}
    </PiecePositionContext.Provider>
  );
};

export const usePiecePosition = () => {
  const context = useContext(PiecePositionContext);
  if (!context) {
    throw new Error(
      "usePiecePosition must be used inside PiecePositionProvider"
    );
  }
  return context;
};
