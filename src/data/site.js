// ============================================================
// Dados centrais do site — edite aqui para atualizar conteudo.
// ============================================================

export const BASE = import.meta.env.BASE_URL // respeita o base do Vite (GitHub Pages)

// Helper para montar caminho de imagem em /public/midia
export const img = (name) => `${BASE}midia/${name}`

// Remove a extensao do nome do arquivo (para o componente <Img/>)
export const baseName = (file) => file.replace(/\.\w+$/, '')

// Monta um link de WhatsApp com mensagem pre-preenchida
const WHATS_NUM = '5521975801313'
export const waLink = (mensagem) =>
  `https://wa.me/${WHATS_NUM}?text=${encodeURIComponent(mensagem)}`

// Link de reserva com o nome da acomodacao ja no texto
export const waReserva = (nomeAcomodacao) =>
  waLink(
    nomeAcomodacao
      ? `Olá! Gostaria de reservar a acomodação "${nomeAcomodacao}" na Pousada Casa Florinda. Pode me passar disponibilidade e valores?`
      : 'Olá! Gostaria de fazer uma reserva na Pousada Casa Florinda.',
  )

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
    endereco: 'Estrada dos Pinheiros, 336',
    bairro: 'Parque Imbuí',
    cidade: 'Teresópolis',
    estado: 'RJ',
    cep: '',
    localizacao: 'Parque Imbuí, Teresópolis – RJ',
    localizacaoLonga:
      'Estrada dos Pinheiros, 336 — Parque Imbuí, Teresópolis – RJ. Um refúgio cercado pela Mata Atlântica, com ruas arborizadas, ar puro e vistas deslumbrantes das montanhas.',
    mapsQuery: 'Estrada dos Pinheiros, 336, Parque Imbuí, Teresópolis - RJ',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Estrada+dos+Pinheiros+336+Parque+Imbui+Teresopolis+RJ',
  },

  // Horarios (dados reais)
  horarios: {
    checkin: '15:00 – 20:00',
    checkout: '09:00 – 12:00',
  },

  // Regras da casa (dados reais)
  regras: [
    'Aceita bebês (abaixo de 2 anos)',
    'Aceita animais de estimação',
    'Não é permitido fumar nos quartos',
    'Não são permitidos eventos',
    'Café da manhã incluído',
  ],

  logo: 'logo.png',
}

// Avaliações (Airbnb/Booking/Google). Deixe vazio até ter links/notas reais;
// enquanto vazio, o selo não é exibido e nenhuma nota entra no SEO.
export const avaliacoes = []

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
    resumo_en:
      'The guest favorite. A charming A-frame chalet with a breathtaking balcony and mountain views.',
    descricao:
      'Em meio à tranquilidade da serra, o Chalé das Flores foi pensado para quem deseja uma experiência única de imersão na paisagem. Aconchegante e intimista, reúne o charme da madeira, uma varanda deslumbrante e todo o conforto de um refúgio exclusivo na natureza.',
    descricao_en:
      'Amid the tranquility of the mountains, Chalé das Flores was designed for those seeking a unique experience of immersion in the landscape. Cozy and intimate, it combines the charm of wood, a stunning balcony and all the comfort of an exclusive retreat in nature.',
    capa: 'pousada-01.webp',
    galeria: ['pousada-01.webp', 'pousada-02.webp', 'pousada-03.webp', 'pousada-04.webp'],
    comodidades: ['Wi-Fi', 'Varanda com vista', 'TV', 'Água quente', 'Estacionamento grátis', 'Café da manhã'],
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
    resumo_en:
      'Spacious and elegant, with a canopy bed, charming decor and a bathroom with a hot tub and mountain views.',
    descricao:
      'Perfeita para casais que buscam requinte e privacidade. A Casinha da Bel encanta com sua suíte espaçosa, cama de dossel, portas para a varanda com vista para as montanhas e um banheiro amplo com hidromassagem.',
    descricao_en:
      'Perfect for couples seeking refinement and privacy. Casinha da Bel charms with its spacious suite, canopy bed, doors to a balcony with mountain views and a large bathroom with a hot tub.',
    capa: 'pousada-05.webp',
    galeria: ['pousada-05.webp', 'pousada-08.webp'],
    comodidades: ['Wi-Fi', 'Hidromassagem', 'Varanda com vista', 'TV HD', 'Água quente', 'Estacionamento grátis', 'Café da manhã'],
  },
  {
    slug: 'sweet-holly',
    nome: 'Sweet Holly',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 3,
    resumo: 'Um glamour! Ambiente romântico e cheio de personalidade para momentos especiais.',
    resumo_en: 'Pure glamour! A romantic room full of personality for special moments.',
    descricao:
      'A Sweet Holly é pura elegância e romance. Um ambiente acolhedor e cheio de charme, ideal para celebrar ocasiões especiais com todo o conforto e um toque de glamour.',
    descricao_en:
      'Sweet Holly is pure elegance and romance. A cozy, charming space, ideal for celebrating special occasions with full comfort and a touch of glamour.',
    capa: 'pousada-10.webp',
    galeria: ['pousada-10.webp', 'pousada-06.webp'],
    comodidades: ['Wi-Fi', 'TV', 'Água quente', 'Roupa de cama', 'Estacionamento grátis', 'Café da manhã'],
  },
  {
    slug: 'suite-das-flores',
    nome: 'Suíte das Flores',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 2,
    resumo: 'Suíte aconchegante e cheia de charme, com decoração delicada e clima romântico.',
    resumo_en: 'A cozy, charming suite with delicate decor and a romantic atmosphere.',
    descricao:
      'Delicada e acolhedora, a Suíte das Flores é um convite ao descanso. Decoração cuidadosa, conforto e a serenidade da serra para uma estada inesquecível.',
    descricao_en:
      'Delicate and welcoming, Suíte das Flores is an invitation to rest. Careful decor, comfort and the serenity of the mountains for an unforgettable stay.',
    capa: 'pousada-07.webp',
    galeria: ['pousada-07.webp'],
    comodidades: ['Wi-Fi', 'TV', 'Água quente', 'Roupa de cama', 'Estacionamento grátis', 'Café da manhã'],
  },
  {
    slug: 'suite-da-lua',
    nome: 'Suíte da Lua',
    destaque: false,
    quartos: 1,
    banheiros: 1,
    hospedes: 2,
    resumo:
      'Suíte espaçosa com varanda, hidromassagem dupla e uma vista linda para as montanhas.',
    resumo_en:
      'A spacious suite with a balcony, double hot tub and a beautiful mountain view.',
    descricao:
      'Suíte extremamente confortável e espaçosa, com varanda, hidromassagem dupla e uma vista linda para as montanhas. Venha desfrutar de muita paz, natureza e diversão! Estamos a 15 minutos do centro de Teresópolis de carro, com ônibus de meia em meia hora e Uber/99 por cerca de R$ 15.',
    descricao_en:
      'An extremely comfortable and spacious suite, with a balcony, double hot tub and a beautiful mountain view. Come enjoy plenty of peace, nature and fun! We are 15 minutes by car from downtown Teresópolis, with buses every half hour and Uber/99 for about R$ 15.',
    capa: 'pousada-09.webp',
    galeria: ['pousada-09.webp'],
    comodidades: ['Wi-Fi', 'Hidromassagem dupla', 'Varanda com vista', 'TV HD', 'Água quente', 'Mini-frigobar', 'Estacionamento grátis', 'Café da manhã'],
  },
]

// ----------------- Serviços / Pacotes -----------------
export const servicos = [
  {
    titulo: 'Decoração romântica',
    titulo_en: 'Romantic decoration',
    descricao:
      'Surpreenda quem você ama com uma decoração especial: velas, pétalas e um clima inesquecível para celebrar o amor.',
    descricao_en:
      'Surprise the one you love with special decoration: candles, petals and an unforgettable mood to celebrate love.',
    imagem: 'pousada-10.webp',
  },
  {
    titulo: 'Cesta de café da manhã',
    titulo_en: 'Breakfast basket',
    descricao:
      'Comece o dia com uma cesta caprichada, servida com a vista deslumbrante das montanhas da serra.',
    descricao_en:
      'Start the day with a lovingly prepared basket, served with the stunning mountain views.',
    imagem: 'pousada-06.webp',
  },
  {
    titulo: 'Tábua de frios + vinho',
    titulo_en: 'Charcuterie board + wine',
    descricao:
      'Uma seleção de frios, queijos e um bom vinho para tornar sua noite ainda mais aconchegante.',
    descricao_en:
      'A selection of cold cuts, cheeses and a good wine to make your evening even cozier.',
    imagem: 'pousada-09.webp',
  },
]

export const servicosAviso =
  'Todos os serviços devem ser solicitados com antecedência via WhatsApp e estão sujeitos à disponibilidade.'
export const servicosAviso_en =
  'All services must be requested in advance via WhatsApp and are subject to availability.'

// ----------------- Galeria (categorizada) -----------------
// categorias: 'acomodacoes' | 'cafe' | 'natureza' | 'romantico'
export const galeriaCategorias = [
  { id: 'todas', label: 'Todas', label_en: 'All' },
  { id: 'acomodacoes', label: 'Acomodações', label_en: 'Accommodations' },
  { id: 'cafe', label: 'Café da manhã', label_en: 'Breakfast' },
  { id: 'natureza', label: 'Natureza', label_en: 'Nature' },
  { id: 'romantico', label: 'Momentos românticos', label_en: 'Romantic moments' },
]

export const galeria = [
  { file: 'pousada-01.webp', categoria: 'acomodacoes' },
  { file: 'pousada-05.webp', categoria: 'acomodacoes' },
  { file: 'pousada-07.webp', categoria: 'acomodacoes' },
  { file: 'pousada-08.webp', categoria: 'acomodacoes' },
  { file: 'pousada-02.webp', categoria: 'natureza' },
  { file: 'pousada-03.webp', categoria: 'natureza' },
  { file: 'pousada-04.webp', categoria: 'natureza' },
  { file: 'pousada-06.webp', categoria: 'cafe' },
  { file: 'pousada-10.webp', categoria: 'romantico' },
  { file: 'pousada-09.webp', categoria: 'romantico' },
]

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
    pergunta_en: 'Where is Pousada Casa Florinda located?',
    resposta:
      'Estamos no Parque Imbuí, em Teresópolis – RJ, um bairro tranquilo e arborizado cercado pela Mata Atlântica, com vistas deslumbrantes das montanhas e a poucos minutos do centro.',
    resposta_en:
      'We are in Parque Imbuí, Teresópolis – RJ, a quiet, tree-lined neighborhood surrounded by the Atlantic Forest, with stunning mountain views and just minutes from downtown.',
  },
  {
    pergunta: 'Como faço uma reserva?',
    pergunta_en: 'How do I make a reservation?',
    resposta:
      'As reservas são feitas diretamente pelo nosso WhatsApp. Basta clicar no botão “Reserve Já” e falar com a gente para consultar disponibilidade e valores.',
    resposta_en:
      'Reservations are made directly through our WhatsApp. Just click the “Book Now” button and talk to us to check availability and rates.',
  },
  {
    pergunta: 'O café da manhã está incluso?',
    pergunta_en: 'Is breakfast included?',
    resposta:
      'Oferecemos uma deliciosa cesta de café da manhã. Consulte as condições de cada acomodação no momento da reserva.',
    resposta_en:
      'We offer a delicious breakfast basket. Check the conditions of each accommodation when booking.',
  },
  {
    pergunta: 'Qual o horário de check-in e check-out?',
    pergunta_en: 'What are the check-in and check-out times?',
    resposta:
      'O check-in é das 15:00 às 20:00 e o check-out das 09:00 às 12:00. Precisando de outro horário, fale com a gente pelo WhatsApp para combinarmos.',
    resposta_en:
      'Check-in is from 3:00 PM to 8:00 PM and check-out from 9:00 AM to 12:00 PM. If you need a different time, message us on WhatsApp to arrange it.',
  },
  {
    pergunta: 'Vocês oferecem decoração romântica e pacotes especiais?',
    pergunta_en: 'Do you offer romantic decoration and special packages?',
    resposta:
      'Sim! Temos decoração romântica, cesta de café da manhã e tábua de frios com vinho. Todos os serviços devem ser solicitados com antecedência via WhatsApp e estão sujeitos à disponibilidade.',
    resposta_en:
      'Yes! We offer romantic decoration, a breakfast basket and a charcuterie board with wine. All services must be requested in advance via WhatsApp and are subject to availability.',
  },
]
