import {
  Adenoma,
  Carcinoma,
  CarcinomaAdenoide,
  Osteossarcoma,
} from "../../assets/images/malignant-neoplasms/index";

export const malignantNeoplasms = [
  {
    id: "1",
    typeId: "6",
    nome: "Carcinoma Epidermoide",
    img: Carcinoma,
    fonte: "",
    etiologia:
      "Exposição solar crônica, uso de álcool, tabaco e infecção por HPV.",
    prevalencia: "Homens 5:1 mulheres, com idade média de 67 anos.",
    caracteristicas_clinicas:
      "Lesão tumoral com aspecto exofítico, ulcerado e com bordas mal definidas. Acometem mais a língua, lábios e região de orofaringe.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Células epidermoides caracterizadas por se assemelham às células escamosas, geralmente demonstrando formato poligonal e pontes intercelulares.",
    prognostico: "Ruim.",
    tratamento: "Ressecção cirúrgica com ou sem tratamento adjuvante.",
    referencias: {
      "1": "GUZMÁN G, Pablo et al. Carcinoma epidermoide oral y orofaríngeo: Estudio clínico-patológico. Revista chilena de cirugía, v. 63, n. 3, p. 250-256, jun. 2011.",
    },
  },
  {
    id: "2",
    typeId: "6",
    nome: "Adenoma Pleomórfico",
    img: Adenoma,
    fonte: "",
    etiologia:
      "Neoplasia de glândulas salivares. São derivados de elementos ductais e mioepiteliais.",
    prevalencia:
      "Discreta predileção pelo sexo feminino, entre os 30 e 60 anos de idade.",
    caracteristicas_clinicas:
      "Aumento de volume firme, indolor e com crescimento lento sobre o ramo da mandíbula. Acometem o palato em 50% dos casos intraorais.",
    diagnostico_diferencial:
      "Carcinoma Ex-Adenoma Pleomórfico, Tumor de Warthin.",
    caracteristicas_histopatologicas:
      "Presença de cápsula completa ou incompleta. Uma mistura de glândula celular mioepitelial e mesênquima.",
    prognostico: "Excelente.",
    tratamento: "Excisão cirúrgica.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "3",
    typeId: "6",
    nome: "Carcinoma Adenoide Cístico",
    img: CarcinomaAdenoide,
    fonte: "",
    etiologia:
      "Tipo de câncer que tem seu início em glândula salivar acessória.",
    prevalencia: "Pessoas entre 40 e 60 anos.",
    caracteristicas_clinicas:
      "Úlcera no palato, nódulo com crescimento lento na face ou pescoço.",
    diagnostico_diferencial:
      "Tumor mucoepidermóide e adenocarcinoma, lesões ósseas expansivas.",
    caracteristicas_histopatologicas:
      "Células ductais e mioepiteliais no tumor e invasão perineural.",
    caracteristicas_radiograficas: "Destruição óssea.",
    prognostico: "Ruim.",
    tratamento:
      "Ressecção do tumor com margens de segurança e dissecção cervical em pacientes que tem linfadenopatia.",
    referencias: {
      "1": "PAULA, Raiane Ferreira de; et al. CARCINOMA ADENOIDE CÍSTICO. Brazilian Journal of Development, 1 jan. 2021.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "4",
    typeId: "6",
    nome: "Osteossarcoma",
    img: Osteossarcoma,
    fonte: "",
    etiologia:
      "A etiologia permanece incerta, mas propõe que se originam de células mesenquimais que produzem osso imaturo.",
    prevalencia: "Homens 3:2 mulheres.",
    caracteristicas_clinicas:
      "Dor local, edema, tumefação, mobilidade dos dentes e parestesia.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Presença de proliferação de células tumorais mesenquimais malignas, além da produção de osteóide e/ou osso pelas células tumorais.",
    caracteristicas_radiograficas:
      "Demonstra alteração óssea, às vezes aspecto osteolítico, geralmente espículas podem ser observadas. Uma área triangular de calcificação periosteal na região de borda do tumor e tecido saudável é conhecido como um triângulo de Codman.",
    prognostico: "Ruim.",
    tratamento: "Remoção cirúrgica completa e quimioterapia.",
    referencias: {
      "1": "RITTER, J.; BIELACK, S. S. Osteosarcoma. Annals of Oncology, v. 21, p. vii320—vii325, out. 2010.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
];
