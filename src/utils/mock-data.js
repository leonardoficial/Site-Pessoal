// #
const MainPost = {
  time: "12 min",
  title: "TCC de curso do Senac motiva jovens a criarem plataforma de impresa.",
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    ac convallis nunc, in faucibus massa. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit.`,
  imgurl: "./images/main-post.jpg",
}

// #
const HomeImageQuote = {
  body: `...E esta nação repetidamente, nas grandes horas do seu destino,
    se desfez do convencional, do pequeno homem de fala e do atraso, e
    decidiu seguir homens e movimentos que dizem: nós vamos para frente,
    para a açãø.`,
  author: "Mosley, Oswald",
  imageurl: "./images/image-quote.jpg"
}

// #
const TinyPosts = [
  {
    title: "Guerra Civil gera discussões entre fãs e entusiastas.",
    imageurl: "./images/tiny-post-1.jpeg"
  },
  {
    title: "Você está de bem com a balança ou com o espelho ?",
    imageurl: "./images/tiny-post-2.jpeg"
  },
  {
    title: "Transportes irregulares dominam zona oeste do Rio de Janeiro.",
    imageurl: "./images/tiny-post-3.jpeg"
  },
  {
    title: "Veja como se preparar para o Enem de 2018 com dias especiais.",
    imageurl: "./images/tiny-post-4.jpeg"
  }
]

// #
const HomeCategories = [
  "política", "tecnologia", "tecnlogia", "esporte", "entretenimento", "mundo",
  "economia", "cultura", "negócios", "eventos", "educação", "religião", "saúde"
]

// #
const HomeBlockList = [
  {
    title: "O manual do empreendedor.",
    link: "#"
  },
  
  {
    title: "Top 10 inspirações de Abril.",
    link: "#"
  },
   {
    title: "Dinheiro ou tempo, é pra escolher ?",
    link: "#"
  }, 
  {
    title: "Quer crescer ? Não malhe, treine!",
    link: "#"
  },
  {
    title: "A bomba atômica brasileira",
    link: "#"
  }
]

// #
const HomeTopList = [
  {
    title: "O mecânismo",
    body: "Série de famoso aplicativo de streaming netflix causa polêmica.",
    link: "#"
  },
  
  {
    title: "você carrega sua cruz ?",
    body: "Você realmente aceita os desafios da vida em cristo ?",
    link: "#"
  },
   {
    title: "Uma verdade incontestável",
    body: "Ou ficar a pátria livre ou morrer pelo Brasil!",
    link: "#"
  }, 
  {
    title: "Não apenas adornos, mas sim espírito",
    body: "Vossos peitos, vossos braços são muralhas do Brasil.",
    link: "#"
  }
]

// #
const PostsHolder = [
  {
    time: "10 min",
    title: "Miocic vs Cormier",
    body: `Muitos falam mal, muitos elogiam, mas o fato é: esse é um dos mais
      aguardados confrontos de 2018 no mundo do MMA. Miocic vs Cormier certamente
      é uma luta de difícil palpite...`,
    imageurl: "./images/post-1.jpeg"
  },
  {
    time: "10 min",
    title: "Defina \"gratidão\"",
    body: `Você é grato pelo que tem ? pelo que lhe fizeram ? pela vida lhe
      concebido ? Bem, ao menos, você realmente sabe o que é "gratidão" ?
      Mesmo sendo uma palavra pouco usada ultimamente...`,
    imageurl: "./images/post-2.jpeg"
  }
]

const Posts = {
  "Guerra Civil gera discussões entre fãs e entusiastas": {
    text: (
      require("./posts/Guerra Civil gera discussões entre fãs e entusiastas.txt")
    )
  }
}



export { 
  MainPost, HomeImageQuote, HomeCategories, TinyPosts, HomeBlockList,
  HomeTopList, PostsHolder, Posts
}





