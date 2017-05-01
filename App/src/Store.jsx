import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducers from './Reducers';

let middleware = composeWithDevTools(
	applyMiddleware(promise(), thunk, createLogger())
);

export default createStore(reducers, middleware);
