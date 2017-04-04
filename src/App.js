import React, { Component } from 'react';

import BooksContainer from './containers/BooksContainer';
import SelectedPublisherContainer from './containers/SelectedPublisherContainer';
import AllBooksByPublisherContainer from './containers/AllBooksByPublisherContainer';

class App extends Component {
  render() {
    return (
    	<div>
    		<SelectedPublisherContainer />

	        <hr />
	        <AllBooksByPublisherContainer />
        </div>
    );
  }
}

export default App;
