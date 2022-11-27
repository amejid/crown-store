import { createSelector } from '@reduxjs/toolkit';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}),
);

export const selectCategoriesIsLoading = createSelector(
  selectCategoryReducer,
  (categoriesSlice) => categoriesSlice.isLoading,
);

export default selectCategoriesMap;
