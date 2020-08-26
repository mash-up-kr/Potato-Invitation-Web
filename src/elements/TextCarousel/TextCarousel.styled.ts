/* External dependencies */
import styled, { css } from 'styled-components'

interface WrapperProps {
  isOver: boolean
}

const WRAPPER_BORDER_WIDTH = '1px'
const WRAPPER_BORDER_STYLE = 'solid'

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 20px;
  box-sizing: border-box;
  border-width: ${WRAPPER_BORDER_WIDTH};
  border-style: ${WRAPPER_BORDER_STYLE};
  border-color: white;

  ${props =>
    props.isOver &&
    css`
      justify-content: start;
      overflow: hidden;
      border-color: #dfdfdf;
      border-radius: 3px;
    `}
`

export const Carousel = styled.div`
  width: max-content;
  position: absolute;
`
