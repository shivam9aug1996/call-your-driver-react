const initialState = {
  booking_loader: false,
  booking_pending: false,
  booking_success: false,
  booking_failure: false,
  email_loader: false,
  email_success: false,
  email_failure: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "FETCH_TASKS_SUCCESS":
    //   return {
    //     ...state,
    //     task: action.payload,
    //   };
    // case "FETCH_TASKS_LOADING":
    //   return {
    //     ...state,
    //     loading_fetch: action.payload,
    //   };

    case "BOOKING_LOADER":
      return {
        ...state,
        booking_loader: action.payload,
      };
    case "BOOKING_SUCCESS":
      return {
        ...state,
        booking_success: action.payload,
      };
    case "BOOKING_FAILURE":
      return {
        ...state,
        booking_failure: action.payload,
      };
    case "EMAIL_LOADER":
      return {
        ...state,
        email_loader: action.payload,
      };

    case "EMAIL_SUCCESS":
      return {
        ...state,
        email_success: action.payload,
      };
    case "EMAIL_FAILURE":
      return {
        ...state,
        email_failure: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
