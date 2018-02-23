export default (state = [], action = {}) => {
  switch (action.type) {
    case 'STARWARS_FETCHED':
      return {...state, [action.SWcategory]:{ data: action.data}, currentSWcategory: action.SWcategory }
    default:
      return state
  }
}
