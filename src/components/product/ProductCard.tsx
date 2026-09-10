'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string | null
  }
}

export function ProductCard({ product }: ProductProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    })
  }

  return (
    <Link href={`/products/${product.id}`} className="group relative block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="aspect-h-3 aspect-w-4 bg-gray-200">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col min-h-[140px]">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 mb-2 flex-grow">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}
