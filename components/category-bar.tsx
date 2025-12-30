"use client"

import { useRef, useState, useEffect } from "react"
import { categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CategoryBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryBar({ selectedCategory, onCategoryChange }: CategoryBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
      setTimeout(checkScroll, 300)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative flex items-center py-4">
          {/* Left arrow button - visible only on mobile when can scroll */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollLeft}
              className="absolute left-0 z-10 md:hidden bg-background/80 backdrop-blur"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Categories container with hidden scrollbar */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-8 md:px-0 -mx-8 md:mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => onCategoryChange("all")}
              className={cn(
                "whitespace-nowrap flex-shrink-0",
                selectedCategory === "all" && "bg-primary text-primary-foreground",
              )}
            >
              Tous les produits
            </Button>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => onCategoryChange(category.value)}
                className={cn(
                  "whitespace-nowrap flex-shrink-0",
                  selectedCategory === category.value && "bg-primary text-primary-foreground",
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Right arrow button - visible only on mobile when can scroll */}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollRight}
              className="absolute right-0 z-10 md:hidden bg-background/80 backdrop-blur"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
