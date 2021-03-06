import { css, keyframes } from 'styled-components'

export const sizes = {
  desktop: 1400,
  tablet: 950,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const theme = {
  primary: '#2e9',
  secondary: '#8bf',
  white: '#fff',
  black: '#222',
  grey: '#777',
  gutter: {
    m: '32px',
    l: '80px',
    xl: '240px',
  },
}

export const slideFromLeft = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
`

export const slideFromTop = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
`
