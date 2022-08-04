export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const addFilter = (payload) => {
  return { type: ADD_FILTER, payload };
};

export const removeFilter = (payload) => {
  console.log("payload", payload);
  // setSelectedFilters(selectedFilters.filter((item) => item !== tag));

  return { type: REMOVE_FILTER, payload };
};
