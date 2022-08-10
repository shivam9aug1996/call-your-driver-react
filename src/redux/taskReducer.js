const initialState = {
  task: [],
  loading_fetch: false,
  loading_add: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_SUCCESS":
      return {
        ...state,
        task: action.payload,
      };
    case "FETCH_TASKS_LOADING":
      return {
        ...state,
        loading_fetch: action.payload,
      };
    case "ADD_TASKS_SUCCESS":
      return {
        ...state,
        task: action.payload,
      };
    case "ADD_TASKS_LOADING":
      return {
        ...state,
        loading_add: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
