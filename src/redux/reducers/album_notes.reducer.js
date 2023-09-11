const albumNotesReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ALBUM_NOTES':
            return action.payload;
        default:
            return state;
    }
};

export default albumNotesReducer;