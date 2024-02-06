import { RAW_ANIMALS, DIFFICULTY_LEVEL } from "./animals.data.js";
import { getRandomIntegerBetween, shuffleArray } from "./utils/utils.js";

export const getAllAnimals = () => {
  let ANIMALS = [];
  let id = 0;

  RAW_ANIMALS.forEach(animal => {
    id += 1;
    animal.id = id;
    ANIMALS.push(animal);
  });

  return ANIMALS;
}

export const getAnimalById = (id) => {
  const ANIMALS = getAllAnimals();
  let animalToReturn;

  ANIMALS.forEach(animal => {
    if (animal.id == id) {
      animalToReturn = animal;
    }
  });

  return animalToReturn;
}

export const getRandomAnimalFromArray = (animalArray) => {
  return animalArray[getRandomIntegerBetween(0, animalArray.length - 1)];
}

export const getAnimalsByQuizzDifficulty = (quizzDifficulty) => {
  let animalsToReturn = [];
  const ANIMALS = getAllAnimals();
  ANIMALS.forEach(animal => {
    switch (quizzDifficulty) {
      case 'facile':
        if (animal.difficulty == DIFFICULTY_LEVEL.easy) {
          animalsToReturn.push(animal);
        }
        break;
      case 'moyen':
        if (animal.difficulty == DIFFICULTY_LEVEL.easy || animal.difficulty == DIFFICULTY_LEVEL.medium) {
          animalsToReturn.push(animal);
        }
        break;
      case 'difficile':
        if (animal.difficulty == DIFFICULTY_LEVEL.medium || animal.difficulty == DIFFICULTY_LEVEL.hard) {
          animalsToReturn.push(animal);
        }
        break;
      case 'zoologiste':
        if (animal.difficulty == DIFFICULTY_LEVEL.hard) {
          animalsToReturn.push(animal);
        }
        break;
      default:
        break;
    }
  });
  return animalsToReturn;
}

export const getRandomAnimalByQuizzDifficulty = (quizzDifficulty) => {
  return getRandomAnimalFromArray(getAnimalsByQuizzDifficulty(quizzDifficulty));
}

export const getTenRandomAnimalsByQuizzDifficulty = (quizzDifficulty) => {
  let animalsToReturn = [];
  let animal = getRandomAnimalByQuizzDifficulty(quizzDifficulty);
  animalsToReturn.push(animal)

  for (let index = 0; index < 9; index++) {
    let animal = getRandomAnimalByQuizzDifficulty(quizzDifficulty);
    let isHere = false;
    if (animalsToReturn.includes(animal)) {
      isHere = true;
    }
    while (isHere == true) {
      animal = getRandomAnimalByQuizzDifficulty(quizzDifficulty);
      if (animalsToReturn.includes(animal)) {
        isHere = true;
      } else {
        isHere = false;
      }
    }
    animalsToReturn.push(animal)
  }
  //console.table(animalsToReturn);

  return animalsToReturn;
}



export const getPropositionsFromAnimalAnswer = (animalAnswer, quizzDifficulty) => {
  let animalsToReturn = [];
  let animalsToSelectFrom = [];
  let ANIMALS = getAllAnimals();
  ANIMALS.splice(ANIMALS.indexOf(animalAnswer), 1);

  switch (quizzDifficulty) {
    case 'facile':
      animalsToSelectFrom = ANIMALS.filter((animal) => {
        if (animal.class.includes(animalAnswer.class)) {
          return false;
        }
        if (animal.difficulty.includes(DIFFICULTY_LEVEL.hard)) {
          return false;
        }
        return true;
      });
      break;
    case 'moyen':
      animalsToSelectFrom = ANIMALS.filter((animal) => {
        if (animal.family.includes(animalAnswer.family)) {
          return false;
        }
        return true;
      });
      break;
    case 'difficile':
      animalsToSelectFrom = ANIMALS.filter((animal) => {
        if (!animal.class.includes(animalAnswer.class)) {
          return false;
        }
        return true;
      });
      break;
    case 'zoologiste':
      animalsToSelectFrom = ANIMALS.filter((animal) => {
        if (!animal.family.includes(animalAnswer.family)) {
          return false;
        }
        return true;
      });
      break;
    default:
      break;
  }

  shuffleArray(animalsToSelectFrom);

  for (let index = 0; index < 3; index++) {
    let rnd = getRandomIntegerBetween(0, animalsToSelectFrom.length -1);

    animalsToReturn.push(animalsToSelectFrom[rnd]);
    animalsToSelectFrom.splice(rnd, 1);
  }

  return animalsToReturn;
}