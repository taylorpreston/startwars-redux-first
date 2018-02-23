import React from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'

import styles from '../css/Switcher'

const UniversalComponent = universal(({ page }) => import(`./StarWarsPages/${page}.js`), {

  minDelay: 500,
  loading: () => (
    <div className={styles.spinner}>
      <div />
    </div>
  ),
  error: () => <div className={styles.notFound}> 404 - WHERE ARE THE STAR WARS PAGES?</div>
})

const StarWarsSwitcher = ({ page }) => {
  console.log("SW switcher page", page)
  return (
    <div className={styles.switcher}>
      <UniversalComponent page={page} />
    </div>
  )
}

const mapStateToProps = state => ({
  page: state.starWarsPage
})

export default connect(mapStateToProps)(StarWarsSwitcher)