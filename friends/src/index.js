import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, logger))
);
const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppWithRouter />
		</Router>
	</Provider>,
	document.getElementById('root')
);
