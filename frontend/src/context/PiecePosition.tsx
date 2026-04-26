import React, { createContext, useContext, useState } from "react"

export interface InitialPositionType {
  red: number[]
  blue: number[]
  green: number[]
  yellow: number[]
}

type Color = "red" | "blue" | "green" | "yellow"

interface PiecePositionContextType {
  currentPositions: InitialPositionType
  movePiece: (color: Color, pieceIndex: number, steps: number) => void
  resetPositions: () => void
}

const PiecePositionContext = createContext<PiecePositionContextType | null>(null)

export const PiecePositionProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: InitialPositionType = {
    red: [0, 0, 0, 0],
    blue: [0, 0, 0, 0],
    green: [0, 0, 0, 0],
    yellow: [0, 0, 0, 0],
  }

  const [currentPositions, setCurrentPositions] = useState<InitialPositionType>(initialState)

//   const movePiece = (color: Color, pieceIndex: number, steps: number) => {
//     setCurrentPositions(prev => {
//       const updatedPieces = [...prev[color]] // copy array

//       updatedPieces[pieceIndex] += steps // move specific piece

//       return {
//         ...prev,
//         [color]: updatedPieces
//       }
//     })
//   }

const movePiece = (color: Color, pieceIndex: number, steps: number) => {
    setCurrentPositions(prev => {
      const updated = [...prev[color]]
  
      if (pieceIndex < 0 || pieceIndex >= updated.length) {
        console.error("Invalid pieceIndex:", pieceIndex)
        return prev
      }
  
      updated[pieceIndex] += steps
  
      return {
        ...prev,
        [color]: updated
      }
    })
  }

  const resetPositions = () => {
    setCurrentPositions({
      red: [0, 0, 0, 0],
      blue: [0, 0, 0, 0],
      green: [0, 0, 0, 0],
      yellow: [0, 0, 0, 0],
    })
  }

  return (
    <PiecePositionContext.Provider value={{ currentPositions, movePiece, resetPositions }}>
      {children}
    </PiecePositionContext.Provider>
  )
}

export const usePiecePosition = () => {
  const context = useContext(PiecePositionContext)
  if (!context) {
    throw new Error("usePiecePosition must be used inside PiecePositionProvider")
  }
  return context
}