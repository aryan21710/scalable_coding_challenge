import axios from 'axios';
import { APIURL } from '../common/constants';

export const useFetchConesApi = async (setCone,riskLevel) => {
	try {
        const response = await axios.get(APIURL);
        if (response) {
            const filteredCone=response.data.filter(cone => cone.riskLevel === riskLevel)[0];
            response && setCone({...filteredCone});
        }
	} catch (err) {
		alert(err);
	}
};
