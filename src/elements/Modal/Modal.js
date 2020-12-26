import React, { useEffect } from 'react'
import * as Styled from './Modal.styled'

function Modal({ className, onClose, onSubmit, children }) {
  useEffect(() => {
    document.body.style = `overflow: hidden;`
    return () => {
      document.body.style = `overflow: auto;`
    }
  }, [])
  return (
    <>
      <Styled.ModalWrapper className={className} tabIndex="-1">
        <Styled.ModalInner tabIndex="0">
          <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
          <Styled.ButtonWrapper>
            <Styled.CloseButton type="button" onClick={onClose}>
              닫기
            </Styled.CloseButton>
            <Styled.SubmitButton type="submit" onClick={onSubmit}>
              확인
            </Styled.SubmitButton>
          </Styled.ButtonWrapper>
        </Styled.ModalInner>
      </Styled.ModalWrapper>
    </>
  )
}

export default Modal
