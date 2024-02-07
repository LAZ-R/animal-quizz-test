import * as FILTER from './colors/filter.js';

/* ############################################################################
------------------------------------ MATHS ------------------------------------
############################################################################ */

export const getRandomIntegerBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


/* ############################################################################
----------------------------------- COLORS -----------------------------------
############################################################################ */

export const getFilterStringForHexValue = (hexValue) => {
  return FILTER.getFilterStringForHexValue(hexValue);
}


/* ############################################################################
------------------------------------- DOM -------------------------------------
############################################################################ */
/* Breakpoints */
const BREAKPOINTS = {
  PHONE_MAX_WIDTH: 767,
  TABLET_MAX_WIDTH: 1279,
  LAPTOP_MAX_WIDTH: 1919
}

export const isPhone = window.innerWidth <= BREAKPOINTS.PHONE_MAX_WIDTH
export const isTablet = window.innerWidth > BREAKPOINTS.PHONE_MAX_WIDTH && window.innerWidth <= BREAKPOINTS.TABLET_MAX_WIDTH
export const isTabletOrUp = window.innerWidth > BREAKPOINTS.PHONE_MAX_WIDTH
export const isLaptop = window.innerWidth > BREAKPOINTS.TABLET_MAX_WIDTH && window.innerWidth <= BREAKPOINTS.LAPTOP_MAX_WIDTH
export const isLaptopOrUp = window.innerWidth > BREAKPOINTS.TABLET_MAX_WIDTH
export const isDesktop = window.innerWidth > BREAKPOINTS.LAPTOP_MAX_WIDTH

export const setDocumentHeight = () => {
  document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', setDocumentHeight);

export const setHTMLTitle = (pageTitle) => {
  document.getElementById('title').innerHTML = pageTitle;
  document.getElementById('appleTitle').setAttribute('content', pageTitle);
}

/* ############################################################################
-------------------------------- DATE & HEURE ---------------------------------
############################################################################ */

export const getFormattedDateFromTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return `${
    date.getDate() < 10 
    ? '0' + date.getDate().toString() 
    : date.getDate()
  }/${
    (date.getMonth() + 1) < 10 
    ? '0' + (date.getMonth() + 1).toString() 
    : (date.getMonth() + 1)
  }/${date.getFullYear().toString().split('')[2]}${date.getFullYear().toString().split('')[3]}`;
}

export const getFormattedTimeFromTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return `${
    date.getHours() < 10 
    ? '0' + date.getHours().toString() 
    : date.getHours()
  }:${
    date.getMinutes() < 10 
    ? '0' + date.getMinutes().toString() 
    : date.getMinutes()
  }`;
}