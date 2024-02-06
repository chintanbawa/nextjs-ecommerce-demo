import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HeartIcon } from '@heroicons/react/24/solid'

//types
import { TProduct } from 'types'

const ProductItem = ({
  product,
  onWishlistClick,
}: {
  product: TProduct
  onWishlistClick?: () => void
}) => {
  const router = useRouter()
  const [isInWishlist, setIsInWishlist] = useState(false)
  return (
    <div
      className="w-full bg-inverted rounded-md shadow-lg overflow-hidden cursor-pointer md:max-w-xs hover:scale-105"
      onClick={() => router.push(`products/${product.id}`)}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={1000}
        height={1000}
        className='width-100 aspect-square object-contain bg-white p-3'
      />
      <div className="p-2 flex flex-row">
        <div className="flex-1">
          <strong className="text-primary line-clamp-1">
            {product.title}
          </strong>
          <span className="text-secondary line-clamp-2">
            {product.description}
          </span>
          <span className="text-primary line-clamp-1">
            {product.price}
          </span>
        </div>
        {onWishlistClick && (
          <HeartIcon
            className={`w-5 h-5 ${isInWishlist ? 'text-inverted' : 'text-primary'
              }`}
            onClick={(e) => {
              e.stopPropagation()
              setIsInWishlist(!isInWishlist)
              onWishlistClick()
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ProductItem
