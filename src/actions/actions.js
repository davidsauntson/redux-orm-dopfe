import {fetchData} from '../api/api';

export function loadMockData() {
	return function(dispatch) {
		fetchData().then(data => {
			dispatch({
				type: "DATA_LOADED",
				payload: data
			})
		});
	}
}

export function updateSelectedPublisher(publisherId) {
	return {
		type: "SELECTED_PUBLISHER_UPDATED",
		payload: publisherId
	}
}