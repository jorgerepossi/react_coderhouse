import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import { ItemList } from '../ItemList/ItemList'
import { SkeletonProd } from '../common/SkeletonProd'
import { getFirestore } from '../../api/config'
import { Breadcrumbs } from '../Breadcrumb/Breadcrumb'
import { ProductItem } from '../../types/types'
import Head from '../common/Head/Head'

export const ItemListContainer: FC = () => {
  const db = getFirestore()
  const dbCollection = db.collection('items')

  const [product, setProduct] = useState<ProductItem[]>([])
  const { categorie }: { categorie: string } = useParams()
  const showFilterCategories = () => {
    const initialCategorie =
      categorie !== undefined
        ? dbCollection.where('category', '==', categorie)
        : dbCollection

    const dbQuery = initialCategorie
      .get()
      .then((data: { size: number; docs: any[] }) => {
        if (data.size === 0) {
          console.warn('No hay datos')
        }

        const dbData = data?.docs.map((item: { id: any; data: () => any }) => {
          return { id: item.id, ...item.data() }
        })

        setProduct(dbData)
      })

    return dbQuery
  }

  useEffect(() => {
    showFilterCategories()
  }, [categorie])
  const title = categorie

  return (
    <Container marginBottom={20} maxWidth="container.xl">
      <Head title={` Music Center`} />
      <Breadcrumbs item={categorie} />
      {product.length ? (
        <ItemList dataMap={product} />
      ) : (
        <SkeletonProd cant={8} />
      )}
    </Container>
  )
}
