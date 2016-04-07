export const addAutoLayoutItem = (id) => {
  return {
    type: 'ADD_AUTOLAYOUT_ITEM',
    id
  }
}

export const autoLayoutReady = () => {
	return {
		type: 'AUTO_LAYOUT_READY'
	}
}