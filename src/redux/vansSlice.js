import { createSlice } from "@reduxjs/toolkit";

const vansSlice = createSlice({
  name: "vans",
  initialState: {
    vans: [],
    filteredVans: [],
    selectedVans: [],
    favorites: [],
    filters: {
      AC: false,
      TV: false,
      kitchen: false,
      bathroom: false,
      transmission: "",
      location: "",
      forms: [],
    },
    temporaryFilters: {
      AC: false,
      TV: false,
      kitchen: false,
      bathroom: false,
      transmission: "",
      location: "",
      forms: [],
    },
  },

  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload;
      state.filteredVans = action.payload;
    },
    setLocation: (state, action) => {
      state.temporaryFilters.location = action.payload;
    },
    setForm: (state, action) => {
      state.temporaryFilters.forms = action.payload;
    },
    setActiveFilters: (state) => {
      state.filters = { ...state.temporaryFilters };
    },
    setTransmission: (state, action) => {
      const { value } = action.payload;
      state.temporaryFilters.transmission = value;
      state.filters.transmission = value;
    },
    toggleForm: (state, action) => {
      const formType = action.payload;
      const index = state.filters.forms.indexOf(formType);
      if (index > -1) {
        state.filters.forms.splice(index, 1);
      } else {
        state.filters.forms.push(formType);
      }
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
      state.filters[filterName] = !state.filters[filterName];
    },

    toggleFavorite: (state, action) => {
      const vanId = action.payload;
      if (state.favorites.includes(vanId)) {
        state.favorites = state.favorites.filter((id) => id !== vanId);
      } else {
        state.favorites.push(vanId);
      }
    },
    applyFilters: (state) => {
      const filters = state.filters;
      state.filteredVans = state.vans.filter((van) => {
        return (
          (filters.AC ? van.AC === filters.AC : true) &&
          (filters.TV ? van.TV === filters.TV : true) &&
          (filters.kitchen ? van.kitchen === filters.kitchen : true) &&
          (filters.bathroom ? van.bathroom === filters.bathroom : true) &&
          (filters.transmission
            ? van.transmission === filters.transmission
            : true) &&
          (filters.location ? van.location.includes(filters.location) : true) &&
          (filters.forms.length > 0 ? filters.forms.includes(van.form) : true)
        );
      });
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
        transmission: "",
        location: "",
        form: [],
      };
      state.temporaryFilters = { ...state.filters };
    },
  },
});

export const {
  setVans,
  setActiveFilters,
  applyFilters,
  toggleFilter,
  setTransmission,
  setLocation,
  setForm,
  resetFilters,
  toggleForm,
  toggleFavorite,
} = vansSlice.actions;

export default vansSlice.reducer;
