import React from 'react';
import axios from 'axios';
import { APIURL } from '../common/constants';

export const useFetchConesApi = async setCone => {
	try {
		const response = await axios.get(APIURL);
		response && setCone([...response.data]);
	} catch (err) {
		alert(err);
	}
};
