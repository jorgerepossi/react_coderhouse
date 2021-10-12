import React, { FC, useState, useEffect } from 'react'
import { Container, Spinner, Flex, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { ItemDetail } from '../ItemDetail'
import { getFirestore } from '../../api/config'
import { Products } from '../../types/interfaces'
import useBooleanState from '../../hooks/useBooleanState'
import { ProductItem } from '../../types/types'

export const ItemDetailContainer: FC = () => {
  const { id }: { id: string } = useParams()
  const [product, setProduct] = useState<ProductItem | null>(null)
  const { state: isLoading, handleActive, handleInactive } = useBooleanState()

  const showItem = () => {
    handleActive()
    const db = getFirestore()
    const dbQuery = db
      .collection('items')
      .doc(id)
      .get()
      .then((data) => {
        if (!data.exists) {
          return console.warn('document not found for id: ', id)
        }

        const product: Products = data.data() as Products

        setProduct({
          id: data.id,
          ...product
        })
        handleInactive()
      })

    return dbQuery
  }

  useEffect(() => {
    showItem()
  }, [id])

  if (isLoading) {
    return (
      <Container maxWidth="container.xl">
        <Flex
          alignContent="center"
          alignItems="center"
          h="80vh"
          justifyContent="center"
        >
          <Spinner
            color="primary"
            emptyColor="gray.200"
            size="xl"
            speed="0.65s"
            thickness="4px"
          />
        </Flex>
      </Container>
    )
  }

  return (
    <Container maxWidth="container.xl">
      {product ? <ItemDetail item={product} /> : 'not found'}
      {!product && (
        <Box>
          <h1>Not found...</h1>
        </Box>
      )}
    </Container>
  )
}
export default ItemDetailContainer
