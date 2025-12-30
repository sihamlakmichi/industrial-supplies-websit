import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GM INDUSTRY</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre partenaire de confiance pour la sécurité et l'efficacité au travail
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/produits?categorie=epi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  EPI
                </Link>
              </li>
              <li>
                <Link
                  href="/produits?categorie=fournitures"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fournitures Industrielles
                </Link>
              </li>
              <li>
                <Link
                  href="/produits?categorie=identite"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Identité Visuelle
                </Link>
              </li>
              <li>
                <Link
                  href="/produits?categorie=emballage"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Emballage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@gmindustry.fr</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GM INDUSTRY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
