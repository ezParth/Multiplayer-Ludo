// import React ,{ createContext, useState } from "react"
// import type { Color } from "./DiceContext"

// interface ColorOnEachBoxType {
//     red: number[]
//     blue: number[]
//     yellow: number[]
//     green: number[]
// }

// interface BoardContextType {
//     ColorOnEachBox: ColorOnEachBoxType[]
//     setColorOnEachBoxFunction: (index: number, color: Color) => void
// }

// const BoardContext = createContext<BoardContextType | null>(null)

// export const BoardContextProvider = ({children} : {children: React.ReactNode}) => {

//     const [ColorOnEachBox, setColorOnEachBox] = useState<ColorOnEachBoxType[]>(
//         Array.from({length: 52}, () => ({
//             red: 0, 0, 0, 0,
//             blue: 0,
//             yellow: 0,
//             green: 0
//         }))
//     )

//     const setColorOnEachBoxFunction = (index: number, color: Color) => {
//         if(index > 51 || index < 0) {
//             throw new Error("Index must be between 0 and 51")
//         }

        

//         setColorOnEachBox(prev => {
//             const newBoard = [...prev]
//             const current = newBoard[index]
          
//             const updatedBox = {
//               red: Math.max(0, current.red - (color !== "red" ? 1 : 0)),
//               blue: Math.max(0, current.blue - (color !== "blue" ? 1 : 0)),
//               yellow: Math.max(0, current.yellow - (color !== "yellow" ? 1 : 0)),
//               green: Math.max(0, current.green - (color !== "green" ? 1 : 0)),
//             }
          
//             // add one to selected color
//             updatedBox[color] += 1
          
//             newBoard[index] = updatedBox
          
//             return newBoard
//           })

//     }


//     <BoardContext.Provider value={{ColorOnEachBox, setColorOnEachBoxFunction}}>
//         {children}
//     </BoardContext.Provider>
// }
