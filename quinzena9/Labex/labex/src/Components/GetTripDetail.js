import axios from 'axios';
import { urlAPI } from '../services/Global';

export const getTripDetails = async (token, id) => {
    
    let error;
    let response;

    try {
        response = await axios.get(urlAPI+"/"+id,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        error = e.response;
    }

    return {
        response,
        error
    }
}