import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { DiceProvider } from "./context/DiceContext"
import { PiecePositionProvider } from "./context/PiecePosition"
import { ColorContextProvider } from "./context/colorInPlay"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ColorContextProvider>
    <PiecePositionProvider>
      <DiceProvider>
        <App />
      </DiceProvider>
    </PiecePositionProvider>
    </ColorContextProvider>
  </BrowserRouter>
)