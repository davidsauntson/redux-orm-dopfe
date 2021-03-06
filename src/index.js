import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {loadMockData} from './actions/actions';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
	rootReducer,
	composeEnhancers(applyMiddleware(  
		thunkMiddleware 
	))
);

store.dispatch(loadMockData()); 


ReactDOM.render(
	<Provider store={store}>
  		<App />
	</Provider>

	, document.getElementById('root')
);
