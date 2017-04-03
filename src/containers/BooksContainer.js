import React from 'react';
import {connect} from 'react-redux';

import BookCollection from '../components/BookCollection';
import {myBooks} from '../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
	return {
		books: myBooks(state, ownProps)
	};
}


let BookCollectionContainer = connect(mapStateToProps)(BookCollection);

export default BookCollectionContainer;