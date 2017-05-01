import { REQUEST_APOD } from '../Constants';

export default function ApodReducer(
	state = {
		loading: false,
		data: '',
		currentDate: undefined,
		requestedDate: undefined,
		error: undefined
	},
	action
) {
	switch (action.type) {
		case REQUEST_APOD + '_PENDING': {
			return { ...state, loading: true };
		}

		case REQUEST_APOD + '_FULFILLED': {
			return { ...state, loading: false, data: action.payload.data };
		}

		case REQUEST_APOD + '_REJECTED': {
			return { ...state, loading: false, error: action.payload };
		}
	}

	return state;
}
