import Input from "./Input";
import SelectColor from "./PropsCard/SelectColor";
import SelectModel from "./PropsCard/SelectModel";

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
