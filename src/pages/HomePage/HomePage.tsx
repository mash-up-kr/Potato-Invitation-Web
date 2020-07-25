/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import CommentListContainer from 'containers/CommentListContainer'
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
  return (
    <div className={cx('homepage-wrapper')}>
      <div>
        <CommentListContainer />
      </div>
    </div>
  )
}

export default HomePage
