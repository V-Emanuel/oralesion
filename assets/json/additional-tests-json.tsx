import {
    Coagulograma,
    Creatinina,
    GlicemiaEmJejum,
    HemoglobinaGlicada,
    Hemograma,
    Tgo,
    Tgp,
    Ureia,
} from "../images/additional-tests/index";

export const additionalTests = [
  {
    id: "1",
    typeId: "10",
    nome: "Hemograma",
    img: Hemograma,
    fonte: "",
    conceito:
      "O hemograma é um exame completo que avalia os níveis de células vermelhas, células brancas e plaquetas. É uma ferramenta importante para averiguar anemias, processos infecciosos, distúrbios hemorrágicos e alterações neoplásicas.",
    valores_referencia:
      "Eritrograma (Contagem de Hemácias): Crianças 4.0 a 5.2 milhões/mm³; Homens 4.0 a 6.0 milhões/mm³; Mulheres 4.0 a 5.5 milhões/mm³. Hemoglobina: Homens 13 a 18 g/dL; Mulheres 12 a 16 g/dL. Hematócrito: Homens 40 a 52%; Mulheres 35 a 47%.",
    observacoes:
      "Valores acima de 7.0 milhões de mm³ indicam Eritrocitose. Valores acima de 18 g/dL indicam Poliglobulia. Valores reduzidos indicam anemias.",
    referencias: {
      "1": "CARVALHO et al., 2011; TENDORO, 2020.",
    },
  },
  {
    id: "2",
    typeId: "10",
    nome: "Coagulograma",
    img: Coagulograma,
    fonte: "",
    conceito:
      "O coagulograma é um conjunto de exames que permite conhecer e avaliar os indicadores da coagulação e o sistema anticoagulação do organismo.",
    valores_referencia:
      "Tempo de Sangramento (TS): 3 a 7 minutos. Tempo de Coagulação (TC): 3 a 9 minutos. Tempo de Tromboplastina parcial (TTPa): 35 a 50 segundos. Tempo de Protrombina Ativada (TP): INR de 1 a 2s (sem uso de varfarina) e 2 a 3s (sob uso).",
    referencias: {
      "1": "CARVALHO et al., 2011; MONTEIRO, LOPES e PEREIRA, 2022.",
    },
  },
  {
    id: "3",
    typeId: "10",
    nome: "Glicemia em Jejum",
    img: GlicemiaEmJejum,
    fonte: "",
    conceito:
      "Meio clássico de se diagnosticar o diabetes mellitus. Quando em jejum, a taxa de glicose circulante deve situar-se abaixo de 100 mg/dL nos pacientes considerados normais.",
    valores_referencia:
      "Até 99 mg/dL: Normal. 100 a 125 mg/dL: Pré-diabetes. Acima de 126 mg/dL: Diabetes.",
    referencias: {
      "1": "ISA, Rodrigo Cimino et al. Revista Univap, v. 20, n. 35, p. 15-23, 2014.",
    },
  },
  {
    id: "4",
    typeId: "10",
    nome: "Hemoglobina Glicada (HbA1c)",
    img: HemoglobinaGlicada,
    fonte: "",
    conceito:
      "Exame prático que não necessita de jejum. A hemoglobina glicada reflete os níveis médios de glicemia nos últimos 3 meses, pois a glicose se liga às hemácias durante sua meia-vida.",
    valores_referencia:
      "4,5 a 5,6%: Normal. 5,7 a 6,4%: Pré-diabetes. Acima de 6,5%: Diabetes.",
    observacoes:
      "Glicosúria (glicose na urina) ocorre em níveis acima de 180 mg/dL.",
    referencias: {
      "1": "ISA, Rodrigo Cimino et al. Revista Univap, v. 20, n. 35, p. 15-23, 2014.",
    },
  },
  {
    id: "5",
    typeId: "10",
    nome: "TGO (AST)",
    img: Tgo,
    fonte: "",
    conceito:
      "A transaminase glutâmico oxalacética reflete o status de funcionamento do fígado. Essencial para produção de energia, é encontrada no citoplasma e mitocôndrias de células hepáticas e liberada no sangue quando há danos à membrana dos hepatócitos.",
    valores_referencia:
      "Recém-nascidos: 25 a 75 u/L. Crianças: 15 a 60 u/L. Mulheres: 15 a 30 u/L. Homens: 20 a 40 u/L.",
    referencias: {
      "1": "TENDORO, Karina Vanessa. Exames laboratoriais de interesse para odontologia. 2020. Tese de Doutorado.",
    },
  },
  {
    id: "6",
    typeId: "10",
    nome: "TGP (ALT)",
    img: Tgp,
    fonte: "",
    conceito:
      "A transaminase glutâmico pirúvica é encontrada no plasma e em vários tecidos corporais, mas é especialmente associada ao fígado. Sua elevação absoluta tem grande significado diagnóstico para hepatopatias agudas.",
    valores_referencia:
      "Recém-nascidos: 25 a 75 u/L. Crianças: 15 a 60 u/L. Mulheres: 15 a 30 u/L. Homens: 20 a 40 u/L.",
    referencias: {
      "1": "TENDORO, Karina Vanessa. 2020. Tese de Doutorado.",
    },
  },
  {
    id: "7",
    typeId: "10",
    nome: "Ureia",
    img: Ureia,
    fonte: "",
    conceito:
      "Composto nitrogenado criado no fígado quando o corpo decompõe proteínas. Os rins filtram esses resíduos para a urina. Níveis elevados podem indicar falha na função renal ou desidratação.",
    valores_referencia:
      "Crianças até 1 ano: 9 a 40 mg/dL. Crianças acima de 1 ano: 11 e 38 mg/dL. Adultos: 13 e 43 mg/dL.",
    referencias: {
      "1": "TENDORO, Karina Vanessa. 2020. Tese de Doutorado.",
    },
  },
  {
    id: "8",
    typeId: "10",
    nome: "Creatinina",
    img: Creatinina,
    fonte: "",
    conceito:
      "Produto residual que se forma quando a creatina é encontrada no músculo. O nível de creatinina no sangue fornece informações sobre o desempenho dos rins, sendo eliminada do corpo pelos mesmos.",
    valores_referencia:
      "Crianças até 1 ano: 0.17 a 0.42 mg/dL. Homens: 0.7 a 1.20 mg/dL. Mulheres: 0.5 a 0.9 mg/dL.",
    observacoes:
      "Sinais de níveis altos incluem fadiga, perda de apetite, inchaço na face, punhos ou tornozelos e dor lombar.",
    referencias: {
      "1": "TENDORO, Karina Vanessa. 2020. Tese de Doutorado.",
    },
  },
];
