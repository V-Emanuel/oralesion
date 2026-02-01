import {
  Candidiase,
  Caxumba,
  Chron,
  GengivoEstomatiteHerpetica,
  Herpangina,
  Impetigo,
  InfeccaoPorHsv,
  MaoPeBoca,
  Molusco,
  MononucleoseInfecciosa,
  Rubeola,
  Sarampo,
  Varicela,
} from "../../assets/images/childhood-oral-lesions/index";

export const childhoodOralLesions = [
  {
    id: "1",
    typeId: "2",
    nome: "Infecção por HSV",
    img: InfeccaoPorHsv,
    fonte: "",
    etiologia:
      "Vírus herpes humano (HSV 1 e 2). Vírus em saliva infectada ou lesões periorais ativas.",
    prevalencia:
      "População de média e baixa renda. Pessoas com o sistema imunológico imaturo ou suprimido.",
    caracteristicas_clinicas:
      "Vesículas múltiplas, aspecto redondo e superficial além de gengivite aguda.",
    diagnostico_diferencial:
      "Candidíase eritematosa e psoríase. Estomatite alérgica, aparecimento das lesões herpéticas.",
    caracteristicas_histopatologicas:
      "Presença de células gigantes acantolíticas multinucleadas.",
    prognostico: "Duvidoso.",
    tratamento: "Paracetamol e lidocaína tópica aliviam os sintomas.",
    referencias: {
      "1": "CRIMI, Salvatore et al. Herpes Virus, Oral Clinical Signs and QOL: Systematic Review of Recent Data. Viruses, 2019.",
    },
  },
  {
    id: "2",
    typeId: "2",
    nome: "Gengivoestomatite Herpética",
    img: GengivoEstomatiteHerpetica,
    fonte: "",
    etiologia: "Vírus da família do herpes vírus humano (HHV).",
    prevalencia:
      "Crianças entre 1 e 5 anos de idade, adolescentes e adultos jovens.",
    caracteristicas_clinicas:
      "Vesículas puntiformes que depois se rompem e formam pequenas ulcerações avermelhadas.",
    diagnostico_diferencial: "Impetigo, doença dos pés, mãos e boca.",
    caracteristicas_histopatologicas:
      "Células epiteliais com aumento do volume nuclear, acantólise (células de Tzanck), inclusões nucleares.",
    prognostico: "Duvidoso.",
    tratamento: "Bochecho com colutórios bucais anestésicos.",
    referencias: {
      "1": "DE ALMEIDA LAWALL, Melaine et al. Gengivoestomatite herpética primária em adulto: relato de caso clínico. Revista Odonto Ciência, 2005.",
    },
  },
  {
    id: "3",
    typeId: "2",
    nome: "Mononucleose Infecciosa",
    img: MononucleoseInfecciosa,
    fonte: "",
    etiologia: "Vírus Epstein-Barr.",
    prevalencia: "Crianças e adolescentes.",
    caracteristicas_clinicas:
      "Assintomático em crianças. A maior parte dos adultos apresenta febre, linfadenopatia, faringite, hepatoesplenomegalia, tosse e rinite.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas: "",
    prognostico: "Bom.",
    tratamento:
      "Normalmente regride em até 6 semanas, antipirético sem aspirina, AINES para diminuir sintomas mais comuns.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "4",
    typeId: "2",
    nome: "Parotidite Epidêmica (Caxumba)",
    img: Caxumba,
    fonte: "",
    etiologia: "Vírus da família Paramyxoviridae e do gênero Paramyxovirus.",
    prevalencia:
      "Crianças em idade escolar e jovens adultos em idade universitária.",
    caracteristicas_clinicas:
      "Apresenta tumefação dolorosa, inflamação das glândulas salivares, principalmente parótida, febre baixa.",
    diagnostico_diferencial: "Sinais Patognomônicos.",
    prognostico: "Caso vacinado previamente, tem melhores resultados.",
    tratamento:
      "É paliativo. Com uso de antipirético e analgésico sem aspirina. Deve-se evitar alimentos ácidos.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "RIBEIRO, Bruna Brenha et al. Importância do reconhecimento das manifestações bucais de doenças e de condições sistêmicas pelos profissionais de saúde. Odonto, 2012.",
    },
  },
  {
    id: "5",
    typeId: "2",
    nome: "Herpangina",
    img: Herpangina,
    fonte: "",
    etiologia:
      "Vírus Coxsackie do grupo A e, ocasionalmente, por outros enterovírus.",
    prevalencia: "Mais comum em lactentes e crianças.",
    caracteristicas_clinicas:
      "Dor ao deglutir, múltiplas úlceras apenas na região posterior da cavidade oral, febre antes de manifestação oral.",
    diagnostico_diferencial: "Estomatite herpética e varicela-zoster.",
    prognostico: "Bom.",
    tratamento:
      "Medicamento antiviral, ibuprofeno, enxaguante contendo extrato de aloe vera.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Elsevier, 2009.",
      "2": "APRIASARI, Maharani Laillyza et al. Management of Herpangina. DENTA, 2020.",
    },
  },
  {
    id: "6",
    typeId: "2",
    nome: "Doença Mão-Pé-Boca",
    img: MaoPeBoca,
    fonte: "",
    etiologia: "Vírus Coxsackie da família dos enterovírus.",
    prevalencia: "Crianças até 10 anos.",
    caracteristicas_clinicas:
      "Febre, lesões ulcerativas nas palmas das mãos e nas plantas dos pés e as vezes na boca (língua, gengiva, úvula, mucosa oral e palato são os mais acometidos).",
    diagnostico_diferencial:
      "Aftas, herpangina, gengivoestomatite herpética, varicela, eritema multiforme, herpes zoster.",
    prognostico: "Bom.",
    tratamento:
      "Sintomático e preventivo, ingestão de líquido, evitar alimento ácido, apimentado, analgésico, antipirético, anti-inflamatório e clorexidina.",
    referencias: {
      "1": "APRIASARI, Maharani Laillyza et al. Management of Herpangina. DENTA, 2020.",
    },
  },
  {
    id: "7",
    typeId: "2",
    nome: "Molusco Contagioso",
    img: Molusco,
    fonte: "",
    etiologia: "Causada por um poxvírus.",
    prevalencia: "Crianças.",
    caracteristicas_clinicas:
      "Pequenas pápulas cerosas que têm um formato de cúpula com uma depressão central.",
    diagnostico_diferencial:
      "Pequenas verrugas planas, condiloma acuminado, hiperplasia sebácea, cisto epidérmico, granuloma piogênico, nevos, foliculite e varicela.",
    caracteristicas_histopatologicas:
      "A superfície epitelial forma um crescimento hiperplásico aprofundando no epitélio, apresenta inclusões intracitoplasmáticas conhecidas como corpúsculo do molusco.",
    prognostico: "Bom.",
    tratamento:
      "Respostas positivas para a terapia imunomoduladores ou antiviral, como ritonavir (uso oral), zidovudina (uso oral), cidofovir (uso lesional).",
    referencias: {
      "1": "FREITAS, Keilla. Molusco contagioso. São Paulo, 2019.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Elsevier, 2009.",
    },
  },
  {
    id: "8",
    typeId: "2",
    nome: "Candidíase",
    img: Candidiase,
    fonte: "",
    etiologia:
      "Espécies Candida spp., sendo a maior responsável a C. albicans.",
    prevalencia: "Crianças nos primeiros seis meses de vida.",
    caracteristicas_clinicas:
      "Existem tipos de candidíase e as principais são candidíase pseudomembranosa que se apresenta com placas brancas, destacáveis, eritematosa apresentando manchas vermelhas e sensação de queimação, queilite angular, com fissuras avermelhadas na região de canto da boca.",
    diagnostico_diferencial:
      "Herpes simplex, herpes zoster, candidíase e miliária.",
    prognostico: "Bom.",
    tratamento:
      "Penicilina, antibiótico tópico para o tipo não bolhoso e antibiótico sistêmico para o tipo bolhoso.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Elsevier, 2009.",
      "2": "PLAS, Rosana van der. Candidíase oral: manifestações clínicas e tratamento. 2016.",
    },
  },
  {
    id: "9",
    typeId: "2",
    nome: "Doença de Chron",
    img: Chron,
    fonte: "",
    etiologia: "Doença intestinal inflamatória idiopática crônica.",
    prevalencia: "Ligeiramente maior em mulheres.",
    caracteristicas_clinicas:
      "Diarreia, dor abdominal, perda de peso, náusea, vômito, podendo ter febre ou calafrios.",
    diagnostico_diferencial: "Doença celíaca, apendicite, doença de behçet.",
    caracteristicas_histopatologicas:
      "Apresenta inflamação granulomatosa não necrosante do tecido conjuntivo submucoso.",
    prognostico:
      "Não tem cura, mas com tratamento adequado as pessoas podem viver de forma produtiva/normal.",
    tratamento:
      "Terapia farmacológica dependendo da gravidade da doença e medicamentos à base de sulfa.",
    referencias: {
      "1": "FEUERSTEIN, Joseph D. et al. Crohn Disease: Epidemiology, Diagnosis, and Management. Mayo Clinic Proceedings, 2017.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Elsevier, 2009.",
    },
  },
  {
    id: "10",
    typeId: "2",
    nome: "Impetigo",
    img: Impetigo,
    fonte: "",
    etiologia: "Bactéria Streptococcus pyogenes ou Staphylococcus aureus.",
    prevalencia:
      "Pessoas com condições sistêmicas debilitantes, criança em idade escolar.",
    caracteristicas_clinicas:
      "Erupção avermelhada em crosta na região ao redor de nariz e boca.",
    diagnostico_diferencial:
      "Herpes simplex, herpes zoster, candidíase e miliária.",
    prognostico: "Bom.",
    tratamento:
      "Penicilina, antibiótico tópico para o tipo não bolhoso e antibiótico sistêmico para o tipo bolhoso.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "2",
    typeId: "7",
    nome: "Varicela",
    img: Varicela,
    fonte: "",
    etiologia:
      "Conhecida vulgarmente como catapora, é causada pelo vírus varicela-zoster (VZV).",
    prevalencia: "Crianças entre 5 e 9 anos de idade.",
    caracteristicas_clinicas:
      "Lesões semelhantes a bolhas, principalmente na bochecha, gengiva, língua e palato.",
    diagnostico_diferencial: "Lesões aftosas, estomatite herpética.",
    caracteristicas_histopatologicas:
      "As alterações citológicas se parecem muito com as do vírus do herpes simples (HSV). O vírus causa acantólise e tem a formação de inúmeras células de tzanck flutuantes que apresentam marginação nuclear de cromatina e multinucleação ocasional.",
    prognostico: "Bom.",
    tratamento:
      "Banho morno com sabão ou bicarbonato de sódio, aplicação de loção de calamina e de difenidramina sistêmica para aliviar os pruridos; aciclovir nas primeiras 24h reduz a duração.",
    referencias: {
      "1": "RIBEIRO, Bruna Brenha et al. Odonto, 2012.",
      "2": "NEVILLE, Brad. Elsevier, 2009.",
    },
  },
  {
    id: "3",
    typeId: "7",
    nome: "Sarampo",
    img: Sarampo,
    fonte: "",
    etiologia:
      "Causada pelo vírus da família Paramyxoviridae e gênero Morbillivirus.",
    prevalencia: "Variável relacionada ao grau da utilização da vacina.",
    caracteristicas_clinicas:
      "Manchas de Koplik, pequenos pontos brancos azulados formados na mucosa jugal e são circundados por um halo vermelho e brilhante.",
    diagnostico_diferencial: "Sinais Patognomônicos.",
    caracteristicas_histopatologicas:
      "As manchas de koplik podem ver microscopicamente uma área de hiperparaceratose onde o epitélio subjacente tem espongiose, edema intercelular.",
    prognostico: "Caso vacinado previamente, tem melhores resultados.",
    tratamento: "Vacina tríplice para prevenir, antipiréticos sem aspirina.",
    referencias: {
      "1": "NEVILLE, Brad. Elsevier, 2009.",
      "2": "RIBEIRO, Bruna Brenha et al. Odonto, 2012.",
    },
  },
  {
    id: "4",
    typeId: "7",
    nome: "Rubéola",
    img: Rubeola,
    fonte: "",
    etiologia: "É transmitida por vírus do gênero Rubivirus, o vírus Rubella.",
    prevalencia: "Crianças e adolescentes.",
    caracteristicas_clinicas:
      "Linfadenopatia generalizada, eritema, edema nas amígdalas e no palato mole; no palato aparecem petéquias que podem aparecer também na pele.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "pápulas vermelhas em área de transição entre palato duro e palato mole, sinal de Forchheimer.",
    prognostico: "Bom.",
    tratamento: "Vacinação tríplice para prevenir. Não tem tratamento.",
    referencias: {
      "1": "NEVILLE, Brad. Elsevier, 2009.",
      "2": "RIBEIRO, Bruna Brenha et al. Odonto, 2012.",
      "3": "AHUJA, R. et al. Case Reports, 2015.",
    },
  },
];
