import { css } from 'styled-components'

const sizes = {
  desktop: 1090,
  tablet: 600,
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
  primary: '#bada55',
  primaryBackground: '#ffe',
}
