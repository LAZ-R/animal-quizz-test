import { setStorage } from "./storage/storage.js";
import { setDocumentHeight, setHTMLTitle, getRandomIntegerBetween, shuffleArray } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";
import { getRandomAnimalByQuizzDifficulty, getAnimalsByQuizzDifficulty, getPropositionsFromAnimalAnswer, getAllAnimals, getTenRandomAnimalsByQuizzDifficulty } from './animals.service.js'
import { requestWakeLock } from "../wakeLock.js";

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

const onPlayClick = () => {
  buttonSound.play();
  const main = document.getElementById('main');
  main.style.opacity = 0;
  setTimeout(() => {
    main.innerHTML = '';
    main.innerHTML = `
      <div class="difficulty-area">
        <!-- <div>
          <p>
            Quizz de 10 questions
          </p>
          <span>Difficulté</span>
        </div> -->
        <button onclick="onDifficultyClick('facile')" disabled><div class="difficulty-dot facile"></div>Facile</button>
        <button onclick="onDifficultyClick('moyen')"><div class="difficulty-dot moyen"></div>Moyen</button>
        <button onclick="onDifficultyClick('difficile')"><div class="difficulty-dot difficile"></div>Difficile</button>
        <button onclick="onDifficultyClick('zoologiste')" disabled><div class="difficulty-dot zoologiste"></div>Zoologiste</button>
      </div>
    `;
    
    main.style.opacity = 1;
  }, 300);
}
window.onPlayClick = onPlayClick;

const onDifficultyClick = (quizzDifficulty) => {
  buttonSound.play();
  currentQuizzDifficulty = quizzDifficulty;
  const main = document.getElementById('main');
  main.style.opacity = 0;

  setTimeout(() => {
    main.innerHTML = '';

    setUpQuizz(currentQuizzDifficulty);

    main.innerHTML = `
      <div class="title-area">
        <div class="difficulty-dot ${currentQuizzDifficulty}"></div><h1>Question <span id="currentQuestion"></span> / 10</h1>
      </div>

      <div class="question-area">
        <div class="question-title-container">
          <h2 id="popTitle">Quel est cet animal ?</h2>
        </div>
        <div id="imageContainer" class="image-container">
          <div id="image" class="image"></div>
          <div id="blur" class="blur blurred-10"></div>
        </div>
        <div id="enhanceContainer" class="enhance-container">
          <span>
            À chaque amélioration de l'image, le nombre de points potentiels attribués à cette réponse diminuera de 1.
          </span>
          <button id="enhanceButton" onclick="enhance()">Améliorer</button>
          <div class="points-container"><div id="pointsBar" class="points-bar w100"></div><span class="points-text-container"><span id="currentPoints">10</span> pts</span></div>
        </div>
      </div>

      <div id="answersContainer" class="answers-container">
        <div id="answerLine1" class="answers-line">
          <button onclick="onAnimalClick()">Réponse 1</button>
          <button onclick="onAnimalClick()">Réponse 2</button>
        </div>
        <div id="answerLine2" class="answers-line">
          <button onclick="onAnimalClick()">Réponse 3</button>
          <button onclick="onAnimalClick()">Réponse 4</button>
        </div>
      </div>
    `;

    setUpQuestion();
    
    main.style.opacity = 1;
  }, 300);
}
window.onDifficultyClick = onDifficultyClick;






const enhance = () => {
  enhanceSound.pause(); enhanceSound.currentTime = 0; enhanceSound.play();
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

const onAnimalClick = (animalId) => {
  if (!hasAnswered) {
    answeredSound.play();
    hasAnswered = true;
    const button = document.getElementById(`button${animalId}`);
    button.classList.add('selected');
    setTimeout(() => {
      if (isGoodAnswer(animalId)) {
        goodSound.play();
        button.classList.replace('selected', 'good');
        currentTotal += currentPoints;
      } else {
        wrongSound.play();
        button.classList.replace('selected', 'bad');
        document.getElementById(`button${currentQuestionAnswer.id}`).classList.add('good');
        currentPoints = 0;
      }

      // TODO faire la popup
      renderImage(zoom1, 'blurred-1');

      let creditsArea = document.createElement('div');
      creditsArea.setAttribute('class', 'credits-area');
      creditsArea.innerHTML = `<span>&copy; ${currentImage.author}</span>`;
      document.getElementById('imageContainer').appendChild(creditsArea);

      document.getElementById('popTitle').innerHTML = `${currentQuestionAnswer.vernacularName}`;
      document.getElementById('enhanceContainer').innerHTML = `
        <div class="classification-container">
          <span>${currentQuestionAnswer.class}</span>
          <span>${currentQuestionAnswer.family}</span>
          <span><i>${currentQuestionAnswer.scientificName}</i></span>
        </div>
        <div class="status-container">
          <span>UICN</span>
          <span>${currentQuestionAnswer.uicn.label}</span>
          <div class="uicn-status" style="
            background-color: ${currentQuestionAnswer.uicn.bgColor};
            color: ${currentQuestionAnswer.uicn.color};">
            <span>${currentQuestionAnswer.uicn.id}</span>
          </div>
        </div>
      `;

      setTimeout(() => {
        document.getElementById('answerLine1').style.opacity = 0;
        document.getElementById('answerLine2').style.opacity = 0;

        setTimeout(() => {
          if (currentIndex != 9) {
            document.getElementById('answersContainer').innerHTML = `
              <div id="nextQuestionButtonArea" class="next-question-button-area">
                <div class="points-area">
                  <span style="font-size: 25px; font-weight: 600; margin: 0 auto; margin-bottom: 10px;">${isGoodAnswer(animalId) ? '🌟 BRAVO 🌟' : '😢 OUPS 😢'}</span>
                  <span>points gagnés : <span style="font-size: 25px; font-weight: 600;">${currentPoints}</span>/10</span>
                  <span>total : <span style="font-size: 25px; font-weight: 600;">${currentTotal}</span>/100</span>
                </div>
                <button onclick="onNextQuestionClick()">Question suivante</button>
              </div>
            `;
          } else {
            document.getElementById('answersContainer').innerHTML = `
              <div id="nextQuestionButtonArea" class="next-question-button-area">
                <div class="points-area">
                  <div class="last-question-points">
                    <span style="font-size: 20px; font-weight: 600; margin: 0 auto; margin-bottom: 5px;">${isGoodAnswer(animalId) ? '🌟 BRAVO 🌟' : '😢 OUPS 😢'}</span>
                    <span>points gagnés : <span style="font-size: 20px; font-weight: 600;">${currentPoints}</span>/10</span>
                  </div>
                  <div class="total-points">
                    <div class="bg"></div>
                    <div class="bg bg2"></div>
                    <div class="bg bg3"></div>
                    <div class="content">
                      <div style="display: flex; align-items: center">
                        <span class="difficulty-dot ${currentQuizzDifficulty}"></span>
                        <div style="display: flex; align-items: baseline">
                          <span style="font-size: 30px; font-weight: 600;">${currentTotal}</span>
                          <span>/100</span>
                        </div>
                      </div>
                      <div>${getStars()}</div>
                    </div>
                  </div>
                </div>
                <button onclick="onRefreshClick()">Accueil</button>
              </div>
            `;
          }
          setTimeout(() => {
            document.getElementById('nextQuestionButtonArea').style.opacity = 1;
          }, 10);
        }, 300);

      }, 2000);
      



      /* setTimeout(() => { // TODO à virer pour remplacer par bouton
        window.location = window.location;
      }, 1500); */
    }, 1500);
  }
}
window.onAnimalClick = onAnimalClick;

const onNextQuestionClick = () => {
  buttonSound.play();
  const main = document.getElementById('main');
  main.style.opacity = 0;

  setTimeout(() => {
    if (currentIndex != 9) {

      currentIndex += 1;
      hasAnswered = false;
      currentPoints = 10;

      main.innerHTML = `
        <div class="title-area">
          <div class="difficulty-dot ${currentQuizzDifficulty}"></div><h1>Question <span id="currentQuestion"></span> / 10</h1>
        </div>
  
        <div class="question-area">
          <div class="question-title-container">
            <h2 id="popTitle">Quel est cet animal ?</h2>
          </div>
          <div id="imageContainer" class="image-container">
            <div id="image" class="image"></div>
            <div id="blur" class="blur blurred-10"></div>
          </div>
          <div id="enhanceContainer" class="enhance-container">
            <span>
              À chaque amélioration de l'image, le nombre de points potentiels attribués à cette réponse diminuera de 1.
            </span>
            <button id="enhanceButton" onclick="enhance()">Améliorer</button>
            <div class="points-container"><div id="pointsBar" class="points-bar w100"></div><span class="points-text-container"><span id="currentPoints">10</span> pts</span></div>
          </div>
        </div>
  
        <div id="answersContainer" class="answers-container">
          <div id="answerLine1" class="answers-line">
            <button onclick="onAnimalClick()">Réponse 1</button>
            <button onclick="onAnimalClick()">Réponse 2</button>
          </div>
          <div id="answerLine2" class="answers-line">
            <button onclick="onAnimalClick()">Réponse 3</button>
            <button onclick="onAnimalClick()">Réponse 4</button>
          </div>
        </div>
      `;
    
      setUpQuestion();
      setTimeout(() => {
        main.style.opacity = 1;
      }, 100);
    }
  }, 500);


}
window.onNextQuestionClick = onNextQuestionClick;

const onRefreshClick = () => {
  buttonSound.play();
  window.location = window.location;
}
window.onRefreshClick = onRefreshClick;

// GÉNÉRATION DOM -----------------------------------------

const setImage = (animal) => {
  currentImage = animal.images[getRandomIntegerBetween(0, animal.images.length - 1)];
  let imgUrl = currentImage.url;
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
        <div id="answerLine1" class="answers-line">
          <button id="button${propositions[0].id}" onclick="onAnimalClick(${propositions[0].id})"><span class="large">${propositions[0].vernacularName}</span></button>
          <button id="button${propositions[1].id}" onclick="onAnimalClick(${propositions[1].id})"><span class="large">${propositions[1].vernacularName}</span></button>
        </div>
        <div id="answerLine2" class="answers-line">
          <button id="button${propositions[2].id}" onclick="onAnimalClick(${propositions[2].id})"><span class="large">${propositions[2].vernacularName}</span></button>
          <button id="button${propositions[3].id}" onclick="onAnimalClick(${propositions[3].id})"><span class="large">${propositions[3].vernacularName}</span></button>
        </div>
      `;
      break;
    case 'moyen':
      ANSWERS_CONTAINER.innerHTML = `
        <div id="answerLine1" class="answers-line">
          <button id="button${propositions[0].id}" onclick="onAnimalClick(${propositions[0].id})"><span class="large">${propositions[0].vernacularName}</span><span class="small"><i>${propositions[0].scientificName}</i></span></button>
          <button id="button${propositions[1].id}" onclick="onAnimalClick(${propositions[1].id})"><span class="large">${propositions[1].vernacularName}</span><span class="small"><i>${propositions[1].scientificName}</i></span></button>
        </div>
        <div id="answerLine2" class="answers-line">
          <button id="button${propositions[2].id}" onclick="onAnimalClick(${propositions[2].id})"><span class="large">${propositions[2].vernacularName}</span><span class="small"><i>${propositions[2].scientificName}</i></span></button>
          <button id="button${propositions[3].id}" onclick="onAnimalClick(${propositions[3].id})"><span class="large">${propositions[3].vernacularName}</span><span class="small"><i>${propositions[3].scientificName}</i></span></button>
        </div>
      `;
      break;
    case 'difficile':
      ANSWERS_CONTAINER.innerHTML = `
        <div id="answerLine1" class="answers-line">
          <button id="button${propositions[0].id}" onclick="onAnimalClick(${propositions[0].id})"><span class="large"><i>${propositions[0].scientificName}</i></span><span class="small">${propositions[0].vernacularName}</span></button>
          <button id="button${propositions[1].id}" onclick="onAnimalClick(${propositions[1].id})"><span class="large"><i>${propositions[1].scientificName}</i></span><span class="small">${propositions[1].vernacularName}</span></button>
        </div>
        <div id="answerLine2" class="answers-line">
          <button id="button${propositions[2].id}" onclick="onAnimalClick(${propositions[2].id})"><span class="large"><i>${propositions[2].scientificName}</i></span><span class="small">${propositions[2].vernacularName}</span></button>
          <button id="button${propositions[3].id}" onclick="onAnimalClick(${propositions[3].id})"><span class="large"><i>${propositions[3].scientificName}</i></span><span class="small">${propositions[3].vernacularName}</span></button>
        </div>
      `;
      break;
    case 'zoologiste':
      ANSWERS_CONTAINER.innerHTML = `
        <div id="answerLine1" class="answers-line">
          <button id="button${propositions[0].id}" onclick="onAnimalClick(${propositions[0].id})"><span class="large"><i>${propositions[0].scientificName}</i></span></button>
          <button id="button${propositions[1].id}" onclick="onAnimalClick(${propositions[1].id})"><span class="large"><i>${propositions[1].scientificName}</i></span></button>
        </div>
        <div id="answerLine2" class="answers-line">
          <button id="button${propositions[2].id}" onclick="onAnimalClick(${propositions[2].id})"><span class="large"><i>${propositions[2].scientificName}</i></span></button>
          <button id="button${propositions[3].id}" onclick="onAnimalClick(${propositions[3].id})"><span class="large"><i>${propositions[3].scientificName}</i></span></button>
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

const getStars = () => {
  switch (currentQuizzDifficulty) {
    case 'facile':
      if (currentTotal >= 75) {
        return '⭐⭐⭐';
      } else if (currentTotal >= 50) {
        return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>';
      } else if (currentTotal >= 25) {
        return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>';
      } else {
        return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>';
      }
    case 'moyen':
      if (currentTotal >= 70) {
        return '⭐⭐⭐';
      } else if (currentTotal >= 40) {
        return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>';
      } else if (currentTotal >= 20) {
        return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>';
      } else {
        return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>';
      }
    case 'difficile':
      if (currentTotal >= 60) {
        return '⭐⭐⭐';
      } else if (currentTotal >= 30) {
        return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>';
      } else if (currentTotal >= 15) {
        return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>';
      } else {
        return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>';
      }
    case 'zoologiste':
      if (currentTotal >= 50) {
        return '⭐⭐⭐';
      } else if (currentTotal >= 25) {
        return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>';
      } else if (currentTotal >= 10) {
        return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>';
      } else {
        return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>';
      }
    default:
      break;
  }
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------
//setStorage();
setDocumentHeight();
setHTMLTitle(APP_NAME);
await requestWakeLock();

const main = document.getElementById('main');
main.innerHTML = `
  <div class="home-area">
    <div class="logo-container">
      <span>LOGO</span>
    </div>
    <button onclick="onPlayClick()">Jouer</button>
    <button disabled>Scores</button>
    <span style="margin-top: auto;">v${APP_VERSION}</span>
  </div>
`;

// Manuelle -----------------------------------------------

console.log(`Nombre d'espèces : ${getAllAnimals().length}`);
//console.table(getAllAnimals());

const buttonSound = new Audio('./medias/sounds/button.mp3');
const enhanceSound = new Audio('./medias/sounds/enhance.mp3');
const goodSound = new Audio('./medias/sounds/good.mp3');
const answeredSound = new Audio('./medias/sounds/answered.mp3');
answeredSound.volume = .5;
const wrongSound = new Audio('./medias/sounds/wrong.mp3');
wrongSound.volume = .6;

/*  */

let currentQuizzDifficulty = 'facile';
let currentTotal = 0;
let currentPoints = 10;
let ANIMALS = [];
let PROPOSITIONS = [];
let currentIndex = 0;
let currentQuestionAnswer;
let currentImage = {url: '', author: ''};
let hasAnswered = false;

const setUpQuizz = () => {
  ANIMALS = [];
  currentTotal = 0;
  currentPoints = 10;

  ANIMALS = getTenRandomAnimalsByQuizzDifficulty(currentQuizzDifficulty);
  
}

const setUpQuestion = () => {
  currentQuestionAnswer = ANIMALS[currentIndex];
  PROPOSITIONS = getPropositionsFromAnimalAnswer(currentQuestionAnswer, currentQuizzDifficulty);
  setImage(currentQuestionAnswer);
  setPropositions(currentQuestionAnswer, PROPOSITIONS, currentQuizzDifficulty);

  document.getElementById('currentQuestion').innerHTML = `${currentIndex + 1}`;
}
