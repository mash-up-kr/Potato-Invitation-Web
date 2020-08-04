/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './Label.styled'

interface Label {
  className?: string
  children: React.ReactNode
  underlineColor?: string
}

function Label({ className, children, underlineColor = '#fef051' }: Label) {
  return (
    <Styled.Label data-split="모임 정보" className={className} underlineColor={underlineColor}>
      {children}
    </Styled.Label>
  )
}

export default Label
