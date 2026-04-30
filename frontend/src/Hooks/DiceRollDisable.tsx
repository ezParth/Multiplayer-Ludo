import { useColorPlaying } from "../context/colorInPlay"
import { usePiecePosition } from "../context/PiecePosition"

const DiceRollDisable = () => {
    const { currentPlayingColor } = useColorPlaying() 
    const { checkIfAllPiecesAreInside } = usePiecePosition()

    const DiceRollDisableLogic = () => {
        if(!checkIfAllPiecesAreInside(currentPlayingColor)) return true
    }

    return DiceRollDisableLogic
}

export default DiceRollDisable