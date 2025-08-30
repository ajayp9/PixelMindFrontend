'use client'

import useStore from '../stores/useStore'
import { useCategories } from '../hooks/useProducts'

const SearchFilter = () => {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useStore()
  const { data: categories, isLoading } = useCategories()

  if (isLoading) return <div>Loading categories...</div>

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border rounded-md flex-grow"
      />
      
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-2 border rounded-md"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchFilter