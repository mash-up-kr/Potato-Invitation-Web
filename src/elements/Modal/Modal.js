import React from 'react'
import * as Styled from './Modal.styled'

function Modal({ className, visible, onClose, onSubmit, children }) {
  return (
    <>
      <Styled.ModalOverlay visible={visible} />
      <Styled.ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <Styled.ModalInner tabIndex="0" className="modal-inner">
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
