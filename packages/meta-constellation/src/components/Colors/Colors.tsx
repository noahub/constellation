import React from 'react'

import { ColorsComponent } from './Slider.types'
import { parse } from 'css-variables-parser'

const Color = () => {
  return (
    <div className='bg-white'>
      <div className='w-24 h-12 bg-primary' />
      color hex
    </div>
  )
}

const Colors: ColorsComponent = () => {
  const colors = Array.from(document.styleSheets)
    .filter(sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
    .reduce(
      (acc, sheet) =>
        (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce(
            (def, rule) =>
              (def =
                rule.selectorText === ':root'
                  ? [...def, ...Array.from(rule.style).filter(name => name.startsWith('--color'))]
                  : def),
            [],
          ),
        ]),
      [],
    )

  console.log(colors)

  return <Color />
}

export default Colors
