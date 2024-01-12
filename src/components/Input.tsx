"use client";

import { PropsCard } from "@/context/PropsCardContext";
import { ComponentProps, useState } from "react";

type IPropsInput = ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, ...props }: IPropsInput) => {
  const { active, setName, setActive } = PropsCard();

  return (
    <div className="grid  gap-2 mt-8">
      <label htmlFor={label} className="text-gray-700">
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder="Digite seu nome"
        maxLength={16}
        onClick={() => setActive(!active)}
        className="p-2 border-gray-300 border rounded-lg outline-purple-300"
        {...props}
        onChange={({ target }) => setName(target.value.toUpperCase())}
      />
    </div>
  );
};

export default Input;
