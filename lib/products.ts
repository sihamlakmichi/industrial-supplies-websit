export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: "epi" | "fournitures" | "identite" | "emballage"
  image: string
  inStock: boolean
}

export const products: Product[] = [
  // EPI
  {
    id: 1,
    name: "Casque de sécurité",
    description: "Casque de protection certifié EN 397, résistant aux chocs et à la pénétration",
    price: 24.99,
    category: "epi",
    image: "/yellow-safety-helmet.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Gants de protection",
    description: "Gants anti-coupure niveau 5, résistants et confortables",
    price: 12.99,
    category: "epi",
    image: "/safety-gloves.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Lunettes de protection",
    description: "Lunettes anti-rayures avec protection UV, conformes EN 166",
    price: 15.99,
    category: "epi",
    image: "/safety-glasses.png",
    inStock: true,
  },
  {
    id: 4,
    name: "Chaussures de sécurité",
    description: "Chaussures S3 avec coque de protection et semelle anti-perforation",
    price: 89.99,
    category: "epi",
    image: "/sturdy-safety-boots.png",
    inStock: true,
  },
  // Fournitures
  {
    id: 5,
    name: "Outillage professionnel",
    description: "Kit d'outils complet pour maintenance industrielle",
    price: 149.99,
    category: "fournitures",
    image: "/industrial-tools.jpg",
    inStock: true,
  },
  {
    id: 6,
    name: "Équipement de levage",
    description: "Sangles de levage 2 tonnes, certifiées CE",
    price: 34.99,
    category: "fournitures",
    image: "/lifting-equipment.jpg",
    inStock: true,
  },
  {
    id: 7,
    name: "Consommables industriels",
    description: "Lot de consommables pour atelier (vis, boulons, rondelles)",
    price: 29.99,
    category: "fournitures",
    image: "/industrial-supplies.png",
    inStock: false,
  },
  {
    id: 8,
    name: "Matériel de mesure",
    description: "Pied à coulisse numérique haute précision",
    price: 45.99,
    category: "fournitures",
    image: "/measuring-tools.png",
    inStock: true,
  },
  // Identité visuelle
  {
    id: 9,
    name: "Vêtements personnalisés",
    description: "Polo entreprise avec broderie logo (lot de 10)",
    price: 199.99,
    category: "identite",
    image: "/branded-clothing.jpg",
    inStock: true,
  },
  {
    id: 10,
    name: "Signalétique",
    description: "Panneaux de signalisation personnalisables",
    price: 39.99,
    category: "identite",
    image: "/signage.jpg",
    inStock: true,
  },
  {
    id: 11,
    name: "Autocollants professionnels",
    description: "Autocollants vinyle haute qualité (100 pièces)",
    price: 59.99,
    category: "identite",
    image: "/professional-stickers.jpg",
    inStock: true,
  },
  {
    id: 12,
    name: "Badges et porte-badges",
    description: "Kit badges personnalisés avec porte-badges (50 pièces)",
    price: 79.99,
    category: "identite",
    image: "/id-badges.jpg",
    inStock: true,
  },
  // Emballage
  {
    id: 13,
    name: "Cartons d'expédition",
    description: "Cartons double cannelure résistants (lot de 25)",
    price: 44.99,
    category: "emballage",
    image: "/shipping-boxes.jpg",
    inStock: true,
  },
  {
    id: 14,
    name: "Film étirable",
    description: "Film étirable industriel 500mm x 300m",
    price: 19.99,
    category: "emballage",
    image: "/clear-stretch-wrap-rolls.png",
    inStock: true,
  },
  {
    id: 15,
    name: "Ruban adhésif",
    description: "Ruban d'emballage haute résistance (pack de 6)",
    price: 14.99,
    category: "emballage",
    image: "/clear-packing-tape-roll.png",
    inStock: true,
  },
  {
    id: 16,
    name: "Calage et protection",
    description: "Papier bulle et calage pour protection optimale",
    price: 24.99,
    category: "emballage",
    image: "/bubble-wrap.png",
    inStock: true,
  },
]

export const categories = [
  { value: "epi", label: "EPI" },
  { value: "fournitures", label: "Fournitures Industrielles" },
  { value: "identite", label: "Identité Visuelle" },
  { value: "emballage", label: "Emballage" },
]
