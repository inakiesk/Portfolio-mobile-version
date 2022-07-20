const closeX = document.getElementById('closeX');
const toolbar = document.getElementById('toolbar');
const hamburger = document.getElementById('hamburger');
const menuBackground = document.getElementById('menuBackground');

[closeX, toolbar, hamburger].forEach((elements) => {
  elements.addEventListener('click', () => {
    closeX.classList.toggle('hide');
    toolbar.classList.toggle('hide');
    hamburger.classList.toggle('hide');
    menuBackground.classList.toggle('hide');
  });
});

let popUp = {
  workHeader: '',
  subHeader: '',
  image: '',
  description: '',
  technologies: '',
  linkLive: '',
  linkSource: ''
}

popUp.workHeader = document.getElementsByClassName('work-header');
popUp.subHeader = document.getElementsByClassName('work-subheader');
popUp.image = document.getElementsByClassName('workImg');
popUp.technologies = document.getElementsByClassName('program-list')


const buttonWork1 = document.querySelector('.button-work1');

buttonWork1.addEventListener('click', newPopUp);

function newPopUp(){
  const backPop = document.createElement("div");
  const popCard = document.createElement("div");
  backPop.appendChild(popCard);
  popCard.appendChild(popUp.workHeader[0]);
  backPop.classList.add('popbackground');
  popCard.classList.add('popup-card');
  document.body.appendChild(backPop);
}

console.log(popUp.workHeader);
console.log(popUp.subHeader);
console.log(popUp.image);
console.log(popUp.technologies);