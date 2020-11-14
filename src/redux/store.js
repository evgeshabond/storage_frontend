
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk' // no changes here 😀
import rootReducer from './rootReducer'


// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk),
    // other store enhancers if any
  ));



export default store







