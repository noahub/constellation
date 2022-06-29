import React from 'react'

import { ColorsComponent } from './Slider.types'
import { getCSSVars } from './Colors.util'

const Color = ({ colorVar }: { colorVar: string }) => {
  const color = colorVar.split('--color-')[1].replace('-', ' ')

  return (
    <div className='bg-white'>
      <div className='w-24 h-12' style={{ backgroundColor: `var(${colorVar})` }} />
      <p className='capitalize'>{color}</p>
    </div>
  )
}

const ColorSection = ({ colors, title }: { colors: [string]; title: string }) => {
  return (
    <div>
      <h2>{title}</h2>

      <div>
        {colors.map((color, index) => (
          <Color colorVar={color} key={index} />
        ))}
      </div>
    </div>
  )
}

const Colors: ColorsComponent = () => {
  const semanticColors = getCSSVars('.theme-dark')
  const colors = getCSSVars(':root')

  return <ColorSection colors={semanticColors} title='Semantic Colors' />
}

export default Colors
