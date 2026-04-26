import React, { createContext, useContext, useState } from "react";

type Color = "red" | "green" | "blue" | "yellow"

interface ColorContextInterface {
  currentPlayingColor: Color;
  changePlayingColor: (color: Color) => void;
}

const ColorInPlayContext = createContext<ColorContextInterface | null>(null);

export const ColorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPlayingColor, setCurrentPlayingColor] = useState<Color>("red");

  const changePlayingColor = (color: Color) => {
    setCurrentPlayingColor(color);
  };

  return (
    <ColorInPlayContext.Provider value={{ currentPlayingColor, changePlayingColor }}>
      {children}
    </ColorInPlayContext.Provider>
  );
};

export const useColorPlaying = () => {
  const context = useContext(ColorInPlayContext);
  if (!context) throw new Error("useColorPlaying must be used inside ColorContextProvider");
  return context;
};