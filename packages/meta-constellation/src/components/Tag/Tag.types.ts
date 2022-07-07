import { FC } from 'react'

type TagProps = {
  large?: boolean
  type: 'info' | 'infoalt' | 'success' | 'warning' | 'error'
  value: string
}

type TagComponent = FC<TagProps>

export type { TagComponent, TagProps }
