import { ADD_FETCHED_DATA } from './types.js';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                console.log(data);
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};
