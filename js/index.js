//#region  Variables
const url = "portfolio.html";
const text = document.querySelector('.my-name');
// this will give me the text
const strText = text.textContent;
const splitText = strText.split("");

let char = 0;
let timer = setInterval(onTick, 50);

text.textContent = "";

//#endregion


//#region  Functions

function textAnim(){ 
  for(let i =0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
}


function onTick(){
  //  get each letter
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

function loadPortfolioPage(){
  window.location.href = url;
}




//#endregion


//#region  Call Functions

textAnim();

document.getElementById('btn').addEventListener('click', loadPortfolioPage);


//#endregion