import { COUNTRIES, LOADER, COUNTRIES_SEARCH } from "./actionType";
const initialState = {
  countries: [],
  load: false,
  searchBox: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === COUNTRIES) {
    return { ...state, countries: action.payload };
  }
  if (action.type === LOADER) {
    return { ...state, load: !state.load };
  }
  if (action.type === COUNTRIES_SEARCH) {
    return { ...state, searchBox: action.payload };
  }
  return state;
};

export default reducer;
