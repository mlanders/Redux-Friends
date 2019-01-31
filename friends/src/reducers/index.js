import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE,
} from '../actions';

const nameInitialState = {
	friends: null,
	isLoading: false,
	error: '',
};
const reducer = (state = nameInitialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				friends: '',
				isLoading: true,
				error: '',
			};
		case FETCH_FRIENDS_SUCCESS:
			return {
				...state,
				friends: action.payload,
				isLoading: false,
				error: '',
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				friends: '',
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
