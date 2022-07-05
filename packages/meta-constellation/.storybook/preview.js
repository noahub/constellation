import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import React from 'react'
import { ThemeProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

export const globalTypes = {
  colorOverride: {
    name: 'Color Override',
    description: 'Sets the color override.',
    defaultValue: {},
    control: { type: 'object' },
  },
}

const withDisplayGlobals = withGlobals((Story, globalValues) => {
  const darkMode = useDarkMode()
  return (
    <ThemeProvider theme={darkMode ? 'dark' : 'light'} colorOverride={globalValues.colorOverride}>
      <Story />
    </ThemeProvider>
  )
})
export const decorators = [withDisplayGlobals]
