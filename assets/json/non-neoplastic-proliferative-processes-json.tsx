import {
    Epulide,
    Fibroma,
    FibromaOssificante,
    Granuloma,
    Hiperplasia,
    LesaoCentral,
    LesoesPerifericas,
    PapilomatosePorDentadura,
    Polipo,
} from "../../assets/images/non-neoplastic-proliferative-processes/index";

export const nonNeoplasticProliferativeProcesses = [
  {
    id: "1",
    typeId: "3",
    nome: "Epúlide Fissurada",
    img: Epulide,
    fonte: "",
    etiologia:
      "Resposta proliferativa da mucosa bucal a trauma, com formação excessiva de epitélio e conjuntivo fibroso.",
    prevalencia: "Predileção por mulheres.",
    caracteristicas_clinicas:
      "Prega única ou múltipla de tecido conjuntivo hiperplásico, podendo ser firme fibroso com coloração semelhante à mucosa ou com áreas eritematosas ou ulceradas. Geralmente acomete rebordos alveolares. Sintomatologia depende da intensidade do trauma.",
    diagnostico_diferencial: "Granuloma piogênico.",
    caracteristicas_histopatologicas:
      "Tecido epitelial com ulcerações e uma área com processo inflamatório, além de uma proliferação em direção ao conjuntivo. Este último é fibroso com células inflamatórias e plasmócitos.",
    prognostico: "Ótimo.",
    tratamento:
      "Excisão cirúrgica com eliminação do agente de trauma para evitar recidiva.",
    referencias: {
      "1": "KUHN-DALL'MAGRO, Alessandra et al. RFO UPF, v. 18, n. 2, p. 206-210, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "2",
    typeId: "3",
    nome: "Hiperplasia Fibrosa por Câmara de Sucção",
    img: Hiperplasia,
    fonte: "",
    etiologia: "Câmara de sucção da prótese estimula a proliferação tecidual.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Tem a forma da câmara de sucção em pacientes desdentados maxilares, no palato.",
    diagnostico_diferencial: "Granuloma piogênico.",
    caracteristicas_histopatologicas:
      "Tecido epitelial com ulcerações e uma área com processo inflamatório, além de uma proliferação em direção ao conjuntivo. Este último é fibroso com células inflamatórias e plasmócitos.",
    prognostico: "Ótimo.",
    tratamento: "Pode ser conservador.",
    referencias: {
      "1": "KUHN-DALL'MAGRO, Alessandra et al. RFO UPF, v. 18, n. 2, p. 206-210, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "3",
    typeId: "3",
    nome: "Hiperplasia Fibrosa Focal (Fibroma)",
    img: Fibroma,
    fonte: "",
    etiologia:
      "Causada por traumas, mas nem sempre a irritação é determinada, podendo ser por hábitos parafuncionais.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Menos extensa e mais localizada, com cerca de 1-2mm de diâmetro, pedunculada ou séssil e localizada em mucosa jugal, língua e lábio inferior.",
    diagnostico_diferencial:
      "Mucocele, lipofibroma, neurofibroma, tumores de glândulas salivares menores.",
    caracteristicas_histopatologicas:
      "Tecido epitelial com ulcerações e uma área com processo inflamatório, além de uma proliferação em direção ao conjuntivo. Este último é fibroso com células inflamatórias e plasmócitos.",
    prognostico: "Ótimo.",
    tratamento: "Remoção cirúrgica.",
    referencias: {
      "1": "KUHN-DALL'MAGRO, Alessandra et al. RFO UPF, v. 18, n. 2, p. 206-210, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "4",
    typeId: "3",
    nome: "Pólipo Fibroepitelial (Fibroma por Dentadura)",
    img: Polipo,
    fonte: "",
    etiologia: "Trauma por dentadura.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "É uma hiperplasia fibrosa em formato de pólipo, rósea e com pedículo, lembrando uma folha, normalmente no palato duro, abaixo de uma dentadura superior.",
    diagnostico_diferencial: "Papiloma escamoso ou condiloma acuminado.",
    caracteristicas_histopatologicas:
      "Tecido epitelial com ulcerações e uma área com processo inflamatório, além de uma proliferação em direção ao conjuntivo. Este último é fibroso com células inflamatórias e plasmócitos.",
    prognostico: "Ótimo.",
    tratamento: "Remoção cirúrgica.",
    referencias: {
      "1": "KUHN-DALL'MAGRO, Alessandra et al. RFO UPF, v. 18, n. 2, p. 206-210, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "5",
    typeId: "3",
    nome: "Papilomatose Inflamatória por Dentadura",
    img: PapilomatosePorDentadura,
    fonte: "",
    etiologia:
      "Crescimento tecidual reativo, quase sempre associado ao uso de dentadura mal adaptada e má higienização.",
    prevalencia: "Sem predileção.",
    caracteristicas_clinicas:
      "Hiperplasia fibrosa com aspecto eritematoso, superfície pedregosa e associada a sensação de queimação.",
    diagnostico_diferencial: "Candidíase eritematosa.",
    caracteristicas_histopatologicas:
      "Numerosos crescimentos papilares, epitélio e tecido conjuntivo hiperplásico e com células inflamatórias crônicas. A presença de hifas de cândida albicans é um achado comum.",
    prognostico: "Bom.",
    tratamento:
      "Remoção da prótese + antifúngicos (miconazol 2% pomada). Lesões antigas podem necessitar de tratamento cirúrgico.",
    referencias: {
      "1": "KUHN-DALL'MAGRO, Alessandra et al. RFO UPF, v. 18, n. 2, p. 206-210, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "6",
    typeId: "3",
    nome: "Granuloma Piogênico",
    img: Granuloma,
    fonte: "",
    etiologia:
      "Resposta tecidual exuberante a uma irritação local ou trauma, principalmente a placa bacteriana.",
    prevalencia:
      "Crianças e adultos jovens, sexo feminino e durante a gravidez.",
    caracteristicas_clinicas:
      "Massa plana ou lobulada, exofítica, usualmente pedunculada e ulcerada, de cor variável do rosa ao roxo, mostrando sinal de alta vascularização. Mais comum na gengiva, lábios e mucosa jugal. Não causa reabsorção óssea.",
    diagnostico_diferencial:
      "Hemangioma, lesão periférica de células gigantes.",
    caracteristicas_histopatologicas:
      "Intensa proliferação vascular com tecido de granulação, superfície parcialmente ulcerada com infiltrado inflamatório misto.",
    prognostico: "Bom.",
    tratamento: "Excisão cirúrgica e remoção de agentes irritantes.",
    referencias: {
      "1": "PALMEIRA, Anna Rebeca de Barros Lins Silva et al. RGO, v. 61, n. 4, p. 543-547, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "7",
    typeId: "3",
    nome: "Lesões Periféricas de Células Gigantes",
    img: LesoesPerifericas,
    fonte: "",
    etiologia: "Lesões reativas causadas por irritação local ou trauma.",
    prevalencia:
      "Predileção por mulheres e mais comuns a partir da quinta década de vida.",
    caracteristicas_clinicas:
      "Exclusivamente na gengiva ou rebordo alveolar de incisivo e pré-molares. É uma massa nodular vermelhinho-arroxeada, séssil ou pedunculada, com ou sem ulceração que provoca reabsorção em forma de taça no osso alveolar adjacente.",
    diagnostico_diferencial: "Granuloma piogênico.",
    caracteristicas_histopatologicas:
      "Proliferação de células gigantes multinucleadas e abundante formação de células fusiformes com hemorragia abundante e hemossiderina. Superfície pode estar ulcerada.",
    caracteristicas_radiograficas:
      "Área radiolúcida no osso adjacente à lesão com destruição da crista óssea interdental. Não é encapsulada.",
    prognostico: "Excelente.",
    tratamento: "Excisão cirúrgica e remoção dos focos de irritação local.",
    referencias: {
      "1": "PALMEIRA, Anna Rebeca de Barros Lins Silva et al. RGO, v. 61, n. 4, p. 543-547, 2013.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "8",
    typeId: "3",
    nome: "Lesão Central de Células Gigantes",
    img: LesaoCentral,
    fonte: "",
    etiologia:
      "Origem incerta, mas relacionada com traumas, hemorragias intra-ósseas e/ou causas sistêmicas que o relacionam com síndromes como neurofibromatose, Noonan e hiperparatireoidismo.",
    prevalencia: "Predileção por mulheres e em adultos com mais de 30 anos.",
    caracteristicas_clinicas:
      "Lesão benigna, intraóssea com múltiplos focos de hemorragia. Pode-se sentir dor, parestesia e uma região usualmente ulcerada de cor púrpuro-azulado. Localizam-se especialmente em mandíbula, na porção anterior.",
    diagnostico_diferencial:
      "Em crianças sugere Querubismo e hiperparatireoidismo.",
    caracteristicas_histopatologicas:
      "Células gigantes (osteoclastos ou macrófagos) em um fundo de células mesenquimais com áreas de extravasamento de eritrócitos e depósito de hemossiderina.",
    caracteristicas_radiograficas:
      "Expansão radiolúcida do osso, multi ou unilocular, podendo ocorrer perfuração da tábua óssea. Bem delimitado.",
    prognostico: "Bom.",
    tratamento:
      "Excisão cirúrgica e curetagem. Em casos agressivos fazer uso de corticosteróides, calcitonina e interferon alfa-2a.",
    referencias: {
      "1": "SILVA, Wérica Suzana de Almeida et al. Revista Eletrônica Acervo Saúde, n. 17, p. e192, 2018.",
      "2": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
  {
    id: "9",
    typeId: "3",
    nome: "Fibroma Ossificante Periférico",
    img: FibromaOssificante,
    fonte: "",
    etiologia:
      "Crescimento gengival reativo a estímulos crônicos de longa duração.",
    prevalencia: "Predileção por mulheres, na maxila.",
    caracteristicas_clinicas:
      "Massa nodular exofítica pedunculada ou séssil, com consistência firme e fibrosa, de cor vermelha ou rósea e consistência lisa ou ulcerada.",
    diagnostico_diferencial: "Granuloma piogênico.",
    caracteristicas_histopatologicas:
      "Proliferação fibrosa associada com material mineralizado semelhante a osso, cemento ou calcificações distróficas. Superfície pode estar ulcerada.",
    caracteristicas_radiograficas:
      "No interior observa-se focos radiopacos dispersos, caracterizando focos de calcificação distrófica é um material amorfo circunscrito.",
    prognostico: "Favorável.",
    tratamento:
      "Excisão cirúrgica profunda com inclusão do periósteo e ligamento periodontal.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. 3 ed. Rio de Janeiro: Elsevier, 2009.",
    },
  },
];
