

function scrollTextAppear(){
  var introText = document.querySelector('.intro-text');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPos = window.innerHeight;

  if(introPosition < screenPos){
    introText.classList.add('intro-appear');
  }
}

window.addEventListener('scroll', scrollTextAppear);