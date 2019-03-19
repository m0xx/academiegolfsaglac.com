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

const colors = {
    black: '#000',
    white: '#FFF',
    blue: '#5E4FDE',
    grays: '#DDD'
}

const buttons = {
    primary: {
        color: colors.black
    },
    secondary: {
        color: colors.white
    },
}

export default {
    space: [
        0, 4, 8, 16, 32, 64, 128, 256, 512
    ],
    breakpoints,
    colors,
    buttons
}