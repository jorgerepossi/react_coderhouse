import React from 'react'
import { Skeleton, SkeletonText, Stack, SimpleGrid } from '@chakra-ui/react'

interface Data {
  cant: number
}
export const SkeletonProd = ({ cant }: Data) => {
  const products = new Array(cant).fill(true).map((_, i) => i)

  return (
    <SimpleGrid
      columns={cant}
      gap={6}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr) )"
      w="100%"
    >
      {products.map((i) => (
        <Stack key={i}>
          <SkeletonText mb="2" mt="4" noOfLines={1} spacing="4" />
          <Stack spacing={8}>
            <Skeleton height={200} w="100%" />
          </Stack>
          <Stack paddingY={2}>
            <SkeletonText mb="2" mt="4" noOfLines={2} spacing="2" />
          </Stack>
          <Stack>
            <Skeleton height={30} w="100%" />
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  )
}
