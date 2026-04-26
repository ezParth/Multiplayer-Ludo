import { createContext, useContext, useState } from "react"
import { usePiecePosition } from "./PiecePosition"

type Color = "red" | "blue" | "green" | "yellow"
interface DiceContextType {
  diceValue: number
  rollDice: (color: Color) => void
}


const DiceContext = createContext<DiceContextType | null>(null)

export const DiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [diceValue, setDiceValue] = useState(1)
  // const { movePiece } = usePiecePosition()

  const rollDice = (color: Color) => {
    const random = Math.floor(Math.random() * 6) + 1
    // if (color !== "red" && color !== "blue" && color !== "green" && color !== "yellow") {
    //   throw new Error("please provide valid colour");
    // }

    // movePiece(color, random)

    setDiceValue(random)
  }

  return (
    <DiceContext.Provider value={{ diceValue, rollDice }}>
      {children}
    </DiceContext.Provider>
  )
}

export const useDice = () => {
  const context = useContext(DiceContext)
  if (!context) throw new Error("useDice must be used inside DiceProvider")
  return context
}