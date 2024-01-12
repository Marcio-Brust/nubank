"use client";

import { PropsCard } from "@/context/PropsCardContext";
import React from "react";

const SelectModel = () => {
  const { setPosition, setActive, disabled } = PropsCard();

  return (
    <section className="mt-8 grid gap-2">
      <h2 className="text-gray-700">Selecione o modelo do cartão</h2>
      <div className="flex justify-start items-center gap-2">
        <button
          className="p-2 grid place-items-center bg-purple-300 hover:bg-purple-400 active:outline-2 active:outline active:outline-purple-400  w-24 rounded-lg"
          onClick={() => {
            setPosition(false);
            setActive(false);
          }}
          disabled={disabled}
        >
          Horizontal
        </button>
        <button
          className="p-2 grid place-items-center bg-purple-300 hover:bg-purple-400 active:outline-2 active:outline active:outline-purple-400  w-24 rounded-lgw-24  rounded-lg"
          onClick={() => {
            setPosition(true);
            setActive(false);
          }}
          disabled={disabled}
        >
          Vertical
        </button>
      </div>
    </section>
  );
};

export default SelectModel;
