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
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  technologies: '',
  linkLive: 'See live',
  linkSource: 'See source',
};

popUp.workHeader = document.getElementsByClassName('work-header');
popUp.subHeader = document.getElementsByClassName('work-subheader');
popUp.image = document.getElementsByClassName('workImg');
popUp.technologies = document.getElementsByClassName('program-list');

const buttonWork = document.querySelector('.button-work');

buttonWork.addEventListener('click', newPopUp);

function newPopUp(a, b, c, d, e, f) {
  const backPop = document.createElement('div');
  backPop.classList.add('popbackground');
  const popCard = document.createElement('div');
  popCard.classList.add('popup-card');
  const headerBox = document.createElement('div');
  headerBox.classList.add('header-box');
  const clonedHeader = popUp.workHeader[a].cloneNode(true);
  clonedHeader.classList.add('cloned-header');
  const clonedHeader2 = popUp.workHeader[b].cloneNode(true);
  clonedHeader2.classList.add('cloned-header');
  const Bclose = document.createElement('img');
  Bclose.src = 'images/bclose.png';
  Bclose.classList.add('b-close');
  const clonedSubheader = popUp.subHeader[c].cloneNode(true);
  clonedSubheader.classList.add('cloned-subheader');
  const clonedImage = popUp.image[d].cloneNode(true);
  clonedImage.classList.add('cloned-img');
  const clonedDesktopImage = popUp.image[e].cloneNode(true);
  clonedDesktopImage.classList.add('cloned-desk-img');
  const popInfoContainer = document.createElement('div');
  const popBodyContainer = document.createElement('div');
  popBodyContainer.classList.add('pop-body-container');
  popInfoContainer.classList.add('pop-info-container');
  const description = document.createElement('p');
  description.innerHTML = popUp.description;
  description.classList.add('pop-description');
  const clonedTech = popUp.technologies[f].cloneNode(true);
  clonedTech.setAttribute('id', 'cloned-tech');
  const githubTech = document.createElement('li');
  githubTech.innerHTML = 'Github';
  githubTech.classList.add('desktop');
  const rubyTech = document.createElement('li');
  rubyTech.innerHTML = 'Ruby';
  rubyTech.classList.add('desktop');
  const bootTech = document.createElement('li');
  bootTech.innerHTML = 'Bootstrap';
  bootTech.classList.add('desktop');
  const buttonBox = document.createElement('div');
  buttonBox.classList.add('pop-button-box');
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
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
  headerBox.appendChild(clonedHeader2);
  headerBox.appendChild(Bclose);
  popCard.appendChild(clonedSubheader);
  popCard.appendChild(clonedImage);
  popCard.appendChild(clonedDesktopImage);
  popCard.appendChild(popBodyContainer);
  popBodyContainer.appendChild(description);
  popBodyContainer.appendChild(popInfoContainer);
  popInfoContainer.appendChild(clonedTech);
  popInfoContainer.appendChild(buttonBox);
  clonedTech.appendChild(githubTech);
  clonedTech.appendChild(rubyTech);
  clonedTech.appendChild(bootTech);
  buttonBox.appendChild(liveButton);
  buttonBox.appendChild(sourceButton);
  liveButton.appendChild(liveIcon);
  sourceButton.appendChild(gitIcon);

  Bclose.addEventListener('click', closePopUp);

  function closePopUp() {
    backPop.remove();
  }
}
