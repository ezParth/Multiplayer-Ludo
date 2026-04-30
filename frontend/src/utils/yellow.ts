import { redPiecePosition, type Iposition } from "./Red";

const BOARD_HEIGHT = 663;
const BOARD_WIDTH = 664;

export const yellowPiecePosition: Iposition[] = redPiecePosition.map(pos => ({
  top: BOARD_HEIGHT - pos.top,
  left: BOARD_WIDTH - pos.left
}));

export const yellowIndexPosition: Iposition[] = [
  {
    top: 73,
    left: 592
  },
  {
    top: 73,
    left: 500
  },
  {
    top: 165,
    left: 500
  },
  {
    top: 165,
    left: 592
  },
]