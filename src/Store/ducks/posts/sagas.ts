import { call, put } from 'redux-saga/effects';
import api from '../../../Services/api';

import { loadSuccces, loadFailure } from './actions';

export function* load() {
	try {
		const response = yield call(api.get, '/posts?_format=json&access-token=wCqbVCW6PR3a75SAQHlcGaCpe88qF6Wk3NRE&page=10');
		yield put(loadSuccces(response.data.result));
	} catch (err) {
		yield put(loadFailure());
	}
}
