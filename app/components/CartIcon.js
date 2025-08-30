'use client'

import useStore from '../stores/useStore'

const CartIcon = () => {
  const { cart } = useStore()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
      <span className="text-lg font-semibold">{itemCount}</span>
    </div>
  )
}

export default CartIcon