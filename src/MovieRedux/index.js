export const upcomingData = (data) => {
  // console.log(data);
  return {
    type: "Upcoming_Data",
    payload: data,
  };
};

export const popularData = (data) => {
  // console.log(data);
  return {
    type: "popular_Data",
    payload: data,
  };
};

export const TopRatedData = (data) => {
  // console.log(data);
  return {
    type: "TopRated_Data",
    payload: data,
  };
};

export const setGenreRedux = (data) => {
  return {
    type: "SET_GENRE",
    payload: data,
  };
};
