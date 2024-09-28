import { createSlice } from "@reduxjs/toolkit";

const vansSlice = createSlice({
  name: "vans",
  initialState: {
    vans: [],
    filteredVans: [], // Додаємо поле для відфільтрованих даних
    selectedVans: [],
    filters: {
      AC: false,
      TV: false,
      kitchen: false,
      bathroom: false,
      transmission: "Manual", // Set default transmission to Manual
      Location: "",
      forms: []
    },
  },

  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload;
      state.filteredVans = action.payload; // Ініціалізуємо відфільтровані дані всіма вантажівками
    },
    applyFilters: (state, action) => {
  const filters = action.payload;
  state.filteredVans = state.vans.filter((van) => {
    return (
      (filters.AC ? van.AC === filters.AC : true) &&
      (filters.TV ? van.TV === filters.TV : true) &&
      (filters.kitchen ? van.kitchen === filters.kitchen : true) &&
      (filters.bathroom ? van.bathroom === filters.bathroom : true) &&
      (filters.transmission ? van.transmission === filters.transmission : true) &&
      (filters.Location ? van.Location.includes(filters.Location) : true) &&
      (filters.form ? van.form === filters.form : true)
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
      state.filters.transmission = value; // Set the selected transmission value
    },
    setLocation: (state, action) => {
      state.filters.Location = action.payload; // Задаємо нову локацію
    },
    setForm: (state, action) => {
      state.filters.form = action.payload; // Задаємо нове значення форми (тип кузова)
    },
    toggleForm: (state, action) => {
      const formType = action.payload;
      const index = state.filters.forms.indexOf(formType);
      if (index > -1) {
        state.filters.forms.splice(index, 1); // Якщо тип вже вибраний, видаляємо його
      } else {
        state.filters.forms.push(formType); // Якщо не вибраний, додаємо
      }
    },
    resetFilters: (state) => {
      state.filters = {
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
        isVan: false,
        isFullyIntegrated: false,
        isAlcove: false,
        transmission: "Manual",
        Location: "",
         forms: [], 
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
  setForm
} = vansSlice.actions;

export default vansSlice.reducer;
