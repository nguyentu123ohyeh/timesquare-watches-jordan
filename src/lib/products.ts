import ga2100_1a1 from "@/assets/p-ga2100-1a1.jpg";
import ga2100_1a from "@/assets/p-ga2100-1a.jpg";
import ecb2200 from "@/assets/p-ecb2200.jpg";
import efrs108d from "@/assets/p-efrs108d.jpg";
import efr526l from "@/assets/p-efr526l.jpg";
import efv550p from "@/assets/p-efv550p.jpg";
import mtp1384l from "@/assets/p-mtp1384l.jpg";

export type Product = {
  id: string;
  name: string;
  model: string;
  category: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
};

export const CATEGORIES = [
  "Luxury Watches",
  "Casual Watches",
  "Gift Watches",
  "Men's Watches",
  "Women's Watches",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "ga-2100-1a1dr",
    name: "Octagon Carbon Core",
    model: "GA-2100-1A1DR",
    category: "Casual Watches",
    description:
      "Shock-resistant carbon core guard case with analog-digital display and 200m water resistance.",
    price: 129,
    image: ga2100_1a1,
    featured: true,
  },
  {
    id: "ga-2100-1adr",
    name: "Octagon Sport Edition",
    model: "GA-2100-1ADR",
    category: "Men's Watches",
    description:
      "Slim octagonal bezel with bold accents, world time and stopwatch functions for daily wear.",
    price: 119,
    image: ga2100_1a,
    featured: true,
  },
  {
    id: "ecb-2200htr-1adr",
    name: "Solar Connect Chronograph",
    model: "ECB-2200HTR-1ADR",
    category: "Luxury Watches",
    description:
      "Tough solar movement with smartphone link, stainless steel bracelet and technical multi-dial layout.",
    price: 289,
    image: ecb2200,
    featured: true,
  },
  {
    id: "efr-s108d-7avudf",
    name: "Edifice Steel Classic",
    model: "EFR-S108D-7AVUDF",
    category: "Men's Watches",
    description:
      "Solar-powered chronograph with clean white dial and solid stainless steel bracelet.",
    price: 199,
    image: efrs108d,
    featured: true,
  },
  {
    id: "efr-526l-1avudf",
    name: "Edifice Leather Chronograph",
    model: "EFR-526L-1AVUDF",
    category: "Luxury Watches",
    description:
      "Black dial chronograph with genuine leather strap and 1/20 second stopwatch precision.",
    price: 179,
    image: efr526l,
  },
  {
    id: "efv-550p-1avudf",
    name: "Minimal Dress Automatic",
    model: "EFV-550P-1AVUDF",
    category: "Gift Watches",
    description:
      "Refined slim case and pure black dial — an elegant everyday dress watch and ideal gift.",
    price: 149,
    image: efv550p,
  },
  {
    id: "mtp-1384l-1avdf",
    name: "Heritage Gold Slim",
    model: "MTP-1384L-1AVDF",
    category: "Women's Watches",
    description:
      "Gold-tone case with white dial and soft leather strap, designed for timeless elegance.",
    price: 99,
    image: mtp1384l,
    featured: true,
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
