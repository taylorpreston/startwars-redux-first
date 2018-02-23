import React from 'react'
import { connect } from 'react-redux'

import styles from '../../css/List'

const List = ({ SWcategory, data }) => (
  <div className={styles.list}>
    <div className={styles.title}>Category: {SWcategory}</div>

    <div className={styles.content}>
    
    </div>
  </div>
)

const mapStateToProps = state => ({
  category: state.category,
  packages: state.packages
})

export default connect(mapStateToProps)(List)
