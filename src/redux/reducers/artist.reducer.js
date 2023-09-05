const artistReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ARTIST_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default artistReducer;