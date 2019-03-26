import styled from 'styled-components'
import {
    textStyle,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    space,
    color,
} from 'styled-system'

const Text = styled.div`
  margin: 0;
  padding: 0;
  
  ${textStyle}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
`

Text.displayName = 'Text'


Text.Span = Text.withComponent('span')
Text.P = Text.withComponent('p')
Text.S = Text.withComponent('s')

export default Text