
const portfolioArray = [

  {
    image: 'img/TECHDRAW2_P1_LUKASTOMASEKv1.png',
    name: 'Application Poster',
    description: `2D isometric game level created in Illustrator`,
    title:'2D Game environment'
  },
  {
    image : `img/TECHDRAW_P2_LUKASTOMASEK_V1_AD.jpg`,
    name: `Application Poster 2`,
    description: `Virtual Reality poster created in Photoshop`,
    title:`Poster Concept`
  },
  {
    image: `img/Pizza Concept.png`,
    name: `2D pizza concept`,
    description: 'Pizza brand concept created in Illustrator',
    title: '2D pizza'

  },
  {
    image:`img/3Dpizza.jpeg`,
    name: `3D Pizza Model`,
    description: `3D pizza model created in Maya`,
    title: `3D pizza`
  },
  {
    image: `img/ar-app-interfacepng.png`,
    name: `Augmented Reality Application Interface`,
    description: `UI interface for augmented reality application`,
    title: `Augmented Reality Application Interface`
  },
  {
    image: `img/board game.png`,
    name: 'Board game 3D concept',
    description : `Concept for board game created in Maya`,
    title: '3D board game'
  },
  {
    image: `img/raygun_2.png`,
    name: `Ray gun 3D model`,
    description: '3D model of ray gun created in Blender',
    title: `3D raygun`

  }

]

const portfolioTxt = document.querySelector('.header');
const strText =  portfolioTxt.textContent;
const splitText = strText.split("");

let char = 0;
let timer = setInterval(onTick,50);

portfolioTxt.textContent = "";


function textAnim(){
 for(let i = 0; i < splitText.length; i++){
   portfolioTxt.innerHTML += "<span>" + splitText[i] + "</span>";
 }
}

function onTick(){
  const span =  portfolioTxt.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if(char === splitText.length){
    completeTick();
    return;
  }
}

function completeTick(){
  clearInterval(timer);
  timer = null;
}

function addHtmlContent(portfolio){
   return ` <div class = "content">
   <h1 class = "title">${portfolio.title}</h1>
  <div class="img-holder"> 
  <img class="img" src="${portfolio.image}"alt="portfolio-images"></div>
   <article class ="description">${portfolio.description}</article>
 </div>`;
}

function displayPortfolio(portfolio){
  const arrayOfPort = portfolio.map(addHtmlContent);
  const stringHtml = arrayOfPort.join('\n');
  document.getElementById('portfolio-holder').innerHTML = stringHtml;
}

textAnim();
displayPortfolio(portfolioArray);





