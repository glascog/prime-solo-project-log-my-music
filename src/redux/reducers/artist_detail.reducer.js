const artistDetailReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ARTIST_DETAIL':
            return action.payload;
        default:
            return state;
    }
};

export default artistDetailReducer;