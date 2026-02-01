import {
    Addison,
    Behcet,
    Gardner,
    PeutzJeghers,
    Sjogren,
} from "../../assets/images/syndromes/index";

export const syndromesJson = [
  {
    id: "1",
    typeId: "8",
    nome: "Síndrome de Gardner",
    img: Gardner,
    fonte: "",
    etiologia:
      "Desordem rara, herdada como um traço autossômico dominante, relacionada com braço longo do cromossoma 5.",
    prevalencia:
      "A prevalência é de 1:8.300 a 1:16.000 entre os nascidos vivos.",
    caracteristicas_clinicas:
      "Alterações dentárias como odontomas, dentes impactados, hipodontia e dentes supranumerários. Patologias ósseas também estão incluídos nessas manifestações extracolônicas.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Histopatologicamente, os osteomas são geralmente do tipo compacto.",
    prognostico: "Ruim.",
    tratamento: "Biópsia para análise, se confirmado, remoção cirúrgica.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. Elsevier Brasil, 2011.",
      "2": "RIBEIRO, 2012; RIGO, 2018; FRAGA, 2019; SILVA, 2021.",
    },
  },
  {
    id: "2",
    typeId: "8",
    nome: "Síndrome de Behçet",
    img: Behcet,
    fonte: "",
    etiologia:
      "Desordem imunológica, com origem genética e/ou relacionada a bactérias, vírus, pesticidas e materiais pesados.",
    prevalencia: "A maioria dos pacientes é composta por adultos jovens.",
    caracteristicas_clinicas:
      "As lesões são semelhantes às úlceras aftosas em pacientes. Frequentemente afetam o palato mole e a orofaringe, com bordas elevadas e são cercadas por uma grande área de vermelhidão difusa.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Padrão mais encontrado é o de vasculite leucocito-clástica.",
    prognostico: "Ruim. Com recidivas após 5 a 7 anos.",
    tratamento:
      "As ulcerações orais e genitais tipicamente respondem bem aos corticosteróides. Já as mais graves, pode ser combinada com a colchicina oral ou dapsona.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. Elsevier Brasil, 2011.",
      "2": "RIBEIRO, 2012; RIGO, 2018; NEVES, 2006; CARNEIRO, 2020.",
    },
  },
  {
    id: "3",
    typeId: "8",
    nome: "Síndrome de Peutz-Jeghers",
    img: PeutzJeghers,
    fonte: "",
    etiologia:
      "Geralmente herdada como traço autossômico dominante. Ou é causada por mutações no gene STK11 (LKB1).",
    prevalencia: "Aproximadamente 1 em 100.000 a 200.000 nascimentos.",
    caracteristicas_clinicas:
      "Lesões semelhantes a sardas nas mãos, pele peribucal e mucosa bucal, associadas à polipose intestinal. Variam de marrom a azul-acinzentado, medindo 1-4 mm, principalmente no vermelhão labial, mucosa jugal e língua.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Lesões pigmentadas da cavidade bucal. Melanose fisiológica.",
    prognostico:
      "Variável, dependendo de fatores como o controle dos pólipos intestinais e o gerenciamento das complicações associadas, como o desenvolvimento de câncer.",
    tratamento: "Ressecção tumores e aconselhamento genético.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. Elsevier Brasil, 2011.",
      "2": "RIBEIRO, 2012; RIGO, 2018; TORRES NETO, 2012; SANDY, 2020.",
    },
  },
  {
    id: "4",
    typeId: "8",
    nome: "Doença de Addison",
    img: Addison,
    fonte: "",
    etiologia:
      "Produção insuficiente de hormônios corticosteroides pela suprarrenal, devido à destruição do córtex.",
    prevalencia:
      "Em 80% dos casos, a agressão é autoimune; os 20% restantes estão associados a diversas infecções, como tuberculose e paracoccidioidomicose.",
    caracteristicas_clinicas:
      "Pigmentação macular marrom difusa ou em placas na mucosa oral, devido ao excesso de produção de melanina. Essas características precedem a hiperpigmentação da pele.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Embora não haja características histopatológicas específicas, a análise das glândulas adrenais pode mostrar redução no tamanho, atrofia cortical e infiltrado inflamatório, principalmente linfócitos.",
    prognostico: "Ruim, se não diagnosticada precocemente.",
    tratamento:
      "Reposição de corticosteroides, geralmente em doses fracionadas. A dose fisiológica é de cerca de 5,0 a 7,5 mg de prednisona ou equivalente por dia.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. Elsevier Brasil, 2011.",
      "2": "RIBEIRO, 2012; RIGO, 2018; BRANT FILHO, 2005.",
    },
  },
  {
    id: "5",
    typeId: "8",
    nome: "Síndrome de Sjogren",
    img: Sjogren,
    fonte: "",
    etiologia:
      "Desordem autoimune crônica que afeta as glândulas salivares e lacrimais, causando boca seca e olhos secos.",
    prevalencia: "Mulher 9:1 homens, de idade média.",
    caracteristicas_clinicas:
      "A xerostomia é o principal sintoma oral, variando em intensidade. A língua frequentemente apresenta fissuras e atrofia das papilas.",
    diagnostico_diferencial: "",
    caracteristicas_histopatologicas:
      "Infiltração linfocítica das glândulas salivares, resultando em destruição das unidades acinares.",
    prognostico:
      "Depende da gravidade dos sintomas e da presença de complicações sistêmicas. Em casos leves, o controle dos sintomas com medidas conservadoras geralmente resulta em um bom prognóstico.",
    tratamento:
      "Tratamento, principalmente, de suporte. Salivas artificiais ajudam na xerostomia; balas sem açúcar mantêm a lubrificação oral. Produtos de higiene oral, como Biotène, podem aliviar sintomas. Medicamentos sialogogos, como pilocarpina e cevimelina, podem estimular o fluxo salivar se houver tecido salivar remanescente.",
    referencias: {
      "1": "NEVILLE, Brad. Patologia oral e maxilofacial. Elsevier Brasil, 2011.",
      "2": "RIBEIRO, 2012; RIGO, 2018; LEAL, 2019; LIQUIDATO, 2002.",
    },
  },
];
