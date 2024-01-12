import Input from "./Input";
import SelectColor from "./SelectColor";
import SelectModel from "./SelectModel";

const PropsCard = () => {
  return (
    <section>
      <Input label="Nome Completo" name="" />
      <SelectColor />
      <SelectModel />
    </section>
  );
};

export default PropsCard;
