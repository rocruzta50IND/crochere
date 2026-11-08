/* =====================================================================
   CATÁLOGO CROCHERÊ — é aqui que se edita as bolsas.

   Para cada bolsa:
     nome      → nome que aparece no site
     status    → "disponivel"  (pronta entrega)
                 "vendida"     (aparece com selo "Vendida")
     preco     → número, ex.: 189.9   |   null = "Sob consulta"
     descricao → texto curto
     medidas   → (opcional) ex.: "28 x 20 x 9 cm". Aparece na janela da bolsa.
     fotos     → lista de fotos. A primeira é a capa.
                 c("arquivo")  = foto com fundo tratado (recorte)
                 w("arquivo")  = foto na parede branca (fundo já limpo)
                 o("arquivo")  = foto original (só otimizada)

   Para esconder uma bolsa, apague o bloco dela.

   CUIDADO: cada bolsa termina com vírgula (},) e os textos ficam entre aspas.
   Depois de editar, abra o site. Se as bolsas sumiram, faltou uma vírgula ou
   aspas: desfaça a última mudança. O número do WhatsApp (abaixo) é trocado
   automaticamente em todos os botões do site.
   ===================================================================== */

const WHATSAPP = "5543991128608"; // só números, com 55 + DDD
const WHATSAPP_EXIBIR = "(43) 99112-8608";

const c = (n) => `img/cut/${n}.jpg`;
const w = (n) => `img/wall/${n}.jpg`;
const o = (n) => `img/orig/${n}.jpg`;

const PRODUTOS = [
  {
    nome: "Bolsa Amarela Tiracolo",
    status: "disponivel",
    preco: null,
    descricao: "Alça de mão em crochê e alça estampada para usar a tiracolo, com chaveiro de miçangas coloridas. Em algumas fotos aparece também uma bolsinha de crochê: pergunte pelo WhatsApp se acompanha.",
    fotos: [c("Bolsa-amarela-1"), c("Bolsa-amarela-5"), c("Bolsa-amarela-6"), c("Bolsa-amarela-3"), c("Bolsa-amarela-4")],
  },
  {
    nome: "Bolsa Vermelha com Borla",
    status: "disponivel",
    preco: null,
    descricao: "Vermelho vibrante, alça de ombro em crochê e borla de acabamento.",
    fotos: [c("Bolsa-vermelha-1"), c("Bolsa-vermelha-4"), c("Bolsa-vermelha-2")],
  },
  {
    nome: "Bolsa Vermelha com Lingueta",
    status: "disponivel",
    preco: null,
    descricao: "Vermelho intenso, alça de ombro larga em crochê, lingueta de fecho e pingente de contas vermelhas com borla.",
    fotos: [c("Bolsa-vermelha-lingueta-1"), c("Bolsa-vermelha-lingueta-2")],
  },
  {
    nome: "Bolsa Rosa com Flores",
    status: "disponivel",
    preco: null,
    descricao: "Crochê rosa com aplicação de flores vermelhas na borda e alça longa de ombro, com argolas brancas.",
    fotos: [c("Bolsa-rosa-flores-1"), c("Bolsa-rosa-flores-2")],
  },
  {
    nome: "Bolsa Rosa de Mão",
    status: "disponivel",
    preco: null,
    descricao: "Crochê rosa com alça de mão. Modelo simples e delicado.",
    fotos: [c("Bolsa-rosa-mao-1")],
  },
  {
    nome: "Clutch Fúcsia com Borla",
    status: "disponivel",
    preco: null,
    descricao: "Crochê em tom fúcsia, com borla e detalhe dourado.",
    fotos: [w("lote4-02")],
  },
  {
    nome: "Bolsa Colorida Tiracolo",
    status: "disponivel",
    preco: null,
    descricao: "Alça longa de miçangas, corrente colorida e borla de fios. Perfeita para quem ama cor.",
    fotos: [c("Bolsa-colorida-1"), c("Bolsa-colorida-2")],
  },
  {
    nome: "Bolsa de Pérolas",
    status: "disponivel",
    preco: null,
    descricao: "Alça de pérolas e fecho com pérola, em tom off-white. Delicada e elegante.",
    fotos: [c("Bolsa-branca-1"), c("Bolsa-perolas-3"), c("Bolsa-branca-2")],
  },
  {
    nome: "Bolsa Tote Colorida",
    status: "disponivel",
    preco: null,
    descricao: "Modelo estruturado com alças curtas e quatro faces em cores diferentes (verde-oliva, laranja e turquesa, com bordas em bege), pingente de contas e fitas.",
    fotos: [w("lote3-06"), w("lote3-11"), c("WhatsApp-Image-2026-11-08-at-151845"), c("Bolsa")],
  },
  {
    nome: "Bolsa Verde-menta com Alça Acrílica",
    status: "disponivel",
    preco: null,
    descricao: "Faixas em tons de verde-menta e verde-sálvia, bordas em verde-oliva, alça de acrílico âmbar, borla e contas.",
    fotos: [w("lote3-09"), c("Bolsa-linda")],
  },
  {
    nome: "Bolsa Bordô com Corrente Dourada",
    status: "disponivel",
    preco: null,
    descricao: "Crochê em tom bordô escuro, com alça de corrente dourada e dois pinos dourados decorativos.",
    fotos: [w("lote4-07"), c("Rosa")],
  },
  {
    nome: "Bolsa Verde em Três Tons",
    status: "disponivel",
    preco: null,
    descricao: "Faixas em três tons de verde (claro, sálvia e escuro), tampa com detalhe central e alça de mão.",
    fotos: [c("Bolsa-verde")],
  },
  {
    nome: "Bolsa Preta com Argolas",
    status: "disponivel",
    preco: null,
    descricao: "Preta, com alça de cordão e argolas.",
    fotos: [c("Bolsa-preta-2"), o("Bolsa-preta-1")],
  },
  {
    nome: "Bolsa Preta de Ombro com Borla",
    status: "disponivel",
    preco: null,
    descricao: "Preta, com alça de ombro em crochê e borla com nó decorativo.",
    fotos: [w("lote3-14")],
  },
  {
    nome: "Clutch Preta com Corrente",
    status: "disponivel",
    preco: null,
    descricao: "Preta, com fecho de cordinha e esfera preta, alça de corrente prateada.",
    fotos: [w("lote4-06")],
  },
  {
    nome: "Bolsa Preta e Branca com Corrente",
    status: "disponivel",
    preco: null,
    descricao: "Faixas em preto e branco, alça de corrente metálica e cordinha de amarração com esferas metálicas.",
    fotos: [w("lote4-01"), c("Preta-e-branca")],
  },
  {
    nome: "Bolsa Cinza-chumbo com Corrente",
    status: "disponivel",
    preco: null,
    descricao: "Fio acetinado em cinza-chumbo, alça de corrente prateada e fecho com botão preto.",
    fotos: [c("Bolsa-cinza")],
  },
  {
    nome: "Bolsa Azul e Verde-oliva",
    status: "disponivel",
    preco: null,
    descricao: "Fios mesclados em azul-acinzentado e verde-oliva, alça de ombro em crochê e pingente de contas com borla.",
    fotos: [w("lote3-15")],
  },
  {
    nome: "Bolsa Prateada de Ombro",
    status: "disponivel",
    preco: null,
    descricao: "Fio metalizado prateado, alça de ombro em crochê e pingente.",
    fotos: [c("Bolsa-dif-3")],
  },
  {
    nome: "Bolsa Bege de Ombro",
    status: "disponivel",
    preco: null,
    descricao: "Alça única de ombro, com borla e pingente. Neutra e fácil de combinar.",
    fotos: [w("lote4-03"), c("Bolsa-bege-1")],
  },
  {
    nome: "Bolsa Camelo com Pedra",
    status: "disponivel",
    preco: null,
    descricao: "Tampa com pedra âmbar e alça de ombro em crochê, em tom camelo.",
    fotos: [w("lote3-12")],
  },
  {
    nome: "Bolsa Creme com Borla",
    status: "disponivel",
    preco: null,
    descricao: "Creme, com alça de ombro em crochê, borla e pingente.",
    fotos: [c("Bolsa-creme")],
  },
  {
    nome: "Bolsa Branca Alça Alta",
    status: "disponivel",
    preco: null,
    descricao: "Alça alta em crochê, borla e pingente de pérolas.",
    fotos: [w("lote4-05"), c("Bolsa-branca-dif")],
  },
  {
    nome: "Bolsa Creme com Pedra",
    status: "disponivel",
    preco: null,
    descricao: "Tampa com pedra âmbar e alça de mão em crochê, em tom creme-champanhe.",
    fotos: [c("Bolsa-botao")],
  },
  {
    nome: "Bolsa Laranja e Turquesa",
    status: "disponivel",
    preco: null,
    descricao: "Fios misturados em laranja e turquesa, com alça de corrente dourada e borla.",
    fotos: [w("lote4-04"), c("WhatsApp-Image-2026-11-08-at-151847")],
  },
  {
    nome: "Carteira Dourada",
    status: "disponivel",
    preco: null,
    descricao: "Crochê em fio com brilho dourado, em tom caramelo, modelo carteira.",
    fotos: [w("lote3-16"), c("Bolsa-carteira")],
  },
];

/* Peças em produção e vídeos (seção "Do fio à bolsa") */
const BASTIDORES = {
  fotos: [
    { src: o("Bolsa-colorida-em-andamento"), alt: "Bolsa colorida sendo feita em crochê" },
    { src: o("Bolsa-rosa-em-andameneto"), alt: "Bolsa rosa sendo feita em crochê" },
  ],
  videos: [
    "video/processo-1.mp4", "video/processo-2.mp4", "video/processo-3.mp4", "video/processo-4.mp4",
    "video/processo-5.mp4", "video/processo-6.mp4", "video/processo-7.mp4", "video/processo-8.mp4",
  ],
};
