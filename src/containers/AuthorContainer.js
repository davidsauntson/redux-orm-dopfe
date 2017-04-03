import React from 'react';
import {connect} from 'react-redux';

import AuthorCollection from '../components/AuthorCollection';
import {authors} from '../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
	return {
		authors: authors(state, ownProps)
	};
}


let AuthorCollectionContainer = connect(mapStateToProps)(AuthorCollection);

export default AuthorCollectionContainer;