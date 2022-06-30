import './styles.css'

import React, { useEffect, useState } from 'react'
import { DarkModeContext } from './themeContext'

const ThemeProvider = ({
  children,
  theme,
  colorOverride = {},
}: {
  children: React.ReactNode
  theme: string
  colorOverride: {
    primary?: string
  }
}) => {
  const [colorOverrideStyles, setColorOverrideStyles] = useState({})

  useEffect(() => {
    let newColorOverrideStyles = {}

    Object.keys(colorOverride).map(color => {
      newColorOverrideStyles = {
        ...newColorOverrideStyles,
        [`--color-${color}`]: colorOverride[color as keyof typeof colorOverride],
      }
    })

    setColorOverrideStyles(newColorOverrideStyles)
  }, [colorOverride])

  return (
    <DarkModeContext.Provider value={theme === 'dark'}>
      <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'} style={colorOverrideStyles}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}

export default ThemeProvider
