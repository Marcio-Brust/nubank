import React from "react";
import PropsCard from "./PropsCard";
import CardNubank from "./CardNubank";

const Main = () => {

  
  return (
    <main className="flex max-sm:flex-col-reverse max-sm:justify-end  gap-16 w-full">
      <PropsCard />
      <CardNubank />
    </main>
  );
};

export default Main;
