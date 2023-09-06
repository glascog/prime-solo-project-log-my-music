const albumReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALBUM_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default albumReducer;