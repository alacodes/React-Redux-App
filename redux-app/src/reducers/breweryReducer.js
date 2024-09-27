
import {GETTING_BREWERY_DATA_START, GETTING_BREWERY_DATA_SUCCESS, GETTING_BREWERY_DATA_FAILURE} from '../Actions';


//build the reducer

const initialState = {
    brewery: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    //build the switch
    switch (action.type) {
        //build case for loading state (tells UI it's loading)
        case GETTING_BREWERY_DATA_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GETTING_BREWERY_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brewery: action.payload,
                error: ''
            };
        case GETTING_BREWERY_DATA_FAILURE:
            return {
                error: ''
            }
        default: 
            return state;
    }
}