import React, { useEffect, useState } from 'react'

const ThemeProvider = ({
  children,
  theme,
  colorOverride = {},
}: {
  children: React.ReactNode
  colorOverride: {
    primary?: string
  }
  theme: string
}) => {
  const [colorOverrideStyles, setColorOverrideStyles] = useState({})

  useEffect(() => {
    const newColorOverrideStyles = {} as { [key: string]: string }

    Object.keys(colorOverride).map(
      // eslint-disable-next-line no-return-assign
      (color) =>
        (newColorOverrideStyles[`--color-${color}`] =
          colorOverride[color as keyof typeof colorOverride]!),
    )

    setColorOverrideStyles(newColorOverrideStyles)
  }, [colorOverride])

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'} style={colorOverrideStyles}>
      {children}
    </div>
  )
}

export default ThemeProvider
