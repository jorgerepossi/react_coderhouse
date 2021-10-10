import { Grid } from '@chakra-ui/react'

import { Item } from '../Item'
import { ProductItem } from '../../types/types'

export const ItemList = ({ dataMap }: { dataMap: ProductItem[] }) => {
  return (
    <Grid gap={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr) )">
      {dataMap.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </Grid>
  )
}

export default ItemList
