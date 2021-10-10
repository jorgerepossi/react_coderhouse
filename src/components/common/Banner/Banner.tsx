import { FC } from 'react'
import { Image } from '@chakra-ui/react'

interface Props {}

export const Banner: FC<Props> = () => {
  return (
    <Image
      src="http://jrepossi.com/musiccenter/img/bannerSlide.jpeg"
      width="100%"
    />
  )
}
