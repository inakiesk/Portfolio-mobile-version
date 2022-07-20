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
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  technologies: '',
  linkLive: 'See live',
  linkSource: 'See source'
}

popUp.workHeader = document.getElementsByClassName('work-header');
popUp.subHeader = document.getElementsByClassName('work-subheader');
popUp.image = document.getElementsByClassName('workImg');
popUp.technologies = document.getElementsByClassName('program-list')


const buttonWork1 = document.querySelector('.button-work1');

buttonWork1.addEventListener('click', newPopUp);

function newPopUp(){
  const backPop = document.createElement("div");
  backPop.classList.add('popbackground');
  const popCard = document.createElement("div");
  popCard.classList.add('popup-card');
  const headerBox = document.createElement("div");
  headerBox.classList.add('header-box');
  const clonedHeader = popUp.workHeader[0].cloneNode(true);
  clonedHeader.classList.add('cloned-header');
  const Bclose = document.createElement('img');
  Bclose.src = 'images/bclose.png';
  Bclose.classList.add('b-close');
  const clonedSubheader = popUp.subHeader[0].cloneNode(true);
  clonedSubheader.classList.add('cloned-subheader');
  const clonedImage = popUp.image[0].cloneNode(true);
  const description = document.createElement('p')
  description.innerHTML = popUp.description
  description.classList.add('pop-description')
  const clonedTech = popUp.technologies[0].cloneNode(true);
  clonedTech.setAttribute('id', 'cloned-tech');
  const buttonBox = document.createElement("div");
  buttonBox.classList.add("pop-button-box");
  const liveButton = document.createElement("button");
  const sourceButton = document.createElement("button");
  liveButton.innerHTML = popUp.linkLive;
  sourceButton.innerHTML = popUp.linkSource;
  liveButton.classList.add('pop-button');
  sourceButton.classList.add('pop-button');
  const liveIcon = document.createElement('img');
  liveIcon.src = 'images/live.svg';
  liveIcon.classList.add('pop-button-icon');
  const gitIcon = document.createElement('img');
  gitIcon.src = 'images/github-blue.svg';
  gitIcon.classList.add('pop-button-icon');
  document.body.appendChild(backPop);
  backPop.appendChild(popCard);
  popCard.appendChild(headerBox);
  headerBox.appendChild(clonedHeader);
  headerBox.appendChild(Bclose);
  popCard.appendChild(clonedSubheader);
  popCard.appendChild(clonedImage);
  popCard.appendChild(description);
  popCard.appendChild(clonedTech);
  popCard.appendChild(buttonBox);
  buttonBox.appendChild(liveButton);
  buttonBox.appendChild(sourceButton);
  liveButton.appendChild(liveIcon);
  sourceButton.appendChild(gitIcon);

  Bclose.addEventListener('click', closePopUp);

  function closePopUp(){
    backPop.remove();
  }
}


console.log(popUp.workHeader);
console.log(popUp.subHeader);
console.log(popUp.image);
console.log(popUp.technologies);