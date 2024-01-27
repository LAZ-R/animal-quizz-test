import { setStorage } from "./storage/storage.js";
import { setDocumentHeight, setHTMLTitle, getRandomIntegerBetween, shuffleArray } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";
import { getRandomAnimalByQuizzDifficulty, getAnimalsByQuizzDifficulty, getPropositionsFromAnimalAnswer, getAllAnimals } from './animals.service.js'

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */
const zoom9 =  '500%';
const zoom8 =  '450%';
const zoom7 =  '400%';
const zoom6 =  '350%';
const zoom5 =  '300%';
const zoom4 =  '250%';
const zoom3 =  '200%';
const zoom2 =  '150%';
const zoom1 =  '100%';

/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

const isGoodAnswer = (animalId) => {
  if (currentQuestionAnswer.id == animalId) {
    return true;
  }
  return false;
}

// INTERACTIONS UTILISATEUR -------------------------------
const enhance = () => {
  switch (currentPoints) {
    case 10:
      renderImage(zoom9, 'blurred-9');
      reducePoints();
      break;
    case 9:
      renderImage(zoom8, 'blurred-8');
      reducePoints();
      break;
    case 8:
      renderImage(zoom7, 'blurred-7');
      reducePoints();
      break;
    case 7:
      renderImage(zoom6, 'blurred-6');
      reducePoints();
      break;
    case 6:
      renderImage(zoom5, 'blurred-5');
      reducePoints();
      break;
    case 5:
      renderImage(zoom4, 'blurred-4');
      reducePoints();
      break;
    case 4:
      renderImage(zoom3, 'blurred-3');
      reducePoints();
      break;
    case 3:
      renderImage(zoom2, 'blurred-2');
      reducePoints();
      break;
    case 2:
      renderImage(zoom1, 'blurred-1');
      reducePoints();
      document.getElementById('enhanceButton').setAttribute('disabled', true);
      break;
    case 1:
      break;
    default:
      break;
  }
}
window.enhance = enhance;

const onButtonClick = (animalId) => {
  if (!hasAnswered) {
    hasAnswered = true;
    const button = document.getElementById(`button${animalId}`);
    button.classList.add('selected');
    setTimeout(() => {
      if (isGoodAnswer(animalId)) {
        button.classList.replace('selected', 'good');
      } else {
        button.classList.replace('selected', 'bad');
        document.getElementById(`button${currentQuestionAnswer.id}`).classList.add('good');
      }
      // TODO faire la popup
      setTimeout(() => { // TODO à virer pour remplacer par bouton
        window.location = window.location;
      }, 1500);
    }, 1000);
  }
}
window.onButtonClick = onButtonClick;

// GÉNÉRATION DOM -----------------------------------------

const setImage = (animal) => {
  let imgUrl = animal.images[getRandomIntegerBetween(0, animal.images.length - 1)];
  const image = document.getElementById('image');
  image.style.backgroundImage = `url('${imgUrl}')`;
}

const setPropositions = (answer, propositions, quizzDifficulty) => {
  propositions.push(answer);
  shuffleArray(propositions);

  const ANSWERS_CONTAINER = document.getElementById('answersContainer');

  switch (quizzDifficulty) {
    case 'facile':
      ANSWERS_CONTAINER.innerHTML = `
        <div class="answers-line">
          <button id="button${propositions[0].id}" onclick="onButtonClick(${propositions[0].id})"><span class="large">${propositions[0].vernacularName}</span></button>
          <button id="button${propositions[1].id}" onclick="onButtonClick(${propositions[1].id})"><span class="large">${propositions[1].vernacularName}</span></button>
        </div>
        <div class="answers-line">
          <button id="button${propositions[2].id}" onclick="onButtonClick(${propositions[2].id})"><span class="large">${propositions[2].vernacularName}</span></button>
          <button id="button${propositions[3].id}" onclick="onButtonClick(${propositions[3].id})"><span class="large">${propositions[3].vernacularName}</span></button>
        </div>
      `;
      break;
    case 'moyen':
      ANSWERS_CONTAINER.innerHTML = `
        <div class="answers-line">
          <button id="button${propositions[0].id}" onclick="onButtonClick(${propositions[0].id})"><span class="large">${propositions[0].vernacularName}</span><span class="small"><i>${propositions[0].scientificName}</i></span></button>
          <button id="button${propositions[1].id}" onclick="onButtonClick(${propositions[1].id})"><span class="large">${propositions[1].vernacularName}</span><span class="small"><i>${propositions[1].scientificName}</i></span></button>
        </div>
        <div class="answers-line">
          <button id="button${propositions[2].id}" onclick="onButtonClick(${propositions[2].id})"><span class="large">${propositions[2].vernacularName}</span><span class="small"><i>${propositions[2].scientificName}</i></span></button>
          <button id="button${propositions[3].id}" onclick="onButtonClick(${propositions[3].id})"><span class="large">${propositions[3].vernacularName}</span><span class="small"><i>${propositions[3].scientificName}</i></span></button>
        </div>
      `;
      break;
    case 'difficile':
      ANSWERS_CONTAINER.innerHTML = `
        <div class="answers-line">
          <button id="button${propositions[0].id}" onclick="onButtonClick(${propositions[0].id})"><span class="large"><i>${propositions[0].scientificName}</i></span><span class="small">${propositions[0].vernacularName}</span></button>
          <button id="button${propositions[1].id}" onclick="onButtonClick(${propositions[1].id})"><span class="large"><i>${propositions[1].scientificName}</i></span><span class="small">${propositions[1].vernacularName}</span></button>
        </div>
        <div class="answers-line">
          <button id="button${propositions[2].id}" onclick="onButtonClick(${propositions[2].id})"><span class="large"><i>${propositions[2].scientificName}</i></span><span class="small">${propositions[2].vernacularName}</span></button>
          <button id="button${propositions[3].id}" onclick="onButtonClick(${propositions[3].id})"><span class="large"><i>${propositions[3].scientificName}</i></span><span class="small">${propositions[3].vernacularName}</span></button>
        </div>
      `;
      break;
    case 'zoologiste':
      ANSWERS_CONTAINER.innerHTML = `
        <div class="answers-line">
          <button id="button${propositions[0].id}" onclick="onButtonClick(${propositions[0].id})"><span class="large"><i>${propositions[0].scientificName}</i></span></button>
          <button id="button${propositions[1].id}" onclick="onButtonClick(${propositions[1].id})"><span class="large"><i>${propositions[1].scientificName}</i></span></button>
        </div>
        <div class="answers-line">
          <button id="button${propositions[2].id}" onclick="onButtonClick(${propositions[2].id})"><span class="large"><i>${propositions[2].scientificName}</i></span></button>
          <button id="button${propositions[3].id}" onclick="onButtonClick(${propositions[3].id})"><span class="large"><i>${propositions[3].scientificName}</i></span></button>
        </div>
      `;
      break;
    default:
      break;
  }
}

const reducePoints = () => {
  if (currentPoints != 1) {
    currentPoints -= 1;
    document.getElementById('currentPoints').innerHTML = `${currentPoints}`;
    document.getElementById('pointsBar').classList.replace(`w${(currentPoints + 1) * 10}`, `w${currentPoints * 10}`);
  }
}

const renderImage = (zoomLevel, blurClass) => {
  const image = document.getElementById('image');
  const blur = document.getElementById('blur');
  image.style.transform = `scale(${zoomLevel})`;
  blur.classList = [];
  blur.classList.add('blur');
  blur.classList.add(blurClass);
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------
//setStorage();
setDocumentHeight();
setHTMLTitle(APP_NAME);

let currentPoints = 10;
let currentQuestionAnswer;
let hasAnswered = false;

const main = document.getElementById('main');
main.innerHTML = `
  <div class="title-area">
    <h1>Question X / X</h1>
  </div>

  <div class="question-area">
    <div class="question-title-container">
      <h2>Quel est cet animal ?</h2>
    </div>
    <div class="image-container">
      <div id="image" class="image"></div>
      <div id="blur" class="blur blurred-10"></div>
    </div>
    <div class="enhance-container">
      <span>
        À chaque amélioration de l'image, le nombre de points potentiels attribués à cette réponse diminuera de 1.
      </span>
      <button id="enhanceButton" onclick="enhance()">Améliorer</button>
      <div class="points-container"><div id="pointsBar" class="points-bar w100"></div><span class="points-text-container"><span id="currentPoints">10</span> pts</span></div>
    </div>
  </div>

  <div id="answersContainer" class="answers-container">
    <div class="answers-line">
      <button onclick="onButtonClick()">Réponse 1</button>
      <button onclick="onButtonClick()">Réponse 2</button>
    </div>
    <div class="answers-line">
      <button onclick="onButtonClick()">Réponse 3</button>
      <button onclick="onButtonClick()">Réponse 4</button>
    </div>
  </div>
`;

// Manuelle -----------------------------------------------

console.log(`Nombre d'espèces : ${getAllAnimals().length}`);

let quizzDifficulty = 'moyen'

currentQuestionAnswer = getRandomAnimalByQuizzDifficulty(quizzDifficulty);
const propositions = getPropositionsFromAnimalAnswer(currentQuestionAnswer, quizzDifficulty);
setImage(currentQuestionAnswer);
setPropositions(currentQuestionAnswer, propositions, quizzDifficulty);
