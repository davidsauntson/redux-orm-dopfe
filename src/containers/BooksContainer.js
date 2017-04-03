import React from 'react';
import {connect} from 'react-redux';

import BookCollection from '../components/BookCollection';
import {myBooksForPublisher} from '../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
	return {
		books: myBooksForPublisher(state, ownProps),
		publisherId: state.selectedPublisher.id
	};
}


let BookCollectionContainer = connect(mapStateToProps)(BookCollection);

export default BookCollectionContainer;