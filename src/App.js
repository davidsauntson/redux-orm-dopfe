import React, { Component } from 'react';

import BooksContainer from './containers/BooksContainer';
import SelectedPublisherContainer from './containers/SelectedPublisherContainer';

class App extends Component {
  render() {
    return (
    	<div>
    		<SelectedPublisherContainer />
	        <BooksContainer  />
        </div>
    );
  }
}

export default App;
