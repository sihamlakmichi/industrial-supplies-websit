"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    toast({
      title: "Produit ajouté",
      description: `${product.name} a été ajouté au panier`,
    })
  }

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        {!product.inStock && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            Rupture de stock
          </Badge>
        )}
      </div>
      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="text-2xl font-bold text-primary">{product.price.toFixed(2)}€</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart} disabled={!product.inStock}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  )
}
