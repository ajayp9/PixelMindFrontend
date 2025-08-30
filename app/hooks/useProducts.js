'use client'

import { useQuery } from '@tanstack/react-query'

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

const fetchCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return res.json()
}

const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  return res.json()
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  })
}