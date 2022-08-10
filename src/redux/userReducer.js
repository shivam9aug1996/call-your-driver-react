const initialState = {
  userData: [],
  loading_fetch: false,
  loading_add: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        userData: action.payload,
      };
    case "FETCH_USER_LOADING":
      return {
        ...state,
        loading_fetch: action.payload,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        // task: action.payload,
      };
    case "ADD_USER_LOADING":
      return {
        ...state,
        loading_add: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
