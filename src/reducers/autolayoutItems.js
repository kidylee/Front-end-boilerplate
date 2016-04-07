const autolayoutItem = (state, action) => {
  switch (action.type) {
    case 'ADD_AUTOLAYOUT_ITEM':
      return {
        id: action.id
      };
    case 'AUTO_LAYOUT_ITEM_RESIZING':
      if(state.id !== action.id){
        return state;
      }
      return Object.assign({}, state, { 
          width: action.width,
          height: action.height
        });
    default:
      return state
  }
}



const autolayoutItems = (state=[], action) => {
  switch (action.type){
    case 'ADD_AUTOLAYOUT_ITEM':
      return [...state, autolayoutItem(undefined, action)];
    case 'AUTO_LAYOUT_ITEM_RESIZING':
      return state.map( ( item )=> autolayoutItem(item, action))
    default:
      return state
  }
}

export default autolayoutItems;