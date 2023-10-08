const MAX_X = 1440
const MIN_X = 150

const MAX_Y = 800
const MIN_Y = 150

const getRandomNum = (max, min) => {
  return ( Math.random() * (max - min) ) + min
}

export const getRandomX = getRandomNum(MAX_X, MIN_X)
export const getRandomY = getRandomNum(MAX_Y, MIN_Y)