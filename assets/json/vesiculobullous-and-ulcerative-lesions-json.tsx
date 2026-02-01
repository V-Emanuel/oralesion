import {
    EpidermoliseBolhosa,
    EritemaMultiforme,
    EstomatiteAftosa,
    Gengivostomatite,
    HerpesLabial,
    Mucocele,
    Penfigo,
    Penfigoide,
    Ranula,
    Sifilis,
} from "../../assets/images/vesiculobullous-and-ulcerative-lesions/index";

export const vesiculobullousAndUlcerativeLesions = [
  {
    id: "1",
    typeId: "9",
    nome: "Estomatite Aftosa Recidivante",
    img: EstomatiteAftosa,
    fonte: "",
    etiologia:
      "Complexo autoimune em que os linfócitos T causam a lise das células epiteliais.",
    prevalencia: "Crianças e adultos jovens.",
    caracteristicas_clinicas:
      "Coloração avermelhada onde rapidamente necrosa. Tem aspecto oval ou arredondado, sensação de queimação ou desconforto na região.",
    diagnostico_diferencial: "Doença de Behçet.",
    caracteristicas_histopatologicas:
      "Há uma zona central de ulceração recoberta por uma membrana fibrinopurulenta. Apresenta infiltrado inflamatório com vários tipos de células (linfócitos, leucócitos).",
    prognostico: "Bom.",
    tratamento:
      "Anestésico, corticosteróides sistêmicos para controle da recorrência.",
    referencias: {
      "1": "KOWALSKI, Layza et al. Estomatites Aftosas: uma revisão da literatura. 2020.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "2",
    typeId: "9",
    nome: "Gengivoestomatite Herpética Primária",
    img: Gengivostomatite,
    fonte: "",
    etiologia: "Vírus HHV-1 ou HHV-6.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Numerosas vesículas puntiformes que rompem e formam inúmeras lesões pequenas ulceradas e eritematosas. Além de tecido conjuntivo exposto, febre, dor e linfoadenopatia.",
    diagnostico_diferencial:
      "GUNA, candidíase perioral, impetigo, cancro, sífilis.",
    caracteristicas_histopatologicas:
      "Acantose das células epiteliais, núcleos claros e aumentados, presença de células de Tzanck, presença de vesículas intraepiteliais e ulceração com exsudato fibrinoso.",
    prognostico: "Bom.",
    tratamento:
      "Aciclovir sistêmico com menos de 48h de aparecimento. Com mais de 48h usar analgésico e térmico.",
    referencias: {
      "1": "SANTOS, Manuelly Pereira de Morais et al. Herpesvírus humano: tipos, manifestações orais e tratamento. 2012.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "3",
    typeId: "9",
    nome: "Herpes Labial Recorrente",
    img: HerpesLabial,
    fonte: "",
    etiologia: "Vírus HHV-1 ou HHV-2.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Início súbito com sensação de dormência, prurido, pontadas, dor, ardência, com 4 a 6 dias as vesículas rompem e formam crostas, curando sem deixar cicatriz.",
    diagnostico_diferencial: "Afta, eczema de contato, estomatite por candida.",
    caracteristicas_histopatologicas:
      "Presença de células de Tzanck, presença de vesículas intraepiteliais e ulceração com exsudato fibrinoso.",
    prognostico: "Bom.",
    tratamento: "Aciclovir.",
    referencias: {
      "1": "SANTOS, Manuelly Pereira de Morais et al. 2012.",
      "2": "NEVILLE, Brad. 2009.",
    },
  },
  {
    id: "4",
    typeId: "9",
    nome: "Penfigóide de Membranas Mucosas",
    img: Penfigoide,
    fonte: "",
    etiologia: "Doença auto-imune: anticorpos atingem as desmogleínas.",
    prevalencia: "Mulheres 2:1 Homens.",
    caracteristicas_clinicas:
      "Bolhas subepiteliais, ulceradas ou não, frequentemente acompanhada de gengivite descamativa.",
    diagnostico_diferencial: "Pênfigo vulgar.",
    caracteristicas_histopatologicas:
      "Presença de autoanticorpos na camada basal no exame de fluorescência.",
    prognostico:
      "Duvidoso ou sombrio, dependerá da resposta do paciente à terapia e seus efeitos colaterais.",
    tratamento: "Terapia sistêmica com uso de prednisolona.",
    referencias: {
      "1": "FERREIRA, Laila de Oliveira; BARCELLOS, Suelen Santos. 2009.",
      "2": "NEVILLE, Brad. 2009.",
    },
  },
  {
    id: "5",
    typeId: "9",
    nome: "Eritema Multiforme",
    img: EritemaMultiforme,
    fonte: "",
    etiologia: "Incerto, provavelmente imunologicamente mediada.",
    prevalencia: "Homens de 20 a 30 anos.",
    caracteristicas_clinicas:
      "Sintomas prodrômicos. Placas eritematosas acometidas por necrose epitelial e evoluem para lesões rasas com úlceras de limites irregulares. Crostas hemorrágicas na região dos lábios são comuns. Acomete mais em lábio, palato e língua.",
    diagnostico_diferencial:
      "Estomatite ulcerativa recidivante, pitiríase, pênfigo vulgar, síndrome de Stevens-Johnson.",
    caracteristicas_histopatologicas:
      "Hiperplasia epitelial e espongiose com queratinócitos apoptóticos basais e parabasais. Presença de necrose e infiltrado inflamatório.",
    prognostico:
      "Duvidoso ou sombrio, dependerá da resposta do paciente à terapia e seus efeitos colaterais.",
    tratamento: "Corticóides, porém evitados em casos de necrose.",
    referencias: {
      "1": "FERREIRA, Laila de Oliveira; BARCELLOS, Suelen Santos.",
      "2": "NEVILLE, Brad. 2009.",
    },
  },
  {
    id: "6",
    typeId: "9",
    nome: "Pênfigo Vulgar",
    img: Penfigo,
    fonte: "",
    etiologia:
      "Ocorre através da produção de autoanticorpos dirigida contra glicoproteínas de adesão epidérmica, são elas desmogleína 3 e desmogleína 1.",
    prevalencia: "Mulheres na 4ª e 5ª década de vida.",
    caracteristicas_clinicas:
      "Apresenta formação bolhosa intraepitelial, ulcerações, ruptura de bolhas, perda de líquidos e desequilíbrio eletrolítico.",
    diagnostico_diferencial:
      "Dermatite herpetiforme, eritema multiforme bolhoso, líquen plano bolhoso, epidermólise bolhosa, penfigóide de membranas mucosas.",
    caracteristicas_histopatologicas:
      "Apresenta uma fenda intra-epitelial por causa da acantólise dos queratinócitos, além da presença de células de Tzanck.",
    prognostico:
      "Duvidoso ou sombrio, dependerá da resposta do paciente à terapia e seus efeitos colaterais.",
    tratamento:
      "Uso de prednisona e, caso não surta efeito, deve associar a drogas imunossupressoras.",
    referencias: {
      "1": "ENRÍQUEZ, Armando Rojo. 2013.",
    },
  },
  {
    id: "7",
    typeId: "9",
    nome: "Epidermólise Bolhosa",
    img: EpidermoliseBolhosa,
    fonte: "",
    etiologia:
      "Defeito específico nos mecanismos de adesão entre as células epiteliais ou na adesão dessas ao tecido conjuntivo subjacente.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Tecido de granulação ao redor da boca; erosões bucais comuns; hipoplasia do esmalte com perfurações.",
    diagnostico_diferencial: "Bolhas por fricção.",
    caracteristicas_histopatologicas:
      "A forma simples exibe fendas intraepiteliais na microscopia de luz. As formas juncional, distrófica e hemidesmossomal mostram fendas subepiteliais.",
    prognostico: "Duvidoso ou ruim.",
    tratamento:
      "Casos leves não necessitam de tratamento. Porém, o tratamento intensivo com antibióticos por via oral pode ser necessário, caso se desenvolva uma celulite.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "8",
    typeId: "9",
    nome: "Mucocele",
    img: Mucocele,
    fonte: "",
    etiologia:
      "Ruptura de ducto salivar e extravasamento de mucina para o epitélio adjacente.",
    prevalencia: "Crianças e jovens adultos.",
    caracteristicas_clinicas:
      "Aumento de volume flutuante em forma de cúpula, cor azulada translúcida ou normocrômica.",
    diagnostico_diferencial:
      "Hiperplasias fibrosas, papiloma focal, lipoma ou fibroma.",
    caracteristicas_histopatologicas:
      "Área de mucina extravasada circundada por tecido de granulação.",
    prognostico: "Ótimo.",
    tratamento:
      "Deve remover qualquer glândula salivar menor que possa localizar-se dentro da lesão.",
    referencias: {
      "1": "NEVILLE, Brad. 2009.",
    },
  },
  {
    id: "9",
    typeId: "9",
    nome: "Sífilis",
    img: Sifilis,
    fonte: "",
    etiologia: "Infecção crônica causada pelo Treponema pallidum.",
    prevalencia: "Mulheres 1:4 Homens.",
    caracteristicas_clinicas:
      "Primária: úlcera de base clara e indolor. Secundária: surgimento de placas mucosas, pápulas fendidas, condiloma em lata e lues maligna. Terciária: inflamação granulomatosa e perfuração do palato duro.",
    diagnostico_diferencial: "Cancróide.",
    caracteristicas_histopatologicas: "Quadro histopatológico não específico.",
    prognostico: "Bom, quando tratada nos estágios iniciais.",
    tratamento:
      "Para sífilis primária ou secundária, uma dose única de penicilina G benzatina parenteral de ação prolongada. Para a fase terciária, a penicilina intramuscular é administrada três vezes, com intervalo semanal.",
    referencias: {
      "1": "NEVILLE, Brad. 2009.",
    },
  },
  {
    id: "10",
    typeId: "9",
    nome: "Rânula",
    img: Ranula,
    fonte: "",
    etiologia: "Ruptura do ducto da glândula sublingual.",
    prevalencia: "Crianças e jovens adultos.",
    caracteristicas_clinicas:
      "Aumento de volume flutuante, de formato abaulado e coloração azulada no soalho de boca, localizada lateralmente à linha média.",
    diagnostico_diferencial: "Cisto Dermoide.",
    caracteristicas_histopatologicas:
      "Área de mucina extravasada circundada por tecido de granulação.",
    prognostico: "Bom.",
    tratamento:
      "O tratamento da rânula consiste na remoção da glândula sublingual e/ou marsupialização.",
    referencias: {
      "1": "NEVILLE, Brad. 2009.",
    },
  },
];
