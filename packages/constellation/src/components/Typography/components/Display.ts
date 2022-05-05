import PXToRem from 'utils/PXToRem'

import { createTypographyComponent } from '../utils'

const Display = createTypographyComponent({
  text: {
    fontSize: PXToRem(40),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(50),
  },
})

export default Display
