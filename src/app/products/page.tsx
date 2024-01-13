'use client'
import React, { useEffect, useState } from 'react'

//components
import Container from 'components/common/Container'
import ProductItem from 'components/common/ProductItem'
//types
import { TProduct } from 'types'

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      setProducts(await res.json() as TProduct[])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      {!products || products.length < 1 ? (
        <p className="text-center text-primary">No Product found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 20,
          }}
        >
          {products?.map((product, index) => (
            <ProductItem
              key={product.id + index}
              product={product}
              onWishlistClick={() => true}
            />
          ))}
        </div>
      )}
    </Container>
  )
}

export default Products
