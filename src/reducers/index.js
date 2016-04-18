import { combineReducers } from 'redux'
import autolayoutItems from './autolayoutItems'



const autoLayout = (state, action) => {
  console.log(state);
  return state;
}

const autoLayoutReady = (state=false, action) => {
  switch (action.type){
    case 'AUTO_LAYOUT_READY':
      return true;
    default:
      return state
  }
}



const rootReducer = autoLayout;
// combineReducers({
//   autoLayoutReady,
//   autolayoutItems
// });



export default rootReducer;

