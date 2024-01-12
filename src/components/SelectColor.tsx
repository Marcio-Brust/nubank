"use client";

import { PropsCard } from "@/context/PropsCardContext";
import React from "react";

const SelectColor = () => {
  const { setColors } = PropsCard();

  const colorsArray = [
    "bg-nubankPurple",
    "bg-nubankViolet",
    "bg-nubankBlack",
    "bg-nubankDarkBlue",
    "bg-nubankGunpowderBlue",
    "bg-nubankGold",
  ];

  return (
    <section className="mt-8 grid gap-2">
      <h2 className="text-gray-700 ">Selecione a cor do cartão</h2>
      <div className="flex items-center gap-2">
        {colorsArray.map((color) => (
          <button
            onClick={() => setColors(color)}
            key={color}
            className={`w-6 h-6 ${color} rounded-lg hover:shadow-sm hover:shadow-black `}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default SelectColor;
