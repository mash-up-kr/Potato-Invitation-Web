/* External dependencies */
import styled from 'styled-components'

interface LabelProps {
  underlineColor: string
}

export const Label = styled.span<LabelProps>`
  padding: 0 10px;
  position: relative;
  background: linear-gradient(to bottom, #fff 70%, ${props => props.underlineColor} 30%);
`
