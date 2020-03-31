export const d20 = () => {
  return ~~(((Math.random()*100)/5)+1)
}

export const d4 = () => {
  return ~~(((Math.random()*100)/25)+1)
}

export const d8 = () => {
  return ~~(((Math.random()*100)/(100/8))+1)
}

export const d6 = () => {
  return ~~(((Math.random()*100)/(100/6))+1)
}