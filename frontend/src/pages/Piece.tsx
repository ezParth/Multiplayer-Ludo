import redPieceImage from "../assets/red.png"
import yellowPieceImage from "../assets/yellow_piece.png"

type PieceProps = {
  top: number
  left: number
  onClick?:() => void,
  color: string
}

const Piece = ({ top, left, onClick, color }: PieceProps) => {
  let image = redPieceImage
  if(color == "redPieceImage"){
    image = redPieceImage
  } else if(color == "yellowPieceImage") {
    image = yellowPieceImage
  }
  return (
    <img
      src={image}
      alt="piece"
      onClick={onClick}
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: "46px",
        height: "46px",
        cursor: "pointer",     
        pointerEvents: "auto"
      }}
    />
  )
}

export default Piece