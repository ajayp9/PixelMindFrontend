'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCategories } from '../hooks/useProducts'

const productSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  price: z.number().min(0.01, 'Price must be greater than 0'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  image: z.string().url('Must be a valid URL'),
})

const AddProductForm = () => {
  const { data: categories, isLoading } = useCategories()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (data) => {
    // Simulate form submission
    console.log('Form submitted:', data)
    alert('Product added successfully! (This is a mock operation)')
    reset()
  }

  if (isLoading) return <div>Loading categories...</div>

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input 
            {...register('title')} 
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input 
            type="number"
            step="0.01"
            {...register('price', { valueAsNumber: true })} 
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea 
            {...register('description')} 
            className="w-full px-3 py-2 border rounded-md"
            rows="3"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select 
            {...register('category')} 
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input 
            {...register('image')} 
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProductForm