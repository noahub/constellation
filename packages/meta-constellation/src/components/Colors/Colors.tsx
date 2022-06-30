import React, { useRef, useEffect, useState, useContext } from 'react'

import { ColorsComponent } from './Slider.types'
import { getCSSVars } from './Colors.util'
import { DarkModeContext } from '../ThemeProvider'

const Color = ({ colorVar }: { colorVar: string }) => {
  const colorRef = useRef<HTMLDivElement>(null)
  const [color, setColor] = useState({ title: '', id: '', value: '' })
  const isDark = useContext(DarkModeContext)

  useEffect(() => {
    const id = colorVar.split('--color-')[1]
    let value = ''
    if (colorRef.current) {
      value = window.getComputedStyle(colorRef.current).getPropertyValue(colorVar)
    }

    setColor({
      id,
      title: id.replace(/-/g, ' '),
      value,
    })
  }, [colorRef, colorVar, isDark])

  return (
    <div className='drop-shadow-control bg-background w-48 overflow-hidden'>
      <div className='w-full h-24' style={{ backgroundColor: `var(${colorVar})` }} ref={colorRef} />
      <p className='capitalize text-title py-1 ml-2'>{color.title}</p>
      <p className='text-body pb-1.5 ml-2 text-sm'>ID: {color.id}</p>
      <p className='text-body pb-1.5 ml-2 text-sm'>{color.value}</p>
    </div>
  )
}

const ColorSection = ({ colors, title }: { colors: [string]; title: string }) => {
  return (
    <div className='max-w-4xl flex-shrink-0'>
      <h2>{title}</h2>

      <div className='flex flex-wrap gap-4 mt-5'>
        {colors?.map((color, index) => (
          <Color colorVar={color} key={index} />
        ))}
      </div>
    </div>
  )
}

const Colors: ColorsComponent = () => {
  const [colorsState, setColorsState] = useState<{ title: string; colors: [string] }[]>()

  useEffect(() => {
    const semanticColors = getCSSVars('.theme-dark')
    const colors = getCSSVars(':root')

    setColorsState([
      { title: 'Semantic Colors', colors: semanticColors },
      {
        title: 'Overlay',
        colors: colors.filter(color => color.includes('--color-overlay')) as [string],
      },
      {
        title: 'Blue',
        colors: colors.filter(color => color.includes('--color-blue')) as [string],
      },
      {
        title: 'Green',
        colors: colors.filter(color => color.includes('--color-green')) as [string],
      },
      {
        title: 'Red',
        colors: colors.filter(color => color.includes('--color-red')) as [string],
      },
      {
        title: 'Orange',
        colors: colors.filter(color => color.includes('--color-orange')) as [string],
      },
      {
        title: 'Purple',
        colors: colors.filter(color => color.includes('--color-purple')) as [string],
      },
      {
        title: 'Teal',
        colors: colors.filter(color => color.includes('--color-teal')) as [string],
      },
      {
        title: 'Grey',
        colors: colors.filter(color => color.includes('--color-grey')) as [string],
      },
    ])
  }, [])

  return (
    <div className='flex flex-row flex-nowrap'>
      {colorsState?.map((colors, index) => (
        <ColorSection colors={colors.colors} title={colors.title} key={index} />
      ))}
    </div>
  )
}

export default Colors
