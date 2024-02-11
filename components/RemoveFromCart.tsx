"use client"

import { useCartStore } from "@/store"

import { Button } from "./ui/button"
import { ProductContent } from "@/typings/productTyping"


function RemoveFromCart({product}: {product: ProductContent}) {
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const handleRemove = () => {
        removeFromCart(product)
    }
  return (
    <Button
        className="bg-walmart ☐ hover:bg-walmart/50"
        onClick={handleRemove}
    >
        -
    </Button>
  )
}

export default RemoveFromCart