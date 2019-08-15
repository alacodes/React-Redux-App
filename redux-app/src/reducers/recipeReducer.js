
import {GETTING_BREWERY_DATA_START} from '../Actions';

//build the reducer

const initialState = {
    recipe: [],
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
            }
        default: 
            return state;
    }
}