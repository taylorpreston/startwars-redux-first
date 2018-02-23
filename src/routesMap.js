import { redirect } from 'redux-first-router'
import _ from 'lodash';

export default {
  HOME: '/',

  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const { payload: { category } } = getState().location
      const packages = await fakeFetch(`/api/category/${category}`)

      if (packages.length === 0) {
        const action = redirect({
          type: 'LIST',
          payload: 'I AM THE REDIRECT PAYLOAD'
        })

        return dispatch(action)
      }

      dispatch({ type: 'PACKAGES_FETCHED', payload: { category, packages } })
    }
  },
  STARWARS:{
    path: '/starwars',
    thunk: async (dispatch, getState) => {
      const { payload } = getState().location
      // console.log("SW", getState().location)
      const data = await starWarsFetch()
      
      dispatch({ type: "STARWARS_FETCHED", data: data, SWcategory: 'home'})
    }
  },
  STARWARS_CATEGORY:{
    path: '/starwars/:SWcategory',
    thunk: async (dispatch, getState) => {
      const { payload, search } = getState().location
      let data = await starWarsFetch(payload, search)
      
      dispatch({ 
        type: "STARWARS_FETCHED", 
        SWcategory: payload.SWcategory, 
        data: data
      })
    }
  }
}

// this is essentially faking/mocking the fetch api
// pretend this actually requested data over the network
const config = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  }
};

const baseUrl = 'https://swapi.co/api/'

const starWarsFetch = async (options, search) => {
  console.log('Options/Search For Star Wars Fetch ===>', options, search)
  let url = baseUrl
  if(options) {
    const { SWcategory } = options
    url = `${baseUrl}${SWcategory}/`
  }
  if(search && !_.includes(search, "undefined")){
    url = `${url}?${search}`
  }
  console.log("URL", url)
  const response = await fetch(url, config)
  // console.log("RESPONSE", response)
  const json = await response.json()
  // console.log('JSON', json)
  return json
}


const fakeFetch = async path => {
  const category = path.replace('/api/category/', '')

  switch (category) {
    case 'redux':
      return ['reselect', 'recompose', 'redux-first-router']
    case 'react':
      return [
        'react-router',
        'react-transition-group',
        'react-universal-component'
      ]
    case 'starwars':
      return ['star-wars-baby']
    default:
      return []
  }
}
