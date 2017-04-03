const initialState = { id: 1};

export function selectedPublisher(state = initialState, action) {
	switch (action.type) {
		case "SELECTED_PUBLISHER_UPDATED":
			return Object.assign({}, state, {
				id: action.payload
			});

		default:
			return state;
	}
}

