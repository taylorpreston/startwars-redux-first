import React from 'react'
import Link, { NavLink } from 'redux-first-router-link'


import styles from '../css/Home'
import navStyle from '../css/Sidebar'
import StarWarsSwitcher from './StarWarsSwitcher';

const actionMap = {
  film: { type: 'STARWARS_CATEGORY', payload: { SWcategory: 'films'} }
}

const StarWars = () => (
  <div className={styles.home}>
    <h1 className={styles.title}>Star Wars</h1>

    <div className={styles.content}>
      <img
        alt='logo'
        style={{ height: 150 }}
        src='http://suggestive.com/wp-content/uploads/2017/11/Star-Wars-1200x675.jpg'
      />
    </div>
    <div className={navStyle.sidebar} style={{background: 'blue'}}>
      <NavLink activeClassName={navStyle.active} to={actionMap.film} >Films</NavLink>
    </div>
      <StarWarsSwitcher/>
  </div>
)

export default StarWars