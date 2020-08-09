/* Internal dependencies */
import React, { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import classNames from 'classnames/bind'

/* Internal dependencies */
import TextUnderline from 'elements/TextUnderline'
import errorAvatar from 'assets/images/error_avatar.png'
import styles from './Error.module.scss'

interface ErrorProps {
  errorStatusCode: number
}

const cx = classNames.bind(styles)

function Error({ errorStatusCode = 404 }: ErrorProps) {
  const history = useHistory()

  const { errorTitle, errorContent } = useMemo(() => {
    if (errorStatusCode >= 500) {
      return {
        errorTitle: 'Internal Server Error',
        errorContent: 'Internal server error',
      }
    }
    return {
      errorTitle: 'Page Not Found',
      errorContent: 'Page not found',
    }
  }, [errorStatusCode])

  const onClickHistoryBackButton = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <>
      <Helmet>
        <title>{`${errorStatusCode} ${errorTitle}`}</title>
        <meta name="description" content={errorContent} />
      </Helmet>
      <div className={cx('error-wrapper')}>
        <TextUnderline className={cx('title')}>잠시만요!</TextUnderline>
        <img className={cx('error-avatar')} src={errorAvatar} alt="" />
        <p className={cx('error-status')}>{errorStatusCode} ERROR</p>
        <p className={cx('error-description')}>이전 페이지로 돌아가 다시 시도해주세요.</p>
        <button className={cx('back-btn')} onClick={onClickHistoryBackButton}>
          이전 페이지로 돌아가기
        </button>
      </div>
    </>
  )
}

export default Error
