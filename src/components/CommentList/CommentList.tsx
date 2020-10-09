/* External dependencies */
import React, { useState } from 'react'
import Immutable from 'immutable'
import classNames from 'classnames/bind'

/* Internal dependencies */
import Comment from 'components/Comment'
import CommentModel from 'models/Comment'
import styles from './CommentList.module.scss'
import TextUnderline from 'elements/TextUnderline'
import WithNewline from 'hocs/WithNewline'

interface commentListProps {
  comments: Immutable.List<CommentModel>
  mainImage: string
  contents: string
  createComment: Function
}

const cx = classNames.bind(styles)

function CommentList({ comments, mainImage, contents, createComment }: commentListProps) {
  const [form, setForm] = useState({
    userName: '',
    content: '',
  })

  const initForm = () => {
    setForm({
      userName: '',
      content: '',
    })
  }

  const onChage = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    createComment(form)
    initForm()
  }

  return (
    <div className={cx('comment-list-wrapper')}>
      <header>
        <div className={cx('character-wrapper')}>
          <img src={mainImage} alt="" />
        </div>
      </header>
      <section>
        <article className={cx('comment-list-description')}>
          <TextUnderline className={cx('title')}>댓글을 입력해주세요.</TextUnderline>
          <p className={cx('description')}>
            <WithNewline>{contents}</WithNewline>
          </p>
        </article>
        <article className={cx('comment-list-content')}>
          <ul>
            {comments.toList().map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </article>
      </section>
      <div className={cx('new-comment')} onSubmit={onSubmit}>
        <form>
          <input type="text" name="userName" value={form.userName} placeholder="이름을 입력해주세요" onChange={onChage} />
          <input type="text" name="content" value={form.content} placeholder="댓글을 입력해주세요" onChange={onChage} />
          <button type="submit">댓글 입력하기</button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(CommentList)
