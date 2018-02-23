import React from 'react'
import { connect } from 'react-redux'
import { starWarsSearchOnChange } from '../reducers/starWarsSearch';
import { Link } from 'redux-first-router-link';

const StarWarsSearch = ({onChange = ()=>{}, onSearch = ()=>{}, search}) => {
  return(
    <div>
      <input type='text' onChange={onChange}/>
      <button onClick={onSearch} value={search}>Search</button>
    </div>
  )
}

const mapStateToProps = state => {
  const { currentSWcategory } = state.starWars
  return {
    SWcategory: currentSWcategory, 
    search: [currentSWcategory].search,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: event => {
    // console.log(ownProps)
    // console.log("Search Value ===>", event.target.value)
    dispatch(starWarsSearchOnChange(event.target.value, ownProps.SWcategory))
  },
  onSearch: () => {
    console.log("OWN PROPS", ownProps)
    dispatch({ 
      type: 'STARWARS_CATEGORY', 
      payload: { 
        SWcategory: 'films', 
      },
      query: { 
        search: ownProps.searchQuery
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch)