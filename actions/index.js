 import { elementPicker } from './helper'

export const searchForElements = (text) => {
  const elementsFound = elementPicker(text)
  //console.log(elementsFound)

  return {
    type: 'SEARCH_ELEMENT',
    elementsFound
  }
}

export const pinElement = (element) => {

	console.log(element);

	return {
		type: 'PIN_ELEMENT',
		element
	}

}