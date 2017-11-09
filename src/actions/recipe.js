import axios from 'axios';

import {
    API_URL,
    APPLICATION_ID,
    APPLICATION_KEY,
    SEARCH_RECIPE_SUCCESS,
    GET_RECIPE
} from '../constants'

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[ 'X-Requested-With' ] = 'XMLHttpRequest';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json';

const credentials = `&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`;

export function searchRecipe(criteria) {
    return (dispatch) => {
        return axios.get(`/search?q=${criteria}${credentials}`)
                .then((result) => {
                    dispatch({
                        type: SEARCH_RECIPE_SUCCESS,
                        payload: result
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
      }
}

export function getRecipe(id) {
    return {
        type: GET_RECIPE,
        payload: id
    }
}
