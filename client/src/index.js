import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {logger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import { BrowserRouter as Router} from "react-router-dom";
import routes from './routers'
import NavigationBar from './components/NavigationBar'
import FlashMsgList from './components/flash/FlashMsgList'
import setAuthorizationToken from './utils/setAuthorizationToken'
import {setCurrentUser} from './actions/loginActions'
import jwtDecode from 'jwt-decode'
import './index.css'
const store = createStore(
    rootReducer,
    composeWithDevTools(
     applyMiddleware(thunk,logger)
    )
)

if(localStorage.getItem('jwtToken')){
  const token = localStorage.getItem('jwtToken')
  setAuthorizationToken(token)
  store.dispatch(setCurrentUser(jwtDecode(token)))
}else{
  setAuthorizationToken(false)
}

ReactDOM.render(
<Provider store={store}>
  <Router>
   <div className="ui container">
      <NavigationBar/>
      <FlashMsgList />
      {routes}
   </div>
  </Router>
</Provider>,
  document.getElementById('root'));
registerServiceWorker();
