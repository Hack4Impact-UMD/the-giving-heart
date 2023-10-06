import React, { ElementType, Fragment } from 'react'

import { Image } from './Image'
import { Props } from './types'
import { Video } from './Video'

export const Media: React.FC<Props> = props => {
  const { className, resource, htmlElement = 'div' } = props

  const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video')
  const Tag = (htmlElement as ElementType) || Fragment

  return (
    //TODO: remove later
    <p>Media</p>
    // <Tag
    //   {...(htmlElement !== null
    //     ? {
    //         className,
    //       }
    //     : {})}
    // >
    //   {isVideo ? (
    //     <Video {...props} />
    //   ) : (
    //     <Image {...props} /> // eslint-disable-line
    //   )}
    // </Tag>
  )
}
