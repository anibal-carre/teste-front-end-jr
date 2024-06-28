import monitor from "../assets/icons/monitorar.png";
import supermercado from "../assets/icons/supermercados 1.png";
import whiskey from "../assets/icons/whiskey.png";
import ferramentas from "../assets/icons/ferramentas 1.png";
import saude from "../assets/icons/cuidados-de-saude 1.png";
import esporte from "../assets/icons/corrida 1.png";
import moda from "../assets/icons/moda 1.png";

export const typeData: {
  id: number;
  span: string;
  image: string;
  class: string;
}[] = [
  {
    id: 1,
    span: "Tecnologia",
    image: monitor,
    class: "card-type-white",
  },
  {
    id: 2,
    span: "Supermercado",
    image: supermercado,
    class: "card-type",
  },
  {
    id: 3,
    span: "Bebidas",
    image: whiskey,
    class: "card-type",
  },
  {
    id: 4,
    span: "Ferramentas",
    image: ferramentas,
    class: "card-type",
  },
  {
    id: 5,
    span: "Saúde",
    image: saude,
    class: "card-type",
  },
  {
    id: 6,
    span: "Esportes e Fitness",
    image: esporte,
    class: "card-type",
  },
  {
    id: 7,
    span: "Moda",
    image: moda,
    class: "card-type",
  },
];
