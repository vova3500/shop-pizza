const initialState = {

}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload
            }
    }
    return state
}

export default cart