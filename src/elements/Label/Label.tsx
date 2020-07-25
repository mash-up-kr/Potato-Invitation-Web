/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './Label.styled'

interface InfoLabel {
  content: string
  width?: number
  height?: number
  fontSize?: number
  color?: string
  backgroundColor?: string
}

function InfoLabel({
  content,
  width = 64,
  height = 20,
  fontSize = 12,
  color = '#106225',
  backgroundColor = '#C9EDD7',
}: InfoLabel) {
  return (
    <Styled.InfoLabel width={width} height={height} fontSize={fontSize} color={color} backgroundColor={backgroundColor}>
      {content}
    </Styled.InfoLabel>
  )
}

export default InfoLabel
