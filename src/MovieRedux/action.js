const initialState = {
  upcomingMovie: [],
  popularMovie: [],
  TopRatedMovie: [],
  genre: [],
};

const MovieStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Upcoming_Data":
      // console.log("Store", action);
      return { ...state, upcomingMovie: action.payload };

    case "popular_Data":
      // console.log("Store", action);
      return { ...state, popularMovie: action.payload };

    case "TopRated_Data":
      // console.log("Store", action);
      return { ...state, TopRatedMovie: action.payload };

    case "SET_GENRE":
      return { ...state, genre: action.payload };

    default:
      return state;
  }
};
export default MovieStatusReducer;
