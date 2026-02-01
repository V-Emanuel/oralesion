import {
  CandidiasePseudomembranosa,
  GranuloDeFordyce,
  Leucoceratose,
  Leucoplasia,
  LeucoplasiaPilosa,
  Liquen,
  Queilite,
} from "../../assets/images/white-lesions/index";

export const whiteLesions = [
  {
    id: "1",
    typeId: "4",
    nome: "Leucoplasia",
    img: Leucoplasia,
    fonte: "",
    etiologia:
      "Desconhecida; contribuem o tabaco e o consumo excessivo de álcool, radiação e microrganismos.",
    prevalencia: "Homem 3:1 mulheres.",
    caracteristicas_clinicas:
      "Predominantemente uma lesão branca da mucosa oral que não pode ser caracterizada como nenhuma outra lesão. Quando há áreas vermelhas sugere-se displasia. Potencial de malignização.",
    diagnostico_diferencial: "Candidíase crônica hiperplásica, líquen plano.",
    caracteristicas_histopatologicas:
      "Hiperceratose da superfície, numerosas células inflamatórias. Quanto mais displásico o tecido, mais células semelhantes ao CEC aparecerão.",
    prognostico:
      "Duvidoso ou sombrio, vai depender do achado histopatológico, se e com qual grau de displasia.",
    tratamento:
      'Interromper hábitos danosos. O tratamento depende do resultado da biópsia. "quimioproteção".',
    referencias: {
      "1": "BINDA, Nívia Castro et al. Lesões brancas benignas da mucosa oral: apresentação clínica, diagnóstico e tratamento. Research, Society and Development, v. 10, n. 13, 2021.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "2",
    typeId: "4",
    nome: "Líquen Plano",
    img: Liquen,
    fonte: "",
    etiologia:
      "Idiopática. Hipóteses: estresse e ansiedade, drogas, vírus da hepatite C.",
    prevalencia: "Mulher 3:2 homem.",
    caracteristicas_clinicas:
      "Estrias +/- simétricas no padrão reticular e bilaterais com ou sem rompimento do tecido conjuntivo, podendo ser erosivo, reticular ou bolhoso.",
    diagnostico_diferencial: "Mucosa mordiscada.",
    caracteristicas_histopatologicas:
      "Hiperceratose com cristas epiteliais e infiltrado inflamatório imediatamente subjacente ao epitélio.",
    prognostico: "Regular.",
    tratamento:
      "Uso de placas de silicone envolvendo a gengiva com corticoide tópico.",
    referencias: {
      "1": "BINDA, Nívia Castro et al. 2021.",
      "2": "NEVILLE, Brad. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "3",
    typeId: "4",
    nome: "Leucoplasia Pilosa",
    img: LeucoplasiaPilosa,
    fonte: "",
    etiologia: "Imunossupressão e está associada ao vírus Epstein-Barr (EBV).",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Lesões esbranquiçadas nas bordas laterais de língua de aspecto saburroso podem sugerir infecção por HIV.",
    diagnostico_diferencial: "Candidíase pseudomembranosa.",
    caracteristicas_histopatologicas:
      "Paraceratinizado espessa com projeções na superfície com epitélio acantótico e zona de célula com citoplasma abundante.",
    prognostico: "Ruim quando o paciente é HIV+.",
    tratamento: "Aciclovir.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "4",
    typeId: "4",
    nome: "Leucoceratose Nicotínica do Palato",
    img: Leucoceratose,
    fonte: "",
    etiologia: "Fumo.",
    prevalencia: "Homens que usam cachimbo ou cigarro.",
    caracteristicas_clinicas:
      "Área branco acinzentada difusa no palato, podendo ter várias pápulas.",
    diagnostico_diferencial: "Candidíase pseudomembranosa.",
    caracteristicas_histopatologicas:
      "Hiperceratose e acantose do epitélio e inflamação crônica dos tecidos conjuntivo subepitelial e glândulas mucosas.",
    prognostico: "Excelente.",
    tratamento: "Fim do hábito de fumar.",
    referencias: {
      "1": "BINDA, Nívia Castro et al. 2021.",
      "2": "NEVILLE, Brad. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "5",
    typeId: "4",
    nome: "Candidíase Pseudomembranosa",
    img: CandidiasePseudomembranosa,
    fonte: "",
    etiologia:
      "Infecção micótica causada por fungos de candida. Imunossupressão, antibioticoterapia, má higiene.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Placa branca aderida na região da mucosa labial e jugal, língua e palato, que se assemelha a queijo ou leite coalhado, removíveis com fricção.",
    diagnostico_diferencial:
      "Herpes simplex, herpes zoster, candidíase e miliária.",
    caracteristicas_histopatologicas:
      "Citopatologia: hifas e leveduras de candida.",
    prognostico: "Ótimo.",
    tratamento: "Uso de antifúngicos + orientação de higiene bucal.",
    referencias: {
      "1": "BINDA, Nívia Castro et al. 2021.",
      "2": "NEVILLE, Brad. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "6",
    typeId: "4",
    nome: "Grânulo de Fordyce",
    img: GranuloDeFordyce,
    fonte: "",
    etiologia:
      "Alteração fisiológica normal representada por glândulas sebáceas.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Glândulas sebáceas ectópicas sem significado patológico.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Glândulas sebáceas mais próximas do tecido epitelial.",
    prognostico: "Ótimo.",
    tratamento: "Não se faz necessário.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "7",
    typeId: "4",
    nome: "Queilite Actínica",
    img: Queilite,
    fonte: "",
    etiologia:
      "Alteração pré-maligna comum no vermelhão dos lábios que resulta da exposição progressiva excessiva aos raios ultravioletas da luz solar.",
    prevalencia: "Homem 10:1 mulher, acima de 45 anos.",
    caracteristicas_clinicas:
      "Atrofia da borda do vermelhão no lábio inferior com apagamento da margem entre lábio e pele. Progressivamente se tornam zonas leucoplásicas e/ou ulceradas nas regiões mais secas do vermelhão.",
    diagnostico_diferencial: "Ceratose actínica.",
    caracteristicas_histopatologicas:
      "Epitélio escamoso queratinizado atrófico com graus variados de displasia. É comum um infiltrado de células inflamatórias crônicas. Presença de elastose solar.",
    prognostico:
      "Duvidoso ou sombrio, irá depender do grau de atrofia e ou presença de displasia e qual o grau de displasia.",
    tratamento:
      "Utilizar bálsamos para os lábios e bloqueadores. Pode-se, também, realizar tratamento com laser de CO2, eletrodissecção e terapia fotodinâmica. Em casos mais graves o tratamento é cirúrgico.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
];
