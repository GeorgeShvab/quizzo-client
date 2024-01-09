import { FC, ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  className?: string
}

const Avatar: FC<Props> = ({ src, className = '', ...rest }) => {
  return <img src={src} className={`avatar ${className}`} height="100%" width="100%" {...rest} />
}

export default Avatar
