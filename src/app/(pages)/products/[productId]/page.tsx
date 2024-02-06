'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

//components
import Container from 'components/common/Container'
import AppButton from 'components/common/AppButton'
//types
import { TProduct } from 'types'
//styles
import Image from 'next/image';

const ProductDetails = () => {
  const params = useParams()
  const [product, setProduct] = useState<TProduct>()

  const getProductDetails = useCallback(
    async (productId: string) => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        setProduct(await res.json())
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  useEffect(() => {
    getProductDetails(params.productId as string)
  }, [getProductDetails, params.productId])


  return (
    <Container className="max-w-[800px]">
      {!product ? (
        <p className="text-center text-primary">Loading...</p>
      ) : (
        <div className='flex flex-col gap-4'>
          <Image
            src={product.image}
            alt={product.title}
            width={1000}
            height={1000}
            className='width-100 h-[400px] object-contain bg-white p-6 rounded-md shadow-md'
          />
          <strong className="text-primary">{product.title}</strong>
          <p className="text-primary">{product.description}</p>
          <p className="text-primary">{product.price}</p>
          <AppButton
            className="bg-inverted text-primary hover:bg-secondary-2 hover:text-inverted"
            loaderColor="bg-black"
            onClick={() => alert('Subscribe to "Code with Bawa"')}
          >
            Add to wishlist
          </AppButton>
          <AppButton
            className="bg-secondary-1 text-inverted hover:bg-secondary-2"
            loaderColor="bg-black"
            onClick={() =>
              alert('Subscribe to "Code with Bawa"')
            }
          >
            Add To Cart
          </AppButton>
        </div>
      )}
    </Container>
  )
}

export default ProductDetails
