const editAlbum = (state = {}, action) => {
  if (action.type === "SET_EDIT_ALBUM") {
    return action.payload;
  }
  return state;
};

export default editAlbum;