import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

type ShoppingCartContext = {
    cartQuantity: number
    cartItems: CartItem[]
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart',[])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function removeFromCart(id: number) {
        setCartItems(current => {
            return current.filter(item => item.id !== id)
        })
    }
    function increaseCartQuantity(id: number) {
        setCartItems(current => {
            // if item is not in cart
            if (current.find(item => item.id === id) == null) {
                return [...current, { id, quantity: 1 }]
            }
            // item is in cart
            else {
                return current.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else return item
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(current => {
            // if item is gonna get removed
            if (current.find(item => item.id === id)?.quantity == 1) {
                return current.filter(item => item.id !== id)
            }
            // item is in cart
            else {
                return current.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else return item
                })
            }
        })
    }

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)


    return <ShoppingCartContext.Provider value={{
        cartQuantity,
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
    }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
}