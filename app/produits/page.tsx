"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryBar } from "@/components/category-bar"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Skeleton } from "@/components/ui/skeleton"

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get("categorie")

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || "all")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      return categoryMatch
    })
  }, [selectedCategory])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      <main className="flex-1">
        <div className="bg-muted/50 border-b border-border py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Nos produits</h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} disponible
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Aucun produit ne correspond à vos critères de recherche</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-96 w-full" />
              ))}
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  )
}
