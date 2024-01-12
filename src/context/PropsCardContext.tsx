"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IContextPropsCard = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  colors: string;
  setColors: Dispatch<SetStateAction<string>>;
  position: boolean | undefined;
  setPosition: Dispatch<SetStateAction<boolean | undefined>>;
  disabled: boolean;
};

const PropsCardContext = createContext<IContextPropsCard | null>(null);

export const PropsCard = () => {
  const context = useContext(PropsCardContext);
  if (context === null)
    throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const PropsCardContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = useState("");

  const [colors, setColors] = useState("bg-nubankPurple");

  const [active, setActive] = useState(false);

  const [position, setPosition] = useState<boolean | undefined>(undefined);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  }, [position]);
  /* console.log(disabled); */
  return (
    <PropsCardContext.Provider
      value={{
        name,
        setName,
        active,
        setActive,
        colors,
        setColors,
        position,
        setPosition,
        disabled,
      }}
    >
      {children}
    </PropsCardContext.Provider>
  );
};
