'use client'

import { useProduct } from '../hooks/useProducts'
import useStore from '../stores/useStore'

const ProductModal = ({ productId, isOpen, onClose }) => {
  const { data: product, isLoading } = useProduct(productId)
  const { addToCart } = useStore()

  if (!isOpen) return null
  if (isLoading) return <div>Loading...</div>

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative h-64 w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-blue-600 font-bold text-xl mb-4">${product.price}</p>
              <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
              
              <button 
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal