import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({
  src = 'https://github.com/josesouzaa.png',
  alt = 'José de Souza',
  title = 'José de Souza',
  hasBorder = false,
  ...props
}: AvatarProps) {
  return (
    <img
      className={`w-12 h-12 rounded-lg ${
        hasBorder
          ? 'border-4 border-brand-gray-800 ring-2 ring-brand-green-500 box-content'
          : ''
      } `}
      src={src}
      alt={alt}
      title={title}
      {...props}
    />
  )
}
