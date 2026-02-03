import { Hemograma } from "../images/additional-tests";
import { Papiloma } from "../images/benign-neoplasms";
import { GengivoEstomatiteHerpetica } from "../images/childhood-oral-lesions";
import { Carcinoma } from "../images/malignant-neoplasms";
import { LinguaGeografica } from "../images/most-common-oral-lesions";
import { Fibroma } from "../images/non-neoplastic-proliferative-processes";
import { PigmentacaoRacial } from "../images/pigmented-lesions";
import { Sjogren } from "../images/syndromes";
import { EstomatiteAftosa } from "../images/vesiculobullous-and-ulcerative-lesions";
import { Liquen } from "../images/white-lesions";

export const categoriesData = [
  {
    id: "1",
    name: "Lesões mais comuns",
    image: LinguaGeografica,
  },
  {
    id: "2",
    name: "Doenças bucais na infância",
    image: GengivoEstomatiteHerpetica,
  },
  {
    id: "3",
    name: "Processos proliferativos não neoplásicos",
    image: Fibroma,
  },
  {
    id: "4",
    name: "Lesões brancas",
    image: Liquen,
  },
  {
    id: "5",
    name: "Lesões pigmentadas",
    image: PigmentacaoRacial,
  },
  {
    id: "6",
    name: "Lesões ulcerativas e erosivas",
    image: EstomatiteAftosa,
  },
  {
    id: "7",
    name: "Neoplasias benignas",
    image: Papiloma,
  },
  {
    id: "8",
    name: "Neoplasias malignas",
    image: Carcinoma,
  },
  {
    id: "9",
    name: "Síndromes",
    image: Sjogren,
  },
  {
    id: "10",
    name: "Exames complementares",
    image: Hemograma,
  },
];
