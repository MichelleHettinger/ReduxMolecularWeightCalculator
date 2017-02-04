import { elementPicker } from './helper'
import { adjustElement } from './helper'

export const searchForElements = (text) => {
  const elementsFound = elementPicker(text)
  //console.log(elementsFound)
  return {
    type: 'SEARCH_ELEMENT',
    elementsFound
  }
}

let nextAtomId = 0
export const pinElement = (element) => {

  return {
    type: 'PIN_ELEMENT',
    id: nextAtomId++,
    mass: element.mass,
    acronym: element.acronym,
    multiplier: element.multiplier,
  }
}

export const doPlus = (id) => {

  return {
    type: 'DO_PLUS',
    id,
  }
}

export const doMinus = (id, multiplier) => {

  switch (multiplier) {
    case 1:
      return {
        type: 'REMOVE_ELEMENT',
        id,
      }

    default:
      return {
        type: 'DO_MINUS',
        id,
      }
  }
}