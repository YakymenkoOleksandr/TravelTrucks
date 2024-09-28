import { createSlice } from "@reduxjs/toolkit";

const vansSlice = createSlice({
  name: "vans",
  initialState: {
    vans: [],
    filteredVans: [], // Додаємо поле для відфільтрованих даних
    selectedVans: [],
    filters: {
      AC: false,
      Gear: "",
      Kitchen: false,
      TV: false,
      Bathroom: false,
      isVan: false,
      isFullyIntegrated: false,
      isAlcove: false,
      Transmission: "Manual", // Set default transmission to Manual
      Location: "",
    },
  },

  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload;
      state.filteredVans = action.payload; // Ініціалізуємо відфільтровані дані всіма вантажівками
    },
    applyFilters: (state, action) => {
      const filters = action.payload;
      state.filteredVans = state.vans.filter(van => {
        return (
          (filters.AC ? van.AC === filters.AC : true) &&
          (filters.Gear ? van.Gear === filters.Gear : true) &&
          (filters.Kitchen ? van.Kitchen === filters.Kitchen : true) &&
          (filters.Transmission ? van.Transmission === filters.Transmission : true) &&
          (filters.Location ? van.Location.includes(filters.Location) : true)
          // Додайте інші фільтри за потреби
        );
      });
    },
    toggleVanSelection: (state, action) => {
      const vanId = action.payload;
      if (state.selectedVans.includes(vanId)) {
        state.selectedVans = state.selectedVans.filter((id) => id !== vanId);
      } else {
        state.selectedVans.push(vanId);
      }
    },
    toggleFilter: (state, action) => {
      const filterName = action.payload;
      const currentValue = state.filters[filterName];

      // Toggle the current filter
      state.filters[filterName] = !currentValue;


      // Get the number of active filters
      const activeFiltersCount = Object.values(state.filters).filter(
        Boolean
      ).length;

      // Ensure that no more than 8 filters are active at once
      if (activeFiltersCount > 8) {
        // If already 4 active, reset the last toggled filter
        state.filters[filterName] = false;
      }
    },
    setTransmission: (state, action) => {
      const { value } = action.payload;
      state.filters.Transmission = value; // Set the selected transmission value
    },
    setLocation: (state, action) => {
      state.filters.Location = action.payload; // Задаємо нову локацію
    },
    resetFilters: (state) => {
      state.filters = {
        AC: false,
        Gear: "",
        Kitchen: false,
        TV: false,
        Bathroom: false,
        isVan: false,
        isFullyIntegrated: false,
        isAlcove: false,
        Transmission: "Manual", // Reset Transmission filter to Manual
      };
    },
  },
});

export const {
  setVans,
  toggleVanSelection,
  setTransmission, 
  resetFilters,
  toggleFilter,
  applyFilters,
  setLocation,
} = vansSlice.actions;

export default vansSlice.reducer;