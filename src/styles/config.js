import { is } from 'cssrxp'
import apply from './index.js'

const toRem = (value) => (is.number.test(value) ? Number(value) * 0.25 + 'rem' : value)
const spacing = (prop) => (value) => ({ rules: !value ? null : { [prop]: toRem(value) } })

export const config = {
  apply,
  utilities: {
    bg: 'background',
    m: spacing('margin'),
    p: spacing('padding'),
    radius: spacing('borderRadius')
  },
  variants: {
    hover: '&:hover'
  },
  plugins: [
    {
      name: 'functional',
      utility(ctx) {
        if (typeof ctx.utility === 'function') {
          return { ...ctx, ...ctx.utility(ctx.value) }
        }

        if (ctx.match[2].startsWith('[')) {
          return { ...ctx, utility: ctx.match[2].slice(1, -1).split(',') }
        }
      },
      regexp: ({ patterns }) => ({ patterns: { utility: '\\[[^\\]]+\\]+|' + patterns.utility } })
    }
  ]
}

export default config
