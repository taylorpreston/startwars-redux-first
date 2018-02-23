export default (state = [], action = {}) => {
  switch (action.type) {
    case 'STARWARS_FETCHED':
      return {...state, data: action.data}
    default:
      return state
  }
}
