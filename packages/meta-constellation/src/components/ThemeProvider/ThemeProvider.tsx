import './styles.css'

import React, { useEffect, useMemo, useState } from 'react'

import { InterFontProvider } from '../Font'

import { DarkModeContext } from './themeContext'

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
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
    } else {
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
    }

    const overrideColors = Object.keys(colorOverride)
    const oldOverrides = Object.values(document.body.style).filter(
      value =>
        value.length > 0 &&
        value.startsWith('--color-') &&
        !overrideColors.includes(value.split('--color-')[1]),
    )

    oldOverrides.forEach(oldOverride => {
      document.body.style.removeProperty(oldOverride)
    })

    overrideColors.forEach(color => {
      document.body.style.setProperty(
        `--color-${color}`,
        colorOverride[color as keyof typeof colorOverride],
      )
    })
  }, [colorOverride, theme])

  return <DarkModeContext.Provider value={theme === 'dark'}>{children}</DarkModeContext.Provider>
}

export default ThemeProvider
