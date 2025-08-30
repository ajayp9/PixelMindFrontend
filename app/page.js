'use client'

import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import useStore from './stores/useStore'
import ProductCard from './components/ProductCard'
import SearchFilter from './components/SearchFilter'
import ProductModal from './components/ProductModal'
import AddProductForm from './components/AddProductForm'
import CartIcon from './components/CartIcon'

export default function Home() {
  const { data: products, isLoading, error } = useProducts()
  const { searchQuery, selectedCategory } = useStore()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isLoading) return <div className="p-6">Loading products...</div>
  if (error) return <div className="p-6">Error loading products: {error.message}</div>

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-Commerce Store</h1>
      
      <SearchFilter />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onProductClick={handleProductClick}
          />
        ))}
      </div>
      
      <AddProductForm />
      
      {selectedProduct && (
        <ProductModal 
          productId={selectedProduct.id}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      
      <CartIcon />
    </div>
  )
}