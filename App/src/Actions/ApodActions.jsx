import axios from 'axios';
import { REQUEST_APOD } from '../Constants';
import moment from 'moment';

export function requestApodByDate(date) {
	return {
		type: REQUEST_APOD,
		payload: axios.get(
			'https://api.nasa.gov/planetary/apod?hd=true&api_key=DEMO_KEY&date=' + moment(date).format('YYYY-MM-DD')
		)
	};
}
