const main = document.querySelector('.main');
const ancientCards = document.querySelectorAll('.ancient-card');
const stateWindow = document.querySelector('.stateWindow');
const ancientSection = document.querySelector('.ancient-section');
const levelSection = document.querySelector(".level-section");
const deckSection = document.querySelector('.deck-section');
const deckCards = document.querySelector('.deck-cards');
const trackerStages = document.querySelectorAll('.tracker-stage');
const trackerCells = document.querySelectorAll('.tracker-cell');

let cardsArray = [['green1',
  'green2',
  'green3',
  // 'green4',
  // 'green5',
  // 'green6',
  'green7',
  // 'green8',
  // 'green9',
  // 'green10',
  // 'green11',
  // 'green12',
  // 'green13',
  // 'green14',
  // 'green15',
  // 'green16',
  'green17',
  'green18'],
 ['brown1',
  'brown2',
  'brown3',
  'brown4',
  'brown5',
  'brown6',
  'brown7',
  'brown8',
  'brown9',
  'brown10',
  'brown11',
  'brown12',
  'brown13',
  'brown14',
  'brown15',
  'brown16',
  'brown17',
  'brown18',
  'brown19',
  'brown20',
  'brown21'],
  ['blue1',
  'blue2',
  'blue3',
  'blue4',
  'blue5',
  'blue6',
  'blue7',
  'blue8',
  'blue9',
  'blue10',
  'blue11',
  'blue12']];

let selectedCard =''; 
let limit = 0;

const selectedAncient = document.querySelector('.user-ancient');
const selectedLevel = document.querySelector('.user-level');

const shuffleBtn = document.createElement('button');
const dealBtn = document.createElement('button');


const cardClosed = document.querySelector('.card-closed');
const cardOpened = document.querySelector('.card-opened');


let fullDeck = [],
    stageNumber = 0,
    randomCard = 0,
    random = 0,
    color = '',
    addCell = 0;

const azat = document.querySelector('.azath');
const cthul = document.querySelector('.cthulthu');
const iog = document.querySelector('.iog');
const shub = document.querySelector('.shub');

let ancient ='Choose...',
    level = 'Choose...';

    selectedAncient.textContent = `Ancient: ${ancient}`;
selectedLevel.textContent = `Level: ${level}`;

// Картинки с древними становятся кликабельными. Кликнул - щитай выбрал и запустил ;)

  azat.addEventListener('click', (e)=> {
    ancient = 'Azathoth';
    fullDeck = [[1, 2, 1], [2, 3, 1], [2, 4, 0]];
    e.target.classList.toggle('ancient-card-active');
    levelBtns();
    createTracker();
   })

  cthul.addEventListener('click', (e)=> {
    ancient = 'Cthulthu';
    fullDeck = [[0, 2, 2], [1, 3, 0], [3, 4, 0]];
    levelBtns();
    createTracker();
  })

  iog.addEventListener('click', (e)=> {
    ancient = 'Iog Sothoth ';
    fullDeck = [[0, 2, 1], [2, 3, 1], [3, 4, 0]];
    levelBtns();
    createTracker();
  })

  shub.addEventListener('click', (e)=> {
    ancient = 'Shub Niggurath';
    fullDeck = [[1, 2, 1], [3, 2, 1], [2, 4, 0]];
    levelBtns();
    createTracker();
  })


// являем миру меню выбора уровней


function levelBtns() {
  ancientCards.forEach((el)=> el.style.width='200px');
  levelSection.style.display = 'flex';
  const easyBtn = document.createElement("button");
  const mediumBtn = document.createElement("button");
  const highBtn = document.createElement("button");
  const titleLevel = document.createElement("P")

  ancientSection.classList.add('ancient-section-active')
  selectedAncient.textContent = `Ancient: ${ancient}`;

  titleLevel.textContent = 'Choose Your Level:';
  titleLevel.classList.add('titleLevel');
  
  easyBtn.classList.add('level-btn');
  easyBtn.textContent = 'EASY';
  mediumBtn.classList.add('level-btn')
  mediumBtn.textContent = 'MEDIUM';
  highBtn.classList.add('level-btn')
  highBtn.textContent = 'HIGH';

    if(levelSection.children.length<1) {
    levelSection.appendChild(titleLevel);
    levelSection.appendChild(easyBtn);
    levelSection.appendChild(mediumBtn);
    levelSection.appendChild(highBtn);

    const allBtns = document.querySelectorAll('button');
    allBtns.forEach((btn) => {

      btn.addEventListener('click', (e)=> {
        allBtns.forEach((btn) => btn.classList.remove('level-btn-active'));
        switch(e.target.textContent) {
          case 'EASY':
            level = 'Easy';
            break;
          case 'MEDIUM':
            level = 'Medium';
            break;
          case 'HIGH':
            level = 'High';
            break;
        }
        e.target.classList.toggle('level-btn-active');
        selectedLevel.textContent = `Level: ${level}`;
        // deckSection.style.display = 'flex';
        deckSection.classList.add('deck-section-active');

        deck();
      })
    })
  }
}


//кнопка Раздать/Замешать карты

function deck() {
  if(deckSection.querySelector('.shuffle-btn') !== null){
  deckSection.appendChild(shuffleBtn);   
  deckSection.classList.add('deck-section');
  shuffleBtn.textContent = 'Shuffle';
  shuffleBtn.style.opacity ='1';
  // shuffleBtn.addEventListener('click',  createTracker)
  }}


function createTracker() {

  const deckTracker = document.querySelectorAll('.deck-tracker');
  deckTracker.forEach((el)=> {
    el.classList.add('deck-tracker');
    el.style.display = 'flex';
  })

  let cellNumber = 0,
      lineNumber = 0;

  trackerCells.forEach((cell)=> {
    cell.textContent = fullDeck[lineNumber][cellNumber];
    cellNumber++
    if(cellNumber>2) {
      cellNumber=0;
      lineNumber++;
    }
  });

  if(deckSection.querySelector('button') == null) {
  dealBtn.classList.add('deal-btn');
  dealBtn.textContent = 'Deal';
  deckSection.appendChild(dealBtn);}
  deckCards.appendChild(cardClosed);
  deckCards.appendChild(cardOpened);
  dealBtn.addEventListener('click', deal);
  cardClosed.style.background = "url('./assets/mythicCardBackground.png')";
}


function generate(){
  random = Math.floor(Math.random() * (3 - 0)) + 0;
  if(fullDeck[stageNumber][random] === 0) { generate()}
  return random;
}


function randomCardGen() {
  switch(random){
    case 0 : color = 'green';
    break;
    case 1 : color = 'brown';
    break;
    case 2 : color = 'blue';
    break;
  }

  switch(color) {
    case 'green' : limit = cardsArray[0].length;
    break;
    case 'brown' : limit = cardsArray[1].length;
    break;
    case 'blue' : limit = cardsArray[2].length;
    break;
  }

  randomCard = Math.floor(Math.random() * (limit - 1)) + 1;
  selectedCard = cardsArray[random][randomCard];

  if(cardsArray[random][cardsArray[random].indexOf(selectedCard)]) {
    console.log(cardsArray[random].indexOf(selectedCard));
    console.log(selectedCard);
    console.log(cardsArray[random]);
    cardsArray[random].splice(cardsArray[random].indexOf(selectedCard), 1);
    console.log(cardsArray[random]);
  }

  else { console.log(`Такой карты ${selectedCard} нет, крутим рулетку ищо раз`); randomCardGen()};
}


function deal() {

  generate();

  randomCardGen();

  cardOpened.style.background = `url('./assets/MythicCards/${color}/${selectedCard}.png')`;
  cardOpened.style.backgroundSize = 'contain';
  cardOpened.style.borderColor = `${color}`;
  fullDeck[stageNumber][random] = fullDeck[stageNumber][random] - 1;
  trackerCells[random+addCell].textContent = fullDeck[stageNumber][random];


  if(fullDeck[stageNumber].join('') === '000') {
    trackerStages[stageNumber].style.color = 'grey';
    addCell = addCell+3;
    stageNumber++;
    };
  
}