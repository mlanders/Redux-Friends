import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE,
	DELETE_FRIEND_START,
	DELETE_FRIEND_SUCCESS,
	DELETE_FRIEND_FAILURE,
	ADD_FRIEND_START,
	ADD_FRIEND_SUCCESS,
	ADD_FRIEND_FAILURE,
} from '../actions';

const nameInitialState = {
	friends: [],
	isLoading: false,
	error: '',
};
const reducer = (state = nameInitialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				friends: [],
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
				friends: [],
				isLoading: false,
				error: action.payload,
			};
		case DELETE_FRIEND_START:
			return {
				...state,
				friends: [],
				isLoading: true,
				error: action.payload,
			};
		case DELETE_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload,
				isLoading: false,
				error: '',
			};
		case DELETE_FRIEND_FAILURE:
			return {
				...state,
				friends: [],
				isLoading: false,
				error: action.payload,
			};

		case ADD_FRIEND_START:
			return {
				...state,
				friends: [],
				isLoading: true,
				error: action.payload,
			};
		case ADD_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload,
				isLoading: false,
				error: '',
			};
		case ADD_FRIEND_FAILURE:
			return {
				...state,
				friends: [],
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
