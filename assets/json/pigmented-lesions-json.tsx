import {
  Addison,
  CandidiaseEritematosa,
  Hemangioma,
  Melanoma,
  NevoMelanocitico,
  PeutzJeghers,
  PigmentacaoRacial,
  SarcomaDeKaposi,
  TatuagemPorAmalgama,
} from "../images/pigmented-lesions-images/index";

export const pigmentedLesions = [
  {
    id: "1",
    typeId: "5",
    nome: "Pigmentação Racial",
    img: PigmentacaoRacial,
    fonte: "",
    etiologia:
      "Fatores genéticos e intensificada por fatores físicos, químicos, hormonais e idade.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Pigmentação melânica multifocal e difusa. A cor varia entre castanho-claro e castanho-escuro e é geralmente limitada à gengiva aderida.",
    diagnostico_diferencial: "Mácula melanótica oral, melanoacantoma.",
    caracteristicas_histopatologicas: "",
    prognostico: "Ótimo.",
    tratamento:
      "Não há necessidade de tratamento, exceto por razões estéticas.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "REIS, Renata Oliveira. Diagnóstico Diferencial de Lesões Pigmentadas da Cavidade Oral. 2018.",
    },
  },
  {
    id: "2",
    typeId: "5",
    nome: "Doença de Addison",
    img: Addison,
    fonte: "",
    etiologia:
      "Autoimune. Hipofunção da glândula supra-renal resultando num défice na secreção de cortisol e aldosterona.",
    prevalencia: "Mulheres 127:1.000.000; homens 106:1.000.000.",
    caracteristicas_clinicas:
      "Manchas castanhas e difusas na gengiva, mucosa oral, palato e língua. Aparece depois de haver 90% de destruição do tecido glandular. Irritabilidade, fadiga, depressão, náusea, vômito, diarreia, desejo de comer sal.",
    diagnostico_diferencial: "Ceratose actínica.",
    caracteristicas_histopatologicas:
      "Pigmentação fisiológica, melanose associada ao fumo, pigmentação relacionada a medicamentos, pigmentação por metais pesados.",
    prognostico: "Ótimo para a pigmentação, ruim para doença de base.",
    tratamento: "Uso vitalício de hidrocortisona.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "SAVERINO, Serena; FALORNI, Alberto. Autoimmune Addison's disease. 2020.",
    },
  },
  {
    id: "3",
    typeId: "5",
    nome: "Tatuagem por Amálgama",
    img: TatuagemPorAmalgama,
    fonte: "",
    etiologia:
      "Iatrogênica: Deposição de materiais estranhos exógenos (amálgama).",
    prevalencia: "Adultos.",
    caracteristicas_clinicas:
      "Manchas ou lesões ligeiramente elevadas, com coloração azul, cinza ou preta. Bordas bem definidas, irregulares ou difusas, de tamanho médio.",
    diagnostico_diferencial:
      "Lesões melanóticas como mácula melanótica, nevo melanocítico adquirido, melanoma.",
    caracteristicas_histopatologicas:
      "Fragmentos de amálgama, escuros e sólidos, circundados por um infiltrado inflamatório linfocitário.",
    caracteristicas_radiograficas:
      "Tomadas radiográficas podem revelar fragmentos metálicos na mucosa envolvida.",
    prognostico: "Ótimo.",
    tratamento: "Apenas em áreas estéticas a remoção cirúrgica é indicada.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "BINDA, Nívia Castro et al. Soc. and Dev., 2021.",
    },
  },
  {
    id: "4",
    typeId: "5",
    nome: "Melanoma",
    img: Melanoma,
    fonte: "",
    etiologia: "Origem melanocítica. Radiação ultravioleta, Neoplasia maligna.",
    prevalencia: "Predileção por homens, de 4ª a 7ª décadas de vida.",
    caracteristicas_clinicas:
      "Assimétrico, com bordas irregulares, coloração de matizes e diâmetro maior que 6mm. Pode apresentar dor, parestesia, mobilidade dentária, reabsorção radicular e perda óssea.",
    diagnostico_diferencial:
      "Tatuagem por amálgama, mácula melanótica, nevo melanocítico adquirido, pigmentação fisiológica, sarcoma de Kaposi.",
    caracteristicas_histopatologicas:
      "Junção entre o tecido epitelial e conjuntivo com aumento de volume ulcerado pigmentado na crista alveolar superoposterior.",
    caracteristicas_radiograficas: "Destruição óssea.",
    prognostico: "Ruim. Sobrevida de 5 anos em 15% dos casos.",
    tratamento:
      "Remoção cirúrgica com margem de segurança, associada à radioterapia e quimioterapia.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "BARCELOS, Natália Santos et al. LESÕES PIGMENTADAS DA BOCA: DIAGNÓSTICOS CLÍNICOS DIFERENCIAIS.",
    },
  },
  {
    id: "5",
    typeId: "5",
    nome: "Candidíase Eritematosa",
    img: CandidiaseEritematosa,
    fonte: "",
    etiologia: "Candida albicans após uso de antibióticos de amplo espectro.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Mucosa seca e brilhante, com eritema difuso, podendo ter placas e úlceras superficiais dolorosas e perda das papilas filiformes.",
    diagnostico_diferencial: "Eritroplasia.",
    caracteristicas_histopatologicas:
      "É possível analisar, através do exame de citoscopia, as hifas e leveduras de candida.",
    prognostico: "Bom.",
    tratamento:
      "Uso de antifúngico + substâncias desinfetantes e orientação de higiene bucal.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "SIMÕES, Ricardo Jorge et al. Odontol. Clínico-Científica, 2013.",
    },
  },
  {
    id: "6",
    typeId: "5",
    nome: "Síndrome de Peutz-Jeghers",
    img: PeutzJeghers,
    fonte: "",
    etiologia:
      "Origem genética associada à mutação do gene LKB1, no cromossoma 19.",
    prevalencia: "Da primeira infância até jovens. Sem predileção por sexo.",
    caracteristicas_clinicas:
      "Pigmentação oral difusa associada à polipose intestinal. Lesões maculares, múltiplas, coloração marrom, puntiformes (até 1 mm) e uniformes.",
    diagnostico_diferencial:
      "Mácula melanótica, nevo melanocítico adquirido e doença de Addison.",
    caracteristicas_histopatologicas:
      "Acantose do epitélio com alongamento das cristas epiteliais. aumento de melanócitos.",
    prognostico:
      "Ótimo para as pigmentações de boca. Duvidoso para as lesões gastrintestinais.",
    tratamento:
      "Realização do tratamento adequado com o médico gastroenterologista. Em relação à mancha, não tem tratamento.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
      "2": "KLIMKOWSKI, Sergio et al. Cancers, 2021.",
    },
  },
  {
    id: "7",
    typeId: "5",
    nome: "Hemangioma",
    img: Hemangioma,
    fonte: "",
    etiologia: "Anomalia do desenvolvimento.",
    prevalencia: "Mulheres 3:1 homens.",
    caracteristicas_clinicas:
      "Dimensão de conteúdo sanguíneo de coloração vermelho intenso ao roxo.",
    diagnostico_diferencial:
      "Mucoceles, granulomas piogênicos, sarcoma de Kaposi, fibromas.",
    caracteristicas_histopatologicas:
      "Massa celular bem-circunscrita de células endoteliais arranjadas em agregados lobulares.",
    prognostico: "Bom.",
    tratamento:
      "Escleroterapia, crioterapia, corticoides sistêmicos, interferon, laserterapia, embolização ou excisão cirúrgica.",
    referencias: {
      "1": "MARCA, Juliane et al. Revista Científica Odontologia, 2019.",
    },
  },
  {
    id: "8",
    typeId: "5",
    nome: "Sarcoma de Kaposi",
    img: SarcomaDeKaposi,
    fonte: "",
    etiologia:
      "Herpesvírus humano 8 + HIV, podendo ser clássico, endêmico, epidêmico ou iatrogênico.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Inicialmente formam-se máculas eritematosas e evoluem para placas e nódulos sanguíneos, mais frequentemente no palato.",
    diagnostico_diferencial:
      "Hematoma, hemangioma, dermatofibroma, granuloma piogênico, púrpura, angiomatose bacilar.",
    caracteristicas_histopatologicas:
      "Tumor de células fusiformes no tecido conjuntivo e fendas vasculares mal definidas.",
    prognostico: "Sombrio.",
    tratamento: "Radioterapia, quimioterapia, terapia tetraviral ou cirurgia.",
    referencias: {
      "1": "ENRÍQUEZ, Armando Rojo et al. Acta Médica Grupo Ángeles, 2013.",
    },
  },
  {
    id: "9",
    typeId: "5",
    nome: "Nevo Melanocítico",
    img: NevoMelanocitico,
    fonte: "",
    etiologia:
      "Proliferação benigna e localizada de células provenientes da crista neural, frequentemente denominadas células névicas.",
    prevalencia: "Leve predileção por mulher branca.",
    caracteristicas_clinicas:
      "Inicia-se como uma mácula melanocítica de até 6mm, mas pode evoluir para uma pápula e perder a cor gradualmente.",
    diagnostico_diferencial: "Mácula, melanoma.",
    caracteristicas_histopatologicas:
      "Proliferação benigna e não-encapsulada de células névicas.",
    prognostico: "Ótimo.",
    tratamento: "Não há necessidade.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
];
