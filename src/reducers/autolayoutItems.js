const autolayoutItem = (state, action) => {
  switch (action.type) {
    case 'ADD_AUTOLAYOUT_ITEM':
      return {
        id: action.id
      }
    default:
      return state
  }
}



const autolayoutItems = (state=[], action) => {
  switch (action.type){
    case 'ADD_AUTOLAYOUT_ITEM':
      return [...state, autolayoutItem(undefined, action)]
    default:
      return state
  }
}

export default autolayoutItems;