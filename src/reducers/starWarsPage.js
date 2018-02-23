import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => {
  console.log("SW PAGE REDUCER", action.type, state)
  return components[action.type] || state
}

const components = {
  STARWARS: 'Home',
  STARWARS_CATEGORY: 'Category',
  [NOT_FOUND]: 'NotFound',
}
