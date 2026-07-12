// ============================================================
// Dados centrais do site — edite aqui para atualizar conteudo.
// ============================================================

export const BASE = import.meta.env.BASE_URL // respeita o base do Vite (GitHub Pages)

// Helper para montar caminho de imagem em /public/midia
export const img = (name) => `${BASE}midia/${name}`

export const site = {
  nome: 'Casa Florinda',
  nomePrimeiro: 'Casa',
  nomeSegundo: 'Florinda',
  tagline: 'Seu lugar de refúgio',
  slogan: 'Onde o descanso encontra a natureza',
  anfitria: 'Cida',

  contato: {
    whatsapp: '+55 21 97580-1313',
    whatsappLink:
      'https://wa.me/5521975801313?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Casa%20Florinda.',
    email: 'casaflorinda35@gmail.com',
    instagram: '@pousada_casa_florinda',
    instagramLink: 'https://www.instagram.com/pousada_casa_florinda',
    localizacao: 'Parque Imbuí, Teresópolis – RJ',
    localizacaoLonga:
      'Parque Imbuí, Teresópolis – RJ. Um refúgio cercado pela Mata Atlântica, com ruas arborizadas, ar puro e vistas deslumbrantes das montanhas.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Parque+Imbui+Teresopolis+RJ',
  },

  logo: 'logo.png',
}

// ----------------- Acomodações -----------------
export const acomodacoes = [
  {
    slug: 'chale-das-flores',
    nome: 'Chalé das Flores',
    destaque: true,
    quartos: 1,
    banheiros: 1,
    hospedes: 3,
    resumo:
      'O favorito dos hóspedes. Um charmoso chalé em estilo A-frame, com varanda de tirar o fôlego e vista para as montanhas.',
    descricao:
      'Em meio à tranquilidade da serra, o Chalé das Flores foi pensado para quem deseja uma experiência única de imersão na paisagem. Aconchegante e intimista, reúne o charme da madeira, uma varanda deslumbrante e todo o conforto de um refúgio exclusivo na natureza.',
    capa: 'pousada-01.webp',
    galeria: ['pousada-01.webp', 'pousada-02.webp', 'pousada-03.webp', 'pousada-04.webp'],
  },
  {
    slug: 'casinha-da-bel',
    nome: 'Casinha da Bel',
    destaque: false,
    quartos: 1,
    banheiros: 2,
    hospedes: 2,
    resumo:
      'Espaçosa e elegante, com cama de dossel, lareira de charme e banheiro com hidromassagem e vista para a serra.',
    descricao:
      'Perfeita para casais que buscam requinte e privacidade. A Casinha da Bel encanta com sua suíte espaçosa, cama de dossel, portas para a varanda com vista para as montanhas e um banheiro amplo com hidromassagem.',
    capa: 'pousada-05.webp',
    galeria: ['pousada-05.webp', 'pousada-08.webp'],
  },
  {
    slug: 'sweet-holly',
    nome: 'Sweet Holly',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 3,
    resumo: 'Um glamour! Ambiente romântico e cheio de personalidade para momentos especiais.',
    descricao:
      'A Sweet Holly é pura elegância e romance. Um ambiente acolhedor e cheio de charme, ideal para celebrar ocasiões especiais com todo o conforto e um toque de glamour.',
    capa: 'pousada-10.webp',
    galeria: ['pousada-10.webp', 'pousada-06.webp'],
  },
  {
    slug: 'suite-das-flores',
    nome: 'Suíte das Flores',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 2,
    resumo: 'Suíte aconchegante e cheia de charme, com decoração delicada e clima romântico.',
    descricao:
      'Delicada e acolhedora, a Suíte das Flores é um convite ao descanso. Decoração cuidadosa, conforto e a serenidade da serra para uma estada inesquecível.',
    capa: 'pousada-07.webp',
    galeria: ['pousada-07.webp'],
  },
  {
    slug: 'suite-da-lua',
    nome: 'Suíte da Lua',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 2,
    resumo: 'Intimista e tranquila, perfeita para relaxar sob o céu estrelado da serra.',
    descricao:
      'A Suíte da Lua oferece um refúgio intimista e silencioso, ideal para quem busca paz e contato com a natureza. Conforto e aconchego a poucos minutos do centro de Teresópolis.',
    capa: 'pousada-09.webp',
    galeria: ['pousada-09.webp'],
  },
]

// ----------------- Serviços / Pacotes -----------------
export const servicos = [
  {
    titulo: 'Decoração romântica',
    descricao:
      'Surpreenda quem você ama com uma decoração especial: velas, pétalas e um clima inesquecível para celebrar o amor.',
    imagem: 'pousada-10.webp',
  },
  {
    titulo: 'Cesta de café da manhã',
    descricao:
      'Comece o dia com uma cesta caprichada, servida com a vista deslumbrante das montanhas da serra.',
    imagem: 'pousada-06.webp',
  },
  {
    titulo: 'Tábua de frios + vinho',
    descricao:
      'Uma seleção de frios, queijos e um bom vinho para tornar sua noite ainda mais aconchegante.',
    imagem: 'pousada-09.webp',
  },
]

export const servicosAviso =
  'Todos os serviços devem ser solicitados com antecedência via WhatsApp e estão sujeitos à disponibilidade.'

// ----------------- Depoimentos -----------------
export const depoimentos = [
  {
    nome: 'Eric',
    local: 'Estados Unidos',
    texto:
      'Super aconchegante! Limpo e a dona da pousada Cida deixa todos confortáveis, com um atendimento de quem sabe e trabalha no ramo da hospitalidade há anos! Super recomendo!',
  },
  {
    nome: 'FernandaBL',
    local: 'Brasil',
    texto:
      'Ótimo lugar para descansar! Amei tudo, o local é super tranquilo e gostoso, perfeito para relaxar. Café da manhã delicioso e a Cida é super querida! Só não gostei de ter que ir embora.',
  },
  {
    nome: 'Carolina',
    local: 'Brasil',
    texto:
      'Cara de casa com conforto de pousada! A anfitriã é maravilhosa, super atenciosa. Recebemos um upgrade e fomos muito bem tratados. Bem localizado, não muito longe do centro e super tranquilo.',
  },
  {
    nome: 'Ludwig Peter',
    local: 'Alemanha',
    texto:
      'Wow!! Cida é uma anfitriã excelente, faz tudo para que a sua estada seja um prazer. O chalé é muito confortável, o café da manhã muito gostoso. O lugar é um paraíso tranquilo na natureza de verdade. 10/10 — Tudo foi perfeito!',
  },
  {
    nome: 'Maycon',
    local: 'Brasil',
    texto:
      'Aconchego!! Pousada estilo casa, conforme mostra o anúncio. A proprietária Cida é uma pessoa muito simpática e sempre disposta a ajudar. Recomendamos muito e indicamos!',
  },
  {
    nome: 'Paulo',
    local: 'Brasil',
    texto:
      'O lugar é intimista e a vista é linda. O destaque fica para a anfitriã, incansável e sempre à disposição para nos proporcionar todo o conforto. A Cida foi muito prestativa.',
  },
]

// ----------------- FAQ -----------------
export const faq = [
  {
    pergunta: 'Onde fica a Pousada Casa Florinda?',
    resposta:
      'Estamos no Parque Imbuí, em Teresópolis – RJ, um bairro tranquilo e arborizado cercado pela Mata Atlântica, com vistas deslumbrantes das montanhas e a poucos minutos do centro.',
  },
  {
    pergunta: 'Como faço uma reserva?',
    resposta:
      'As reservas são feitas diretamente pelo nosso WhatsApp. Basta clicar no botão “Reserve Já” e falar com a gente para consultar disponibilidade e valores.',
  },
  {
    pergunta: 'O café da manhã está incluso?',
    resposta:
      'Oferecemos uma deliciosa cesta de café da manhã. Consulte as condições de cada acomodação no momento da reserva.',
  },
  {
    pergunta: 'Qual o horário de check-in e check-out?',
    resposta:
      'O check-in e o check-out seguem os horários combinados no momento da reserva. Fale com a gente pelo WhatsApp para alinhar os detalhes da sua chegada.',
  },
  {
    pergunta: 'Vocês oferecem decoração romântica e pacotes especiais?',
    resposta:
      'Sim! Temos decoração romântica, cesta de café da manhã e tábua de frios com vinho. Todos os serviços devem ser solicitados com antecedência via WhatsApp e estão sujeitos à disponibilidade.',
  },
]
