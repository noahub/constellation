import './styles.css'

import React, { useEffect, useState } from 'react'

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
    let newColorOverrideStyles = {} as { [key: string]: string }

    Object.keys(colorOverride).map(
      (color) => (newColorOverrideStyles[`--color-${color}`] = colorOverride[color as keyof typeof colorOverride]),
    )

    setColorOverrideStyles(newColorOverrideStyles)
  }, [colorOverride])

  console.log(colorOverrideStyles)

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'} style={colorOverrideStyles}>
      {children}
    </div>
  )
}

export default ThemeProvider
