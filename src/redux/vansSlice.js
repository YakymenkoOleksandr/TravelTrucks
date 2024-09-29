import { createSlice } from "@reduxjs/toolkit";

const vansSlice = createSlice({
  name: "vans",
  initialState: {
    vans: [],
    filteredVans: [], // Додаємо поле для відфільтрованих даних
    selectedVans: [],
    favorites: [],
    filters: {
      AC: false,
      TV: false,
      kitchen: false,
      bathroom: false,
      transmission: "Manual", // Set default transmission to Manual
      location: "",
      forms: [],
    },
    temporaryFilters: {
      AC: false,
      TV: false,
      kitchen: false,
      bathroom: false,
      transmission: "Manual",
      location: "",
      forms: [],
    },
  },

  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload;
      state.filteredVans = action.payload; // Ініціалізуємо відфільтровані дані всіма вантажівками
    },
    applyFilters: (state) => {
      const filters = state.filters; // Використовуємо активні фільтри для застосування
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
    toggleForm: (state, action) => {
      const formType = action.payload;
      const index = state.filters.forms.indexOf(formType);
      if (index > -1) {
        state.filters.forms.splice(index, 1); // Якщо тип вже вибраний, видаляємо його
      } else {
        state.filters.forms.push(formType); // Якщо не вибраний, додаємо
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
      state.filters[filterName] = !state.filters[filterName]; // Перемикаємо значення фільтра
    },
    setTransmission: (state, action) => {
      const { value } = action.payload;
      state.temporaryFilters.transmission = value; // Оновлюємо тимчасові фільтри
      state.filters.transmission = value; // Негайно оновлюємо активний фільтр
    },
    toggleFavorite: (state, action) => {
      const vanId = action.payload;
      if (state.favorites.includes(vanId)) {
        state.favorites = state.favorites.filter((id) => id !== vanId); // Видаляємо з улюблених
      } else {
        state.favorites.push(vanId); // Додаємо до улюблених
      }
    },
    setLocation: (state, action) => {
      state.temporaryFilters.location = action.payload; // Встановлюємо у тимчасових фільтрах
    },
    setForm: (state, action) => {
      state.temporaryFilters.forms = action.payload; // Встановлюємо у тимчасових фільтрах
    },
    setActiveFilters: (state) => {
      state.filters = { ...state.temporaryFilters }; // Копіюємо тимчасові фільтри в активні
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
  toggleFavorite
} = vansSlice.actions;

export default vansSlice.reducer;
