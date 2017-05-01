import '../css/custom.less';

import React from 'react';
import ReactDOM from 'react-dom';
import ApodContainer from './Container/ApodContainer';
import { Provider } from 'react-redux';
import store from './Store';

// Render to ID content in the DOM
ReactDOM.render(
	<Provider store={store}>
		<ApodContainer />
	</Provider>,
	document.getElementById('content')
);
