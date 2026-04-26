import redPieceImage from "../assets/red.png"

type PieceProps = {
  top: number
  left: number
  onClick?:() => void
}

const Piece = ({ top, left, onClick }: PieceProps) => {
  return (
    <img
      src={redPieceImage}
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