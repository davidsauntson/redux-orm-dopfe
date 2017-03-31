import React, { Component } from 'react';

import BooksContainer from './containers/BooksContainer';



class App extends Component {
  render() {
    return (
    	<div>
	        <BooksContainer publisherId={1} />
	        <BooksContainer publisherId={2} />
        </div>
    );
  }
}

export default App;
