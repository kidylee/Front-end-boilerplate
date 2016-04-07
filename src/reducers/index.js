/*
State shape:
{	

	autoLayoutItems: [
		autolayoutitem
	]
}



*/


import { combineReducers } from 'redux'
import autolayoutItems from './autolayoutItems'



const autoLayoutReady = (state=false, action) => {
  switch (action.type){
    case 'AUTO_LAYOUT_READY':
      return true;
    default:
      return state
  }
}



const rootReducer = combineReducers({
  autoLayoutReady,
  autolayoutItems
});



export default rootReducer;

