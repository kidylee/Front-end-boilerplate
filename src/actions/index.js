export const addAutoLayoutItem = (id) => {
  return {
    type: 'ADD_AUTOLAYOUT_ITEM',
    id
  }
}

export const autoLayoutItemResizing = ({id, height, width}) =>{
	return {
		type: 'AUTO_LAYOUT_ITEM_RESIZING',
		id,
		height,
		width
	}
}