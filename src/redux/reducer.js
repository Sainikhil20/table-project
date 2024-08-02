const initialState = {
    data: [],
    selectedRow: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'SELECT_ROW':
        return { ...state, selectedRow: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  