import {css} from "@emotion/react";


export const COLORS = {
    yellow: 'linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%)',
    orange: ' #fca61f',
    black: '#242d49',
    gray: '#788097',
    purple: 'linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)',
    pink: '#FF919D',
    glass: 'rgba(255, 255, 255, 0.54)'
}

export const SHADOW = {
    box: '0px 19px 60px rgb(0 0 0 / 8%)',
    smBox: '-79px 51px 60px rgba(0, 0, 0, 0.08)'
}

export const ACTIVE = {
    item: '#f799a354'
}

const breakPoints = {
    tablet: 900, // tablet
    mobile: 768
}
export const BREAK_POINT = {
    tablet: 'tablet',
    mobile: 'mobile'
} as const

export const NormalTransition = css`
  transition: all 300ms ease;
`
export const FLEX = {
    center: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
}

export const mediaQuery = (bp: keyof typeof breakPoints) => `@media screen and (max-width: ${breakPoints[bp]}px)`

