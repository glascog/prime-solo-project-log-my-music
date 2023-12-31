const editAlbum = (state = {}, action) => {
  if (action.type === "SET_EDIT_ALBUM") {
    return action.payload;
  } else if(action.type === 'EDIT_ALBUM') {
    return {
        ...state,
        [action.payload.property]: action.payload.value,
    }
  } else if(action.type === 'EDIT_CLEAR') {
    return { album_title: '', year_published: '', copy_type: '', track_listing: ''};
  }

  return state;
};

export default editAlbum;