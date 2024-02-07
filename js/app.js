import { getUser, setStorage, setUser } from "./storage/storage.js";
import { setDocumentHeight, setHTMLTitle, getRandomIntegerBetween, shuffleArray, getFormattedDateFromTimestamp, getFormattedTimeFromTimestamp } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";
import { getPropositionsFromAnimalAnswer, getAllAnimals, getTenRandomAnimalsByQuizzDifficulty } from './animals.service.js'
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
        <button onclick="onDifficultyClick('facile')"><div class="difficulty-dot facile"></div>Facile</button>
        <button onclick="onDifficultyClick('moyen')"><div class="difficulty-dot moyen"></div>Moyen</button>
        <button onclick="onDifficultyClick('difficile')"><div class="difficulty-dot difficile"></div>Difficile</button>
        <button onclick="onDifficultyClick('zoologiste')"><div class="difficulty-dot zoologiste"></div>Zoologiste</button>
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
      <div id="titleContainer" class="title-area">
        <div class="difficulty-dot ${currentQuizzDifficulty}"></div><h1>Question <span id="currentQuestion"></span> / 10</h1>
      </div>

      <div id="questionContainer" class="question-area">
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
  if (!hasAnswered) {
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
      currentQuizz[currentIndex].points = currentPoints;

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
                </div>
                <button onclick="onNextQuestionClick()">suivant</button>
              </div>
            `;
          } else {
            document.getElementById('answersContainer').innerHTML = `
              <div id="nextQuestionButtonArea" class="next-question-button-area">
                <div class="points-area">
                  <span style="font-size: 25px; font-weight: 600; margin: 0 auto; margin-bottom: 10px;">${isGoodAnswer(animalId) ? '🌟 BRAVO 🌟' : '😢 OUPS 😢'}</span>
                  <span>points gagnés : <span style="font-size: 25px; font-weight: 600;">${currentPoints}</span>/10</span>
                </div>
                <button onclick="onEndQuizzClick()">Terminer</button>
              </div>
            `;
          }
          setTimeout(() => {
            document.getElementById('nextQuestionButtonArea').style.opacity = 1;
          }, 10);
        }, 300);

      }, 2000);
      
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
        <div id="titleContainer" class="title-area">
          <div class="difficulty-dot ${currentQuizzDifficulty}"></div><h1>Question <span id="currentQuestion"></span> / 10</h1>
        </div>
  
        <div id="questionContainer" class="question-area">
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

const onEndQuizzClick = () => {
  buttonSound.play();

  let quizzToSave = {
    difficulty: currentQuizzDifficulty,
    timestamp: Date.now(),
    details: currentQuizz
  }

  const USER = getUser();
  USER.completed.push(quizzToSave);
  setUser(USER);

  document.getElementById('titleContainer').style.opacity = 0;
  document.getElementById('questionContainer').style.opacity = 0;
  document.getElementById('nextQuestionButtonArea').style.opacity = 0;

  setTimeout(() => {
    document.getElementById('answersContainer').style.maxHeight = '95dvh';
    document.getElementById('answersContainer').style.height = '95dvh';
    document.getElementById('titleContainer').style.minHeight = '0dvh';
    document.getElementById('titleContainer').style.height = '5dvh';
    document.getElementById('questionContainer').style.minHeight = '0dvh';
    document.getElementById('questionContainer').style.margin = 0;
    document.getElementById('questionContainer').style.height = '0dvh';

    document.getElementById('nextQuestionButtonArea').innerHTML = `
      <div class="points-area">
        
        <div class="quizz-difficulty-area">
          <span class="difficulty-dot ${currentQuizzDifficulty}"></span><span>${currentQuizzDifficulty}</span>
        </div>

        <div class="total-points">
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>

          <div class="content">
            <div style="display: flex; align-items: center">
              <div style="display: flex; align-items: baseline">
                <span style="font-size: 30px; font-weight: 600;">${currentTotal}</span><span>/100</span>
              </div>
            </div>
            <div class="stars-container">${getStars(currentQuizzDifficulty, currentTotal)}</div>
          </div>

        </div>

        <div id="overview" class="overview">
          ${getOverview()}
        </div>

        <button id="refreshButton" class="refresh-button" onclick="onRefreshClick()">Accueil</button>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('nextQuestionButtonArea').style.opacity = 1;
      quizzendSound.play();

      let delay = 0;

      const OVERVIEW_LINES = document.getElementsByClassName('overview-line');
      for (let line of OVERVIEW_LINES) {
        delay += 200;
        setTimeout(() => {
          line.style.opacity = 1;
        }, delay);
      }

      setTimeout(() => {
        document.getElementById('refreshButton').style.opacity = 1;
      }, 2300);
    }, 400);

  }, 300);

}
window.onEndQuizzClick = onEndQuizzClick;

const onRefreshClick = () => {
  buttonSound.play();

  const main = document.getElementById('main');
  main.style.opacity = 0;

  setTimeout(() => {
    currentQuizzDifficulty = 'facile';
    currentQuizz = [
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
      { answer: {}, points: 0 },
    ];
    currentTotal = 0;
    currentPoints = 10;
    ANIMALS = [];
    PROPOSITIONS = [];
    currentIndex = 0;
    currentQuestionAnswer;
    currentImage = {url: '', author: ''};
    hasAnswered = false;

    main.innerHTML = `
      <div class="home-area">
        <div class="logo-container">
          <span>LOGO</span>
        </div>
        <button onclick="onPlayClick()">Jouer</button>
        <button ${isCompletedQuizzListEmpty() ? 'disabled' : ''} onclick="onScoresClick()">Scores</button>
        <span style="margin-top: auto;">v${APP_VERSION}</span>
      </div>
    `;
    main.style.opacity = 1;
    
  }, 300);
}
window.onRefreshClick = onRefreshClick;

const onScoresClick = () => {
  buttonSound.play();
  const main = document.getElementById('main');
  main.style.opacity = 0;

  setTimeout(() => {
    main.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 20px 0; padding: 0 20px;">
        <button class="back-button" onclick="onRefreshClick()"><img src="./medias/images/font-awsome/angle-left-solid.svg" /></button>
        <h2>SCORES</h2>
        <div style="display: flex; min-width: 35px; min-height: 35px;"></div>
      </div>
      ${getCompletedQuizzListByDifficulty('facile').length != 0 ? getScoresBlocByQuizzDifficulty('facile') : ''}
      ${getCompletedQuizzListByDifficulty('moyen').length != 0 ? getScoresBlocByQuizzDifficulty('moyen') : ''}
      ${getCompletedQuizzListByDifficulty('difficile').length != 0 ? getScoresBlocByQuizzDifficulty('difficile') : ''}
      ${getCompletedQuizzListByDifficulty('zoologiste').length != 0 ? getScoresBlocByQuizzDifficulty('zoologiste') : ''}
    `;
    main.style.opacity = 1;
  }, 300);
}
window.onScoresClick = onScoresClick;

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

const renderImage = (zoomLevel, blurClass) => {
  const image = document.getElementById('image');
  const blur = document.getElementById('blur');
  image.style.transform = `scale(${zoomLevel})`;
  blur.classList = [];
  blur.classList.add('blur');
  blur.classList.add(blurClass);
}

const getStars = (quizzDifficulty, quizzTotal) => {
  switch (quizzDifficulty) {
    case 'facile':
      if (quizzTotal >= 75) { return '⭐⭐⭐'; } 
      else if (quizzTotal >= 50) { return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>'; } 
      else if (quizzTotal >= 25) { return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>'; } 
      else { return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>'; }
    case 'moyen':
      if (quizzTotal >= 70) { return '⭐⭐⭐'; } 
      else if (quizzTotal >= 40) { return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>'; } 
      else if (quizzTotal >= 20) { return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>'; } 
      else { return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>'; }
    case 'difficile':
      if (quizzTotal >= 60) { return '⭐⭐⭐'; } 
      else if (quizzTotal >= 30) { return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>'; } 
      else if (quizzTotal >= 15) { return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>'; } 
      else { return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>'; }
    case 'zoologiste':
      if (quizzTotal >= 50) { return '⭐⭐⭐'; } 
      else if (quizzTotal >= 25) { return '⭐⭐<span style="filter: var(--app-filter-dark);">⭐</span>'; } 
      else if (quizzTotal >= 10) { return '⭐<span style="filter: var(--app-filter-dark);">⭐⭐</span>'; } 
      else { return '<span style="filter: var(--app-filter-dark);">⭐⭐⭐</span>'; }
    default:
      break;
  }
}

const getOverview = () => {
  let stringToReturn = ``;
  for (let index = 0; index < currentQuizz.length; index++) {
    const element = currentQuizz[index];
    stringToReturn += `<div class="overview-line ${element.points == 0 ? 'wrong' : 'good'}"><span>${index + 1}</span><span>${element.answer.vernacularName}</span><span>${element.points}/10</span></div>`;
  }
  return stringToReturn;
}

const getCompletedQuizzLine = (quizz) => {
  return `
    <div class="quizz-line">
      <span>${getFormattedDateFromTimestamp(quizz.timestamp)}</span>
      <span>${getFormattedTimeFromTimestamp(quizz.timestamp)}</span>
      <span class="">${getCompletedQuizzTotal(quizz)}/100</span>
      <span>${getStars(quizz.difficulty, getCompletedQuizzTotal(quizz))}</span>
    </div>`;
}

const getScoresBlocByQuizzDifficulty = (quizzDifficulty) => {
  let str = `
    <div class="scores-bloc">
      <div class="scores-bloc-title">
        <span style="margin-right: 10px;">Top 3</span>
        <span><span class="difficulty-dot ${quizzDifficulty}"></span>${quizzDifficulty}</span>
      </div>`;
  let list = getCompletedQuizzListByDifficulty(quizzDifficulty);
  list.forEach(quizz => {
    str += getCompletedQuizzLine(quizz);
  });
  str += `</div>`;
  return str;
}

// Gestion quizz -----------------------------------------

const setUpQuizz = () => {
  ANIMALS = [];
  currentTotal = 0;
  currentPoints = 10;

  ANIMALS = getTenRandomAnimalsByQuizzDifficulty(currentQuizzDifficulty);

  for (let index = 0; index < ANIMALS.length; index++) {
    const animal = ANIMALS[index];
    currentQuizz[index].answer = animal;
  }
  
}

const setUpQuestion = () => {
  currentQuestionAnswer = ANIMALS[currentIndex];
  PROPOSITIONS = getPropositionsFromAnimalAnswer(currentQuestionAnswer, currentQuizzDifficulty);
  setImage(currentQuestionAnswer);
  setPropositions(currentQuestionAnswer, PROPOSITIONS, currentQuizzDifficulty);

  document.getElementById('currentQuestion').innerHTML = `${currentIndex + 1}`;
}

const reducePoints = () => {
  if (currentPoints != 1) {
    currentPoints -= 1;
    document.getElementById('currentPoints').innerHTML = `${currentPoints}`;
    document.getElementById('pointsBar').classList.replace(`w${(currentPoints + 1) * 10}`, `w${currentPoints * 10}`);
  }
}

const isGoodAnswer = (animalId) => {
  if (currentQuestionAnswer.id == animalId) {
    return true;
  }
  return false;
}

const isCompletedQuizzListEmpty = () => {
  return getUser().completed.length == 0;
}

const getCompletedQuizzTotal = (quizz) => {
  let total = 0;
  quizz.details.forEach(element => {
    total += element.points;
  });
  return total
}

const getCompletedQuizzListByDifficulty = (quizzDifficulty) => {
  const ALL_QUIZZ = getUser().completed;
  let quizzListToReturn = ALL_QUIZZ.filter((quizz) => {
    if (quizz.difficulty != quizzDifficulty) {
      return false;
    }
    return true;
  });
  quizzListToReturn.sort((a, b) => {
    let totalA = getCompletedQuizzTotal(a);
    let totalB = getCompletedQuizzTotal(b);
    return totalB - totalA;
  });
  if (quizzListToReturn.length > 3) {
    quizzListToReturn = quizzListToReturn.slice(0, 3);
  }
  return quizzListToReturn;
}



/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------
setStorage();
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
    <button ${isCompletedQuizzListEmpty() ? 'disabled' : ''} onclick="onScoresClick()">Scores</button>
    <span style="margin-top: auto;">v${APP_VERSION}</span>
  </div>
`;

// Manuelle -----------------------------------------------

console.log(`Nombre d'espèces : ${getAllAnimals().length}`);
console.table(getAllAnimals());

const buttonSound = new Audio('./medias/sounds/button.mp3');
buttonSound.volume = .8;
const enhanceSound = new Audio('./medias/sounds/enhance.mp3');
const goodSound = new Audio('./medias/sounds/good.mp3');
goodSound.volume = .5;
const answeredSound = new Audio('./medias/sounds/answered.mp3');
answeredSound.volume = .4;
const wrongSound = new Audio('./medias/sounds/wrong.mp3');
wrongSound.volume = .4;
const quizzendSound = new Audio('./medias/sounds/quizzend.mp3');
quizzendSound.volume = .5;

let currentQuizzDifficulty = 'facile';
let currentQuizz = [
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
  { answer: {}, points: 0 },
];
let currentTotal = 0;
let currentPoints = 10;
let ANIMALS = [];
let PROPOSITIONS = [];
let currentIndex = 0;
let currentQuestionAnswer;
let currentImage = {url: '', author: ''};
let hasAnswered = false;


