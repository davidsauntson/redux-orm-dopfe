import React from 'react';
import {connect} from 'react-redux';

import SelectedPublisherFilter from '../components/SelectedPublisherFilter';
import {myPublishers} from '../selectors/selectors';
import {updateSelectedPublisher} from '../actions/actions';

const mapStateToProps = (state) => {
	return {
		publishers: myPublishers(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectedPublisherChange: (id) => {
			dispatch(updateSelectedPublisher(id))
		}
	}
}


const SelectedPublisherContainer = connect(mapStateToProps, mapDispatchToProps)(SelectedPublisherFilter);

export default SelectedPublisherContainer;