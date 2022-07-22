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

const arrProjects = [
    {
      id: 0,
      header: 'Tonic',
      desktopHeader: 'Tonic',
      subHeader: ['CANOPY', 'Back End Dev', '2015'],
      deskSubHeader: ['CANOPY', 'Back End Dev', '2015'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img: "./images/work1-img.svg",
      desktopImg: "images/work1-desktop-img.svg",
      technologies: ['html', 'css', 'javascript'],
      desktopTech: ['Github', 'Ruby', 'Bootstrap'],
      linkLive: 'See live',
      linkSource: 'See source',
    },
    {
      id: 1,
      header: 'Multi-Post Stories',
      desktopHeader: 'Multi-Post Stories',
      subHeader: ['CANOPY', 'Back End Dev', '2015'],
      deskSubHeader: ['FACEBOOK', 'FULL STACK DEV', '2015'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img: "images/work2-img.svg",
      desktopImg: "./images/work4-img.svg",
      technologies: ['html', 'css', 'javascript'],
      desktopTech: ['Github', 'Ruby', 'Bootstrap'],
      linkLive: 'See live',
      linkSource: 'See source',
    },
    {
      id: 2,
      header: 'Tonic',
      desktopHeader: 'Facebook 360',
      subHeader: ['CANOPY', 'Back End Dev', '2015'],
      deskSubHeader: ['FACEBOOK', 'FULL STACK DEV', '2015'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img: "images/work3-img.svg",
      desktopImg: "./images/work1-img.svg",
      technologies: ['html', 'css', 'javascript'],
      desktopTech: ['Github', 'Ruby', 'Bootstrap'],
      linkLive: 'See live',
      linkSource: 'See source',
    },
    {
      id: 3,
      header: 'Multi-Post Stories',
      desktopHeader: 'Uber Navigation',
      subHeader: ['CANOPY', 'Back End Dev', '2015'],
      deskSubHeader: ['Uber', 'Lead Developer', '2018'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img: "images/work4-img.svg",
      desktopImg: "./images/work2-img.svg",
      technologies: ['html', 'css', 'javascript'],
      desktopTech: ['Github', 'Ruby', 'Bootstrap'],
      linkLive: 'See live',
      linkSource: 'See source',
    },
]


const buttonWork = document.querySelector('.button-work');

function newPopUp(a) {
  
  /*const clonedHeader = arrProjects.workHeader[a].cloneNode(true);*/
/*
        -const clonedHeader = document.createElement('h2');
        clonedHeader.innerHTML = arrProjects[a].header;
        clonedHeader.classList.add('work-header');
        clonedHeader.classList.add('mobile'); 
*/

  /*const clonedHeader2 = popUp.workHeader[b].cloneNode(true);*/
/*
        -const clonedHeader2 = document.createElement('h2')
        clonedHeader2.innerHTML = arrProjects[a].desktopHeader;
        clonedHeader2.classList.add('work-header');
        clonedHeader2.classList.add('desktop');
*/
/*
  const clonedSubheader = popUp.subHeader[c].cloneNode(true);

        -const clonedSubheader = document.createElement('ul');
        clonedSubheader.classList.add('work-subheader');
        const list1m = document.createElement('li');
        const list1d = document.createElement('li');
        const dot1 = document.createElement('li');
        const list2m = document.createElement('li');
        const list2d = document.createElement('li');
        const dot2 = document.createElement('li');
        const list3m = document.createElement('li');
        const list3d = document.createElement('li');
        list1m.innerHTML = arrProjects[a].subHeader[0];
        list1d.innerHTML = arrProjects[a].deskSubHeader[0];
        list2m.innerHTML = arrProjects[a].subHeader[1];
        list2d.innerHTML = arrProjects[a].deskSubHeader[1];
        list3m.innerHTML = arrProjects[a].subHeader[2];
        list3d.innerHTML = arrProjects[a].deskSubHeader[2];
        list1m.classList.add('list1', 'mobile');
        list1d.classList.add('list1', 'desktop');
        dot1.classList.add('dot');
        list2m.classList.add('list2', 'mobile');
        list2d.classList.add('list2', 'desktop');
        dot2.classList.add('dot');
        list3m.classList.add('list2', 'mobile' );
        list3m.classList.add('list2', 'desktop');
        clonedSubheader.appendChild(list1m);
        clonedSubheader.appendChild(list1d);
        clonedSubheader.appendChild(dot1);
        clonedSubheader.appendChild(list2m);
        clonedSubheader.appendChild(list2d);
        clonedSubheader.appendChild(dot2);
        clonedSubheader.appendChild(list3m);
        clonedSubheader.appendChild(list3d);
*/


  /*const clonedImage = popUp.image[d].cloneNode(true);*/
/*
        const clonedImage = document.createElement('img');
        clonedImage.src = arrProjects.img;
        clonedImage.classList.add('mobile', 'workImg',)
*/

 /* const clonedDesktopImage = popUp.image[e].cloneNode(true); */
/*
        const clonedDesktopImage = document.createElement('img');
        clonedDesktopImage.src = arrProjects.desktopImg;
        clonedDesktopImage.classList.add('desktop', 'workImg');
*/
  
  
  /*const clonedTech = popUp.technologies[f].cloneNode(true); */
 /* 
        const clonedTech = document.createElement('ul');
        clonedTech.classList.add('program-list');
        clonedTech.setAttribute("id", "cloned-tech");
        const tech1 = document.createElement('li');
        const tech2 = document.createElement('li');
        const tech3 = document.createElement('li');
        tech1.innerHTML = arrProjects[a].technologies[0];
        tech2.innerHTML = arrProjects[a].technologies[1];
        tech3.innerHTML = arrProjects[a].technologies[2];
  clonedTech.appendChild(tech1);
  clonedTech.appendChild(tech2);
  clonedTech.appendChild(tech3);
*/


/*--------new--------*/

  const clonedHeader = document.createElement('h2');
  const clonedHeader2 = document.createElement('h2')
  const clonedSubheader = document.createElement('ul');
  const list1m = document.createElement('li');
  const list1d = document.createElement('li');
  const dot1 = document.createElement('li');
  const list2m = document.createElement('li');
  const list2d = document.createElement('li');
  const dot2 = document.createElement('li');
  const list3m = document.createElement('li');
  const list3d = document.createElement('li');
  const clonedImage = document.createElement('img');
  const clonedDesktopImage = document.createElement('img');
  const clonedTech = document.createElement('ul');
  const tech1 = document.createElement('li');
  const tech2 = document.createElement('li');
  const tech3 = document.createElement('li');
/*-------------------*/

  
  
  const backPop = document.createElement('div');
  const popCard = document.createElement('div');
  const headerBox = document.createElement('div');
  const Bclose = document.createElement('img');
  const popInfoContainer = document.createElement('div');
  const popBodyContainer = document.createElement('div');
  const description = document.createElement('p');
  const githubTech = document.createElement('li');
  const rubyTech = document.createElement('li');
  const bootTech = document.createElement('li');
  const buttonBox = document.createElement('div');
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
  const liveIcon = document.createElement('img');
  const gitIcon = document.createElement('img');


/*-----------------new-----------------------*/

  clonedHeader.innerHTML = arrProjects[a].header;
  clonedHeader.classList.add('work-header');
  clonedHeader.classList.add('mobile'); 
  clonedHeader2.innerHTML = arrProjects[a].desktopHeader;
  clonedHeader2.classList.add('work-header');
  clonedHeader2.classList.add('desktop');
  clonedSubheader.classList.add('work-subheader');
  list1m.innerHTML = arrProjects[a].subHeader[0];
  list1d.innerHTML = arrProjects[a].deskSubHeader[0];
  list2m.innerHTML = arrProjects[a].subHeader[1];
  list2d.innerHTML = arrProjects[a].deskSubHeader[1];
  list3m.innerHTML = arrProjects[a].subHeader[2];
  list3d.innerHTML = arrProjects[a].deskSubHeader[2];
  list1m.classList.add('list1', 'mobile');
  list1d.classList.add('list1', 'desktop');
  dot1.classList.add('dot');
  list2m.classList.add('list2', 'mobile');
  list2d.classList.add('list2', 'desktop');
  dot2.classList.add('dot');
  list3m.classList.add('list2', 'mobile' );
  list3m.classList.add('list2', 'desktop');
  clonedImage.src = arrProjects[a].img;
  clonedImage.classList.add('mobile', 'workImg',)
  clonedDesktopImage.src = arrProjects[a].desktopImg;
  clonedDesktopImage.classList.add('desktop', 'workImg');
  clonedTech.classList.add('program-list');
  clonedTech.setAttribute("id", "cloned-tech");
  tech1.innerHTML = arrProjects[a].technologies[0];
  tech2.innerHTML = arrProjects[a].technologies[1];
  tech3.innerHTML = arrProjects[a].technologies[2];



/*---------------------------------------*/

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
  description.innerHTML = arrProjects.description;
  description.classList.add('pop-description');
  description.innerHTML = arrProjects.description;
  description.classList.add('pop-description');
  clonedTech.setAttribute('id', 'cloned-tech');
  githubTech.innerHTML = 'Github';
  githubTech.classList.add('desktop');
  rubyTech.innerHTML = 'Ruby';
  rubyTech.classList.add('desktop');
  bootTech.innerHTML = 'Bootstrap';
  bootTech.classList.add('desktop');
  buttonBox.classList.add('pop-button-box');
  liveButton.innerHTML = arrProjects.linkLive;
  sourceButton.innerHTML = arrProjects.linkSource;
  liveButton.classList.add('pop-button');
  sourceButton.classList.add('pop-button');
  liveIcon.src = 'images/live.svg';
  liveIcon.classList.add('pop-button-icon');
  gitIcon.src = 'images/github-blue.svg';
  gitIcon.classList.add('pop-button-icon');

/*--------------------------- appends ---------------*/
  clonedSubheader.appendChild(list1m);
  clonedSubheader.appendChild(list1d);
  clonedSubheader.appendChild(dot1);
  clonedSubheader.appendChild(list2m);
  clonedSubheader.appendChild(list2d);
  clonedSubheader.appendChild(dot2);
  clonedSubheader.appendChild(list3m);
  clonedSubheader.appendChild(list3d);
  clonedTech.appendChild(tech1);
  clonedTech.appendChild(tech2);
  clonedTech.appendChild(tech3);




/*----------------------------------------------*/

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


console.log(clonedImage);
console.log(clonedDesktopImage);
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
