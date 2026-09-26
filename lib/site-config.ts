/**
 * Single source of truth for Origin Pure brand constants, global numbers, and product catalog.
 * No hardcoded numbers or product facts should live in individual components.
 */

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "CALMING" | "GROUNDING" | "DIGESTIVE" | "REFRESHING" | "ENERGIZING";
  caffeineFree: boolean;
  shortDescription: string;
  price: string;
  bags: number;
  rating: number;
  reviewCount: number;
  amazonUrl: string;
  packshot: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  rating: number;
  ratingFormatted: string;
  reviewCount: string;
  reviewCountNumber: number;
  cupsBrewedFormatted: string;
  price: string;
  priceNumber: number;
  bagsPerPack: number;
  bagsPerPackFormatted: string;
  returnsText: string;
  amazonUrl: string;
  products: ProductItem[];
}

const DEFAULT_AMAZON_URL =
  process.env.NEXT_PUBLIC_AMAZON_URL || "https://www.amazon.in/dp/B0HG4S9PD2";

export const siteConfig: SiteConfig = {
  name: "Origin Pure",
  tagline: "Natural Whole-Botanical Infusions",
  rating: 4.6,
  ratingFormatted: "4.6",
  reviewCount: "2,100+",
  reviewCountNumber: 2100,
  cupsBrewedFormatted: "50,000+",
  price: "₹399",
  priceNumber: 399,
  bagsPerPack: 25,
  bagsPerPackFormatted: "25 pyramid bags",
  returnsText: "7-day easy returns",
  amazonUrl: DEFAULT_AMAZON_URL,

  products: [
    {
      id: "butterfly-pea-blue-tea",
      slug: "butterfly-pea-blue-tea",
      name: "Butterfly Pea Blue Tea",
      category: "CALMING",
      caffeineFree: true,
      shortDescription: "Vibrant blue petals with a calming floral finish.",
      price: "₹399",
      bags: 25,
      rating: 4.6,
      reviewCount: 238,
      amazonUrl: "https://www.amazon.in/dp/B0HG4S9PD2",
      packshot: "/prdimg/ButterflyPea/1.png",
    },
    {
      id: "lemon-tulsi",
      slug: "lemon-tulsi",
      name: "Lemon Tulsi",
      category: "GROUNDING",
      caffeineFree: false,
      shortDescription: "Clean lemon energy with tulsi’s grounding herbal finish.",
      price: "₹399",
      bags: 25,
      rating: 4.6,
      reviewCount: 176,
      amazonUrl: "https://www.amazon.in/dp/B0HG4LRXX1",
      packshot: "/prdimg/LemonTulsi/1.png",
    },
    {
      id: "chamomile-lemon",
      slug: "chamomile-lemon",
      name: "Chamomile Lemon",
      category: "CALMING",
      caffeineFree: true,
      shortDescription: "Soft chamomile and bright citrus for evening ease.",
      price: "₹399",
      bags: 25,
      rating: 4.6,
      reviewCount: 162,
      amazonUrl: "https://www.amazon.in/dp/B0HG3CGBP5",
      packshot: "/prdimg/ChamomileLemon/1.png",
    },
    {
      id: "clove-lemon",
      slug: "clove-lemon",
      name: "Clove Lemon",
      category: "GROUNDING",
      caffeineFree: false,
      shortDescription: "Warm clove spice balanced by a sparkling citrus lift.",
      price: "₹399",
      bags: 25,
      rating: 4.5,
      reviewCount: 119,
      amazonUrl: "https://www.amazon.in/dp/B0HG36XHC3",
      packshot: "/prdimg/CloveLemon/1.png",
    },
    {
      id: "hibiscus-lemon-balm",
      slug: "hibiscus-lemon-balm",
      name: "Hibiscus Lemon Balm",
      category: "REFRESHING",
      caffeineFree: false,
      shortDescription: "A juicy hibiscus sip with a bright, herbal finish.",
      price: "₹399",
      bags: 25,
      rating: 4.7,
      reviewCount: 207,
      amazonUrl: "https://www.amazon.in/dp/B0HG1Q7CT2",
      packshot: "/prdimg/HibiscusLemonBalm/1.png",
    },
    {
      id: "lemon-turmeric",
      slug: "lemon-turmeric",
      name: "Lemon Turmeric",
      category: "GROUNDING",
      caffeineFree: false,
      shortDescription: "Citrus brightness layered with golden turmeric warmth.",
      price: "₹399",
      bags: 25,
      rating: 4.7,
      reviewCount: 154,
      amazonUrl: "https://www.amazon.in/dp/B0HG1XQTMJ",
      packshot: "/prdimg/LemonTurmeric/1.png",
    },
    {
      id: "lemon-fennel",
      slug: "lemon-fennel",
      name: "Lemon Fennel",
      category: "DIGESTIVE",
      caffeineFree: false,
      shortDescription: "Crisp lemon layered with anise-like fennel brightness.",
      price: "₹399",
      bags: 25,
      rating: 4.5,
      reviewCount: 131,
      amazonUrl: "https://www.amazon.in/dp/B0HG9J3ZDX",
      packshot: "/prdimg/LemonFennel/1.png",
    },
    {
      id: "lemon-ginger",
      slug: "lemon-ginger",
      name: "Lemon Ginger",
      category: "DIGESTIVE",
      caffeineFree: false,
      shortDescription: "A zingy citrus tea with warming ginger depth.",
      price: "₹399",
      bags: 25,
      rating: 4.8,
      reviewCount: 286,
      amazonUrl: "https://www.amazon.in/dp/B0HG9CJN2H",
      packshot: "/prdimg/LemonGinger/1.png",
    },
    {
      id: "moringa-lemongrass",
      slug: "moringa-lemongrass",
      name: "Moringa Lemongrass",
      category: "ENERGIZING",
      caffeineFree: false,
      shortDescription: "Fresh lemongrass and moringa for a clean, uplifted ritual.",
      price: "₹399",
      bags: 25,
      rating: 4.8,
      reviewCount: 312,
      amazonUrl: "https://www.amazon.in/dp/B0HG4NN2V7",
      packshot: "/prdimg/MoringaLemonGrass/1.png",
    },
  ],
};

export const products = siteConfig.products;
