import { FC } from 'react'
import { Helmet } from 'react-helmet'
interface Props {
  title: string
}

export const Head: FC<Props> = ({ title }: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link href="https://react-coderhouse.vercel.app/" rel="canonical" />
    </Helmet>
  )
}
export default Head
