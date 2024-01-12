"use client";

import Image from "next/image";
import masterCard from "../../public/1280px-Mastercard_2019_logo.svg.png";
import logoNubank from "../../public/Nubank_logo_2021.svg-branco.png";
import chip from "../../public/icons8-chip-do-cartão-sim-16.png";
import { PropsCard } from "@/context/PropsCardContext";

const CardNubank = () => {
  const { name, active, colors, position } = PropsCard();

  return (
    <section className="grid place-items-center  w-full max-sm:h-60">
      <div
        className={`w-80 h-40 rounded-xl ${colors} shadow-black shadow-2xl p-2 grid mb-56  ${
          active ? "animate-float" : ""
        }
          ${
            position
              ? "animate-vertical"
              : !active && !position
              ? position === undefined
                ? ""
                : "animate-horizontal"
              : ""
          } 
        max-sm:fixed max-sm:-mb-0 `}
      >
        <div className="text-white  grid place-items-end ">
          <Image src={masterCard} alt="card" width={50} height={0} priority />
          <p className="text-[10px]">mastercard</p>
        </div>
        <div className="ml-5">
          <Image
            src={chip}
            alt="img"
            width={0}
            height={0}
            priority
            className="transform scale-150 ml-3"
          />
        </div>
        <div className="flex gap-3 items-center ml-5">
          <Image src={logoNubank} alt="card" width={50} height={0} priority />
          <p className="text-[12px] text-white font-semibold">{name}</p>
        </div>
      </div>
    </section>
  );
};

export default CardNubank;
