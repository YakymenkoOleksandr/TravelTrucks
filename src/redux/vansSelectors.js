// Вибрати всі авто
export const selectVans = (state) => state.vans.vans;

// Вибрати авто по ID
export const selectVanById = (state, id) => {
  if (!state.vans || !Array.isArray(state.vans.vans)) {
    return undefined;
  }
  return state.vans.vans.find((van) => van.id === id); 
};

// Вибрати обрані авто
export const selectSelectedVans = (state) => state.vans.selectedVans;

// Вибрати авто з урахуванням фільтрів
export const selectFilteredVans = (state) => state.vans.filteredVans;

