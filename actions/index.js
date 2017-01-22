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

export const pinElement = (element) => {
  element.multiplier = 1

	return {
		type: 'PIN_ELEMENT',
		element
	}
}

export const addPlusMinus = (element, i, pm) => {
  const multiplier = adjustElement(element,pm)
  
  switch (multiplier){
    case 0:
      return {
        type: 'REMOVE_ELEMENT',
        i
      }

    default:
      return {
        type: 'PLUS_MINUS',
        multiplier,
        i
      }
  }


}