//build the reducer

const initialState = {
    recipe: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    //build the switch
    switch (action.type) {
        default: 
            return state;
    }
}