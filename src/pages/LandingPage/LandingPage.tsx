/* External dependencies */
import React from 'react'
import classNames from 'classnames/bind'

/* Internal dependencies */
import style from 'pages/LandingPage/LandingPage.module.scss'
import Landing from 'components/Landing/Landing'

const cx = classNames.bind(style)

function LandingPage() {
  return (
    <div className={cx('landingpage-wrapper')}>
      <Landing />
    </div>
  )
}

export default LandingPage
