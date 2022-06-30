import { fontContext } from 'components/base/Font/Font.context'
import { useContext } from 'react'

const useFont = () => useContext(fontContext)

export { useFont }
