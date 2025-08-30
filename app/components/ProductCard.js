'use client'

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <div className="relative h-48 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain p-4 w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard