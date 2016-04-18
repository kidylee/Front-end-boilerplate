import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';

import configureStore from './store/configureStore'




const stateInit={

	autoLayout: {
    rowHeight: 30,
	  width: 1200,
	  cols: 12,
	  autoSize: false,
	  margin:[10, 10],
	  layout: [
      {i: 'a', x: 0, y: 0, w: 12, h: 8, type:'PLOTLY'},
	    {i: 'b', x: 1, y: 0, w: 12, h: 8},
	    {i: 'c', x: 4, y: 0, w: 12, h: 8}
	  ]

	}
}

const store = configureStore(stateInit)

const Root = () =>
	(<Provider store={store} >
		<App />
	</Provider>)



render(
	<Root/>
	, document.getElementById('root'));
