import React from 'react';
import {connect} from 'react-redux';

import Books from '../components/books';
import {myBooks} from '../selectors/selectors';


const mapStateToProps = (state) => {
	return {
		books: myBooks(state)
	};
}


let BooksContainer = connect(mapStateToProps)(Books);

export default BooksContainer;