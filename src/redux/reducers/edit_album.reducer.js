const editAlbum = (state = {}, action) => {
  if (action.type === "SET_EDIT_ALBUM") {
    return action.payload;
  } else if(action.type === 'EDIT_ALBUM_TITLE') {
    return {
        ...state,
        [action.payload.property]: action.payload.value,
    }
  } else if(action.type === 'EDIT_CLEAR') {
    return { album_title: ''};
  }
  return state;
};

export default editAlbum;