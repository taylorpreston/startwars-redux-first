import React from 'react'
import { connect } from 'react-redux'
import _ from "lodash"

import styles from '../../css/List'
import StarWarsSearch from '../StarWarsSearch';

const List = ({ SWcategory, data, searchQuery }) => (
  <div className={styles.list}>
    <div className={styles.title}>Category: {SWcategory}</div>

    <div className={styles.content}>
    <StarWarsSearch SWcategory={SWcategory} searchQuery={searchQuery}/>
    
    </div>
    { data && data.results && data.results.map(d => {
      return <div>{d.title}</div>
    })}
  </div>
)

const mapStateToProps = state => { 
  const { currentSWcategory } = state.starWars
  return {
    SWcategory: currentSWcategory,
    data: state.starWars[currentSWcategory].data,
    searchQuery: _.get(state, `starWarsSearch.${currentSWcategory}.search`, undefined)
  }
}

export default connect(mapStateToProps)(List)
