export const starWarsSearchOnChange = (search, SWcategory) => {
  return {
    type: 'SW_SEARCH',
    SWcategory,
    search
  }
}


export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'SW_SEARCH':
      return {...state, [action.SWcategory]: {search: action.search}}
    default:
      return state
  }
}
