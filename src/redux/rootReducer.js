import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  taskReducer: taskReducer,
  userReducer: userReducer,
  bookingReducer: bookingReducer,
});

export default rootReducer;
