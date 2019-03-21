import Text from './Text'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = {
    textStyle: 'display3',
    m: 0,
}

Heading.H1 = Heading.withComponent('h1')
Heading.H2 = Heading.withComponent('h2')
Heading.H3 = Heading.withComponent('h3')
Heading.H4 = Heading.withComponent('h4')
Heading.H5 = Heading.withComponent('h5')
Heading.H6 = Heading.withComponent('h6')

export default Heading