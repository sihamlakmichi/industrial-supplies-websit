import Link from "next/link"
import { ArrowRight, Shield, Package, Palette, Box } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const categories = [
    {
      icon: Shield,
      title: "EPI",
      description: "Équipements de protection individuelle certifiés pour garantir la sécurité de vos équipes",
      link: "/produits?categorie=epi",
    },
    {
      icon: Package,
      title: "Fournitures Industrielles",
      description: "Outils et équipements professionnels pour optimiser votre production",
      link: "/produits?categorie=fournitures",
    },
    {
      icon: Palette,
      title: "Identité Visuelle",
      description: "Solutions de marquage et personnalisation pour votre entreprise",
      link: "/produits?categorie=identite",
    },
    {
      icon: Box,
      title: "Solutions d'Emballage",
      description: "Emballages robustes et adaptés à vos besoins logistiques",
      link: "/produits?categorie=emballage",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Votre partenaire pour la sécurité et l'efficacité au travail
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                GM INDUSTRY vous accompagne avec des solutions complètes en fournitures industrielles, EPI, identité
                visuelle et emballage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/produits">
                    Découvrir nos produits
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nos catégories de produits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Des solutions adaptées à chaque besoin de votre entreprise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <Link key={index} href={category.link}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">+10</div>
                <div className="text-lg font-medium mb-1">Ans d'expérience</div>
                <div className="text-sm text-muted-foreground">Au service des professionnels</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-lg font-medium mb-1">Produits disponibles</div>
                <div className="text-sm text-muted-foreground">Pour tous vos besoins industriels</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">24h</div>
                <div className="text-lg font-medium mb-1">Livraison rapide</div>
                <div className="text-sm text-muted-foreground">Service client réactif</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="bg-secondary text-secondary-foreground border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prêt à équiper votre entreprise ?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Découvrez notre catalogue complet et trouvez les solutions adaptées à vos besoins
                </p>
                <Button asChild size="lg" className="text-base">
                  <Link href="/produits">
                    Voir tous les produits
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
