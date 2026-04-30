import { createContext, useContext, useState } from "react"
import { usePiecePosition } from "./PiecePosition"
import { useChangeColorLogic } from "../Hooks/ChangeColor"
// import { usePiecePosition } from "./PiecePosition"

export type Color = "red" | "blue" | "green" | "yellow"
interface DiceContextType {
  diceValue: number
  rollDice: (color: Color) => void
  rollDisable: boolean
  setRollDisableLogic: () => void
  setDiceValueToNull: () => void
  resetDiceValueOfColor: (color: Color) => void
  diceValueByColor: DiceValueByColorType
}

export interface DiceValueByColorType {
  red: number | null,
  blue: number | null,
  green: number | null,
  yellow: number | null
}

const initialDiceValueByColorState = {
  red: null,
  blue: null,
  green: null,
  yellow: null
}

const DiceContext = createContext<DiceContextType | null>(null)

export const DiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [diceValue, setDiceValue] = useState(1)
  const [rollDisable, setRollDisable] = useState<boolean>(false)
  const [diceValueByColor, setDiceValueByColor] = useState<DiceValueByColorType>(initialDiceValueByColorState)
  const {checkIfAllPiecesAreInside} = usePiecePosition()
  const changeColor = useChangeColorLogic()
  // const { movePiece } = usePiecePosition()

  const rollDice = (color: Color) => {
    const random = Math.floor(Math.random() * 6) + 1
    // if (color !== "red" && color !== "blue" && color !== "green" && color !== "yellow") {
    //   throw new Error("please provide valid colour");
    // }

    // movePiece(color, random)
    console.log("Color -> ", color)
    
    setDiceValue(random)
    setDiceValueByColor((colors) => ({
      ...colors,
      [color]: random
    }))
    if(random != 6 && checkIfAllPiecesAreInside(color)) {
      changeColor()
      // setRollDisable(true)
      setDiceValueByColor((colors) => ({
        ...colors,
        [color]: null
      }))
    } else {
      setRollDisable(true)
    }
  }

  const setRollDisableLogic = () => {
    setRollDisable(!rollDice)
  }

  const setDiceValueToNull = () => {
    setDiceValue(7)
  }

  const resetDiceValueOfColor = (color: Color) => {
    setDiceValueByColor((colors) => ({
      ...colors,
      [color]: null
    }))
  }

  return (
    <DiceContext.Provider value={{ diceValue, rollDice, rollDisable, setRollDisableLogic, setDiceValueToNull, resetDiceValueOfColor, diceValueByColor }}>
      {children}
    </DiceContext.Provider>
  )
}

export const useDice = () => {
  const context = useContext(DiceContext)
  if (!context) throw new Error("useDice must be used inside DiceProvider")
  return context
}