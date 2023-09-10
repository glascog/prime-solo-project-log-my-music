const albumDetailReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALBUM_DETAIL':
            return action.payload;
        default:
            return state;
    }
};

export default albumDetailReducer;