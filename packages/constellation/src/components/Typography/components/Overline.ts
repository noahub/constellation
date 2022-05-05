import PXToRem from 'utils/PXToRem'

import { createTypographyComponent } from '../utils'

const Overline = createTypographyComponent({
  text: {
    fontSize: PXToRem(12),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(18),
  },
})

export default Overline
