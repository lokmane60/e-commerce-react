import { DECREMENT, INCREMENT } from "../actions/types"
import Store from "../Store"


const CounterReducer = (state = {},action) => {
  if(Store.type === INCREMENT)
  switch (action.type){
    case INCREMENT:
    return state.count+1;
    case DECREMENT:
        return state.count-1;
    default:
        return state
  }
  
}

export default CounterReducer