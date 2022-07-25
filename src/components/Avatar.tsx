interface AvatarProps {
  src?: string
  hasBorder?: boolean
}

export function Avatar({
  src = 'https://github.com/josesouzaa.png',
  hasBorder = false
}: AvatarProps) {
  return (
    <img
      className={`w-12 h-12 rounded-lg ${
        hasBorder
          ? 'border-4 border-brand-gray-800 ring-2 ring-brand-green-500 box-content'
          : ''
      } `}
      src={src}
    />
  )
}
