import { useColorPlaying } from "../context/colorInPlay";
// import { useDice } from "../context/DiceContext";


export const useChangeColorLogic = () => {
    const { currentPlayingColor, changePlayingColor } = useColorPlaying();
    // const { diceValue } = useDice();
  
    const changeColor = () => {
      const numberOfPlayersPlaying = 2;
  
      if (numberOfPlayersPlaying === 2) {
        changePlayingColor(currentPlayingColor === "red" ? "yellow" : "red");
      } else {
        changePlayingColor(
          currentPlayingColor === "red"
            ? "green"
            : currentPlayingColor === "green"
            ? "yellow"
            : currentPlayingColor === "yellow"
            ? "blue"
            : "red"
        );
      }
    };
  
    return changeColor;
  };