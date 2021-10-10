import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

interface Props {
  item?: string
}

export const Breadcrumbs = ({ item }: Props) => {
  return (
    <Breadcrumb
      mb={5}
      mt={5}
      separator={<BiChevronRight color="gray.500" />}
      spacing="8px"
    >
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Text textTransform="capitalize">
          <Link to={`/category/${item}`}>{item}</Link>
        </Text>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
