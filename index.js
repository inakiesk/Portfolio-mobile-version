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

const popUp = {
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

function newPopUp(a, b, c, d, e, f) {
  const backPop = document.createElement('div');
  const popCard = document.createElement('div');
  const headerBox = document.createElement('div');
  const clonedHeader = popUp.workHeader[a].cloneNode(true);
  const clonedHeader2 = popUp.workHeader[b].cloneNode(true);
  const Bclose = document.createElement('img');
  const clonedSubheader = popUp.subHeader[c].cloneNode(true);
  const clonedImage = popUp.image[d].cloneNode(true);
  const clonedDesktopImage = popUp.image[e].cloneNode(true);
  const popInfoContainer = document.createElement('div');
  const popBodyContainer = document.createElement('div');
  const description = document.createElement('p');
  const clonedTech = popUp.technologies[f].cloneNode(true);
  const githubTech = document.createElement('li');
  const rubyTech = document.createElement('li');
  const bootTech = document.createElement('li');
  const buttonBox = document.createElement('div');
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
  const liveIcon = document.createElement('img');
  const gitIcon = document.createElement('img');

  backPop.classList.add('popbackground');
  popCard.classList.add('popup-card');
  headerBox.classList.add('header-box');
  clonedHeader.classList.add('cloned-header');
  clonedHeader2.classList.add('cloned-header');
  Bclose.src = 'images/bclose.png';
  Bclose.width = '24';
  Bclose.height = '24';
  Bclose.classList.add('b-close');
  clonedSubheader.classList.add('cloned-subheader');
  clonedImage.classList.add('cloned-img');
  clonedDesktopImage.classList.add('cloned-desk-img');
  clonedDesktopImage.classList.add('cloned-desk-img');
  popBodyContainer.classList.add('pop-body-container');
  popInfoContainer.classList.add('pop-info-container');
  description.innerHTML = popUp.description;
  description.classList.add('pop-description');
  description.innerHTML = popUp.description;
  description.classList.add('pop-description');
  clonedTech.setAttribute('id', 'cloned-tech');
  githubTech.innerHTML = 'Github';
  githubTech.classList.add('desktop');
  rubyTech.innerHTML = 'Ruby';
  rubyTech.classList.add('desktop');
  bootTech.innerHTML = 'Bootstrap';
  bootTech.classList.add('desktop');
  buttonBox.classList.add('pop-button-box');
  liveButton.innerHTML = popUp.linkLive;
  sourceButton.innerHTML = popUp.linkSource;
  liveButton.classList.add('pop-button');
  sourceButton.classList.add('pop-button');
  liveIcon.src = 'images/live.svg';
  liveIcon.classList.add('pop-button-icon');
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

  function closePopUp() {
    backPop.remove();
  }
  Bclose.addEventListener('click', closePopUp);
}

buttonWork.addEventListener('click', newPopUp);

/* Form------------------- validation -------------------*/

const email = document.getElementById('email');
const form = document.getElementById('form');
const formError = document.getElementById('form-error');

form.addEventListener('submit', (e) => {
  const message = [
    'Error: Do not use upper cased letters for the email information',
  ];

  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    formError.innerText = message;
  }
});

/* -------------------- Local Storage ----------------------*/

const fullName = document.getElementById('name');
const textArea = document.getElementById('textarea');

const userInfo = {
  userName: '',
  userEmail: '',
  userText: '',
};

function storeInfo() {
  userInfo.userName = fullName.value;
  userInfo.userEmail = email.value;
  userInfo.userText = textArea.value;
  localStorage.setItem('user', JSON.stringify(userInfo));
}

function getInfo() {
  const obtainedInfo = JSON.parse(localStorage.getItem('user'));
  fullName.value = obtainedInfo.userName;
  email.value = obtainedInfo.userEmail;
  textArea.value = obtainedInfo.userText;
}

function localCheck() {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }
}

localCheck();
getInfo();

fullName.addEventListener('input', () => {
  storeInfo();
});

email.addEventListener('input', () => {
  storeInfo();
});

textArea.addEventListener('input', () => {
  storeInfo();
});
