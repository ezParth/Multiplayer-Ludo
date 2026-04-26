import { Route, Routes } from "react-router-dom"
import LudoBoard from "./pages/LudoBoard"
import LudoBoard2 from "./pages/LudoBoard2"

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/" element={<LudoBoard />} />
      <Route path="/ludo" element={<LudoBoard2 />} />
    </Routes>
  )
}

export default App
