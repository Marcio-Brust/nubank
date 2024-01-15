"use client";

import Image from "next/image";
import masterCard from "../../public/1280px-Mastercard_2019_logo.svg.png";
import logoNubank from "../../public/Nubank_logo_2021.svg-branco.png";
import chip from "../../public/icons8-chip-do-cartão-sim-16.png";
import { PropsCard } from "@/context/PropsCardContext";

const CardNubank = () => {
  const { name, active, colors, position } = PropsCard();

  return (
    <section className="flex justify-center items-center  w-full max-sm:h-60">
      {position ? (
        <div
          className={` w-10 h-10    ${
            active ? "animate-float" : ""
          }  max-sm:fixed grid place-content-center `}
        >
          <div
            className={`w-40 h-80 rounded-xl ${colors} shadow-black shadow-2xl p-2 grid 
          
          ${position ? "animate-vertical" : ""}
         `}
          >
            <div className="text-white  grid justify-start ">
              <div className="flex-1 justify-center">
                <div className="flex p-2">
                  <Image
                    src={masterCard}
                    alt="card"
                    width={50}
                    height={0}
                    priority
                  />

                  <Image
                    src={chip}
                    alt="img"
                    width={0}
                    height={0}
                    priority
                    className="transform scale-100 ml-3"
                  />
                </div>
              </div>
            </div>

            <div className="grid items-end p-2">
              <p className="text-[12px] text-white font-semibold">{name}</p>
              <Image
                src={logoNubank}
                alt="card"
                width={50}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` w-80 h-40   ${
            position === undefined ? "" : !position ? "animate-horizontal" : ""
          }  max-sm:fixed`}
        >
          <div
            className={`w-80 h-40 rounded-xl ${colors} shadow-black shadow-2xl p-2 grid  ${
              active ? "animate-float" : ""
            }
            
        `}
          >
            <div className="text-white  grid justify-end ">
              <Image
                src={masterCard}
                alt="card"
                width={50}
                height={0}
                priority
              />
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
              <Image
                src={logoNubank}
                alt="card"
                width={50}
                height={0}
                priority
              />
              <p className="text-[12px] text-white font-semibold break-all">
                {name}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardNubank;
