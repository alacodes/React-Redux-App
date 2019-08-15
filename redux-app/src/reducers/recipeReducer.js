//build the reducer

const initialState = {
    recipe: [],
    test: `I think things are working`

}

export const reducer = (state = initialState, action) => {
    //build the switch
    switch (action.type) {
        default: 
            return state;
    }
}