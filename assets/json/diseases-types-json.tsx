import { Condiloma } from "../images/benign-neoplasms";
import { Candidiase } from "../images/childhood-oral-lesions";
import { Adenoma } from "../images/malignant-neoplasms";
import { Anquiloglossia } from "../images/most-common-oral-lesions";
import { Epulide } from "../images/non-neoplastic-proliferative-processes";
import { CandidiaseEritematosa } from "../images/pigmented-lesions";
import { Behcet } from "../images/syndromes";
import { EpidermoliseBolhosa } from "../images/vesiculobullous-and-ulcerative-lesions";
import { CandidiasePseudomembranosa } from "../images/white-lesions";

export const diseasesTypes = [
  {
    id: 1,
    name: "Lesões Mais Comuns",
    img: Anquiloglossia,
  },
  {
    id: 2,
    name: "Doenças Bucais na Infância",
    img: Candidiase,
  },
  {
    id: 3,
    name: "Processos Proliferativos Não Neoplásicos",
    img: Epulide,
  },
  {
    id: 4,
    name: "Lesões Brancas",
    img: CandidiasePseudomembranosa,
  },
  {
    id: 5,
    name: "Lesões Pigmentadas",
    img: CandidiaseEritematosa,
  },
  {
    id: 6,
    name: "Neoplasias Malignas",
    img: Adenoma,
  },
  {
    id: 7,
    name: "Neoplasias Benignas",
    img: Condiloma,
  },
  {
    id: 8,
    name: "Síndromes",
    img: Behcet,
  },
  {
    id: 9,
    name: "Lesões Vesiculo-bolhosas e Ulcerativas",
    img: EpidermoliseBolhosa,
  },
  {
    id: 10,
    name: "Exames complementares",
    img: "",
  },
];
