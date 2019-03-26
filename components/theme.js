const breakpoints = [
    '40em',
    '52em',
    '64em',
    '80em',
]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]


const boxShadows = [
    `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
    `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// colors

const black = '#000'
const white = '#FFF'
const blue = '#5E4FDE'
const gray = '#DDD'

const colors = {
    black,
    white,
    blue,
    gray
}

const buttons = {
    primary: {
        color: colors.black,
        '&:hover': {
            color: colors.white
        }
    },
    secondary: {
        color: colors.white,
        '&:hover': {
            color: colors.black
        },
        hoverColor: colors.blue
    },
}

const letterSpacings = {
    normal: 'normal',
    caps: '0.025em'
}

const lineHeights = {
    standard: 1.5,
    display: 1.25
}

const medium = 500
const bold = 700
const regular = medium

const fontWeights = {
    medium,
    bold,
    regular
}

const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]

const textStyles = {
    display0: {
        fontSize: fontSizes[0] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display1: {
        fontSize: fontSizes[1] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
        letterSpacing: letterSpacings.caps,
        textTransform: 'uppercase'
    },
    display2: {
        fontSize: fontSizes[2] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display3: {
        fontSize: fontSizes[3] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display4: {
        fontSize: fontSizes[4] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display5: {
        fontSize: fontSizes[5] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display6: {
        fontSize: fontSizes[6] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display7: {
        fontSize: fontSizes[7] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    display8: {
        fontSize: fontSizes[8] + 'px',
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.display,
    },
    body0: {
        fontSize: fontSizes[1] + 'px',
        lineHeight: lineHeights.standard,
    },
    body1: {
        fontSize: fontSizes[2] + 'px',
        lineHeight: lineHeights.standard,
    },
    body2: {
        fontSize: fontSizes[3] + 'px',
        lineHeight: lineHeights.standard,
    }
}

const maxContainerWidth = '1280px';

const colorStyles = {
    whiteOnBlue: {
        color: 'white',
        bg: 'blue'
    },
    grayOnWhite: {
        color: 'gray',
        bg: 'white'
    }
}

export default {
    space: [
        0, 4, 8, 16, 32, 64, 128, 256, 512
    ],
    fontWeights,
    fontSizes,
    breakpoints,
    colors,
    colorStyles,
    // buttons,
    textStyles,
    maxContainerWidth,
    boxShadows
}