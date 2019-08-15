import axios from 'axios';

//avoiding error messages
export const GETTING_BREWERY_DATA_START = 'GETTING_BREWERY_DATA_START';
export const GETTING_BREWERY_DATA_SUCCESS = 'GETTING_BREWERY_DATA_SUCCESS';

export const getData = () => {
    return dispatch => {
        //dispatch action before async call that tells reducer to transition to loading state
        dispatch({ type: GETTING_BREWERY_DATA_START});
        //make axios call by grabbing request url
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(res => {
                //put res.data.data on payload and dispatch it
                dispatch({type: })
                )
            .catch(error => console.log(error));

    }
}