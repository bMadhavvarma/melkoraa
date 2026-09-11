'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Product } from './catalog'

type CartLine = Product & { quantity: number; size?: string; color?: string }
type StoreContextValue = {
  cart: CartLine[]
  wishlist: string[]
  cartCount: number
  addToCart: (product: Product, variant?: { size?: string; color?: string }) => void
  updateCartQuantity: (productId: string, variant: { size?: string; color?: string } | undefined, amount: number) => void
  removeFromCart: (productId: string, variant?: { size?: string; color?: string }) => void
  toggleWishlist: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    try {
      setCart(JSON.parse(window.localStorage.getItem('melkoraa-cart') || '[]'))
      setWishlist(JSON.parse(window.localStorage.getItem('melkoraa-wishlist') || '[]'))
    } catch { /* use clean state when storage is unavailable */ }
  }, [])
  useEffect(() => { window.localStorage.setItem('melkoraa-cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { window.localStorage.setItem('melkoraa-wishlist', JSON.stringify(wishlist)) }, [wishlist])

  const value = useMemo<StoreContextValue>(() => ({
    cart, wishlist, cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    addToCart: (product, variant) => { setCart((current) => { const found = current.find((item) => item.id === product.id && item.size === variant?.size && item.color === variant?.color); return found ? current.map((item) => item.id === found.id && item.size === found.size && item.color === found.color ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, ...variant, quantity: 1 }] }) },
    updateCartQuantity: (productId, variant, amount) => setCart((current) => current.map((item) => item.id === productId && item.size === variant?.size && item.color === variant?.color ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0)),
    removeFromCart: (productId, variant) => setCart((current) => current.filter((item) => !(item.id === productId && item.size === variant?.size && item.color === variant?.color))),
    toggleWishlist: (productId) => setWishlist((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]),
    isWishlisted: (productId) => wishlist.includes(productId), cartOpen, setCartOpen,
  }), [cart, wishlist, cartOpen])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used inside StoreProvider')
  return context
}
