import React, { useRef, useEffect, useState, useContext } from 'react'
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

export default Color
