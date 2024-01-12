import Image from "next/image";
import React from "react";
import logo from "../../public/Nubank_logo_2021.svg.png";

const Header = () => {
  return (
    <header className="min-w-full h-15 border-none p-4   bg-purple-100">
      <Image src={logo} alt="img" width={100} height={0} priority />
      <h1 className="font-semibold text-nubankPurple mt-5">
        Deixe seu roxinho com sua cara :)
      </h1>
    </header>
  );
};

export default Header;
