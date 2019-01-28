export const addCity = city => ({
  type: 'ADD_CITY',
  city
})

export const removeCity = id => ({
  type: 'REMOVE_CITY',
  id
})

export const toggleFavoritedCity = id => ({
  type: 'TOGGLE_FAV_CITY',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAVORITED: 'SHOW_FAVORITED'
}
