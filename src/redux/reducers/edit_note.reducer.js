const editNoteReducer = (state = {}, action) => {
    if (action.type === "SET_EDIT_NOTE") {
      return action.payload;
    } else if(action.type === 'EDIT_NOTE') {
      return {
          ...state,
          [action.payload.property]: action.payload.value,
      }
    } else if(action.type === 'EDIT_NOTE_CLEAR') {
      return { notes: ''};
    }
  
    return state;
  };
  
  export default editNoteReducer;