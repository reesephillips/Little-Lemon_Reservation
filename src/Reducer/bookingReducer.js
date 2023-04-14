import { fetchAPI } from "../Utils/api";


const bookingReducer = (state, action) => {
  if (action.type === "update-times") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

export default bookingReducer;
