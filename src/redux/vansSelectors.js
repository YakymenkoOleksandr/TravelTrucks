export const selectVans = (state) => state.vans.vans;
export const selectVanById = (state, id) => {
  if (!state.vans || !Array.isArray(state.vans.vans)) {
    return undefined;
  }
  return state.vans.vans.find((van) => van.id === id); 
};
