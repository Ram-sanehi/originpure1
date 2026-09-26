export type ProductIngredient = {
  name: string;
  note: string;
  image?: string;
};

export type ProductFact = {
  label: string;
  value: string;
};

export type ProductImageSet = {
  hero: string;
  ingredients: string;
  brewSteps: string;
  specs: string;
  gallery: string[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  amazonUrl: string;
  color?: string;
  ingredients: ProductIngredient[];
  facts: ProductFact[];
  images: ProductImageSet;
};

const PRODUCT_FOLDER_MAP: Record<string, string> = {
  "Butterfly Pea Blue Tea": "ButterflyPea",
  "Chamomile Lemon": "ChamomileLemon",
  "Chamomile Clove Lemon": "CloveLemon",
  "Clove Lemon": "CloveLemon",
  "Hibiscus Lemon Balm": "HibiscusLemonBalm",
  "Lemon Fennel": "LemonFennel",
  "Lemon Ginger": "LemonGinger",
  "Lemon Tulsi": "LemonTulsi",
  "Lemon Turmeric": "LemonTurmeric",
  "Moringa Lemongrass": "MoringaLemonGrass",
};

export function buildProductImageSet(folderName: string): ProductImageSet {
  const gallery = [1, 2, 3, 4].map((index) => `/prdimg/${folderName}/${index}.png`);
  const cutoutHero = `/prdimg/${folderName}/cutout_opt.png`;

  return {
    hero: cutoutHero,
    ingredients: gallery[1],
    brewSteps: gallery[2],
    specs: gallery[3],
    gallery: [cutoutHero, gallery[1], gallery[2], gallery[3]],
  };
}

export function getProductImageSet(productName: string): ProductImageSet {
  const resolvedFolder = PRODUCT_FOLDER_MAP[productName] ?? "ButterflyPea";
  return buildProductImageSet(resolvedFolder);
}

export const products: Product[] = [
  {
    id: "butterfly-pea-blue-tea",
    name: "Butterfly Pea Blue Tea",
    slug: "butterfly-pea-blue-tea",
    tagline: "Vibrant blue petals with a calming floral finish.",
    amazonUrl: "https://www.amazon.in/dp/B0HG9CJN2H",
    color: "#EAF3EA",
    ingredients: [
      { name: "Butterfly Pea Flowers", note: "Known for its natural blue hue and antioxidant properties.", image: "/ingredients/butterfly_pea_flowers.png" },
      { name: "Lemongrass", note: "Adds a refreshing citrus flavour and natural zest.", image: "/ingredients/lemongrass.png" },
      { name: "Spearmint Leaves", note: "Provides a cool, refreshing taste and soothing aroma.", image: "/ingredients/spearmint_leaves.png" },
      { name: "Dandelion Root", note: "Supports digestion and overall wellness naturally.", image: "/ingredients/dandelion_root.png" },
      { name: "Dried Ginger", note: "Adds warmth and supports healthy digestion.", image: "/ingredients/dried_ginger.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "3–5 min" },
      { label: "Format", value: "Plant-based" },
    ],
    images: getProductImageSet("Butterfly Pea Blue Tea"),
  },
  {
    id: "lemon-tulsi",
    name: "Lemon Tulsi",
    slug: "lemon-tulsi",
    tagline: "Clean lemon energy with tulsi’s grounding herbal finish.",
    amazonUrl: "https://www.amazon.in/dp/B0HG1Q7CT2",
    color: "#EDF5E7",
    ingredients: [
      { name: "Lemon", note: "Adds a refreshing citrus flavour and natural zest.", image: "/ingredients/fresh_lemon.png" },
      { name: "Tulsi (Holy Basil)", note: "Known for its immunity boosting and adaptogenic properties.", image: "/ingredients/tulsi_holy_basil.png" },
      { name: "Green Tea", note: "Rich in antioxidants, supports metabolism and overall wellness.", image: "/ingredients/green_tea_leaves.png" },
      { name: "Aromatic Basil", note: "Enhances flavour with a subtle herbal aroma.", image: "/ingredients/aromatic_basil.png" },
      { name: "Citrus Notes", note: "Uplifting natural citrus notes for a refreshing tea experience.", image: "/ingredients/citrus_purple_basil.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "3–4 min" },
      { label: "Format", value: "Daily ritual" },
    ],
    images: getProductImageSet("Lemon Tulsi"),
  },
  {
    id: "chamomile-lemon",
    name: "Chamomile Lemon",
    slug: "chamomile-lemon",
    tagline: "Soft chamomile and bright citrus for evening ease.",
    amazonUrl: "https://www.amazon.in/dp/B0HG4S9PD2",
    color: "#F5E7B9",
    ingredients: [
      { name: "Lemon", note: "Adds a refreshing citrus flavour and natural zest.", image: "/ingredients/fresh_lemon.png" },
      { name: "Ginger", note: "Known for its soothing warmth, supports digestion and immunity.", image: "/ingredients/dried_ginger.png" },
      { name: "Chamomile", note: "Soft floral notes designed for evening ease.", image: "/ingredients/chamomile_flowers.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "4 min" },
      { label: "Format", value: "Loose leaf & tea bags" },
    ],
    images: getProductImageSet("Chamomile Lemon"),
  },
  {
    id: "clove-lemon",
    name: "Chamomile Clove Lemon",
    slug: "clove-lemon",
    tagline: "Floral warmth with mild spice — soothing chamomile, warming clove, and bright citrus zest.",
    amazonUrl: "https://www.amazon.in/dp/B0HG9J3ZDX",
    color: "#F7E9D3",
    ingredients: [
      { name: "Chamomile", note: "Known for its calming properties and gentle floral aroma.", image: "/ingredients/chamomile_flowers.png" },
      { name: "Lemon", note: "Adds a refreshing citrus flavour and a natural zest to the blend.", image: "/ingredients/fresh_lemon.png" },
      { name: "Clove", note: "Brings a warm, aromatic spice note for a perfectly balanced infusion.", image: "/ingredients/clove_spice.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "50 g" },
      { label: "Steep", value: "3–4 min" },
      { label: "Format", value: "Herbal Infusion" },
    ],
    images: getProductImageSet("Chamomile Clove Lemon"),
  },
  {
    id: "hibiscus-lemon-balm",
    name: "Hibiscus Lemon Balm",
    slug: "hibiscus-lemon-balm",
    tagline: "A juicy hibiscus sip with a bright, herbal finish.",
    amazonUrl: "https://www.amazon.in/dp/B0HG4LRXX1",
    color: "#F5E6D9",
    ingredients: [
      { name: "Hibiscus", note: "Adds a rich floral flavour, natural colour and is known for its antioxidant properties.", image: "/ingredients/hibiscus_petals.png" },
      { name: "Berry Flavour", note: "Delivers a sweet, tangy berry taste that perfectly complements hibiscus.", image: "/ingredients/wild_berries.png" },
      { name: "Lemon Peel", note: "Adds a refreshing citrus note and enhances the overall flavour.", image: "/ingredients/lemon_peel.png" },
      { name: "Green Tea", note: "A gentle source of antioxidants, supports wellness and gives a smooth, light taste.", image: "/ingredients/green_tea_leaves.png" },
      { name: "Ginger", note: "Provides a warm, soothing touch and supports digestion naturally.", image: "/ingredients/dried_ginger.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "4–5 min" },
      { label: "Format", value: "Naturally vibrant" },
    ],
    images: getProductImageSet("Hibiscus Lemon Balm"),
  },
  {
    id: "lemon-turmeric",
    name: "Lemon Turmeric",
    slug: "lemon-turmeric",
    tagline: "Citrus brightness layered with golden turmeric warmth.",
    amazonUrl: "https://www.amazon.in/dp/B0HG36XHC3",
    color: "#F3E3B8",
    ingredients: [
      { name: "Crushed Turmeric Root", note: "A golden spice known for its natural goodness and wellness benefits.", image: "/ingredients/turmeric_root.png" },
      { name: "Dried Lemon Slices", note: "Adds a refreshing citrus flavour and natural zest to the blend.", image: "/ingredients/dried_lemon_slices.png" },
      { name: "Crushed Black Pepper", note: "Enhances absorption and adds a mild, warming spice.", image: "/ingredients/crushed_black_pepper.png" },
      { name: "Green Tea Leaves", note: "Rich in antioxidants, supports metabolism and overall wellness.", image: "/ingredients/green_tea_leaves.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "4 min" },
      { label: "Format", value: "Golden warmth" },
    ],
    images: getProductImageSet("Lemon Turmeric"),
  },
  {
    id: "lemon-fennel",
    name: "Lemon Fennel",
    slug: "lemon-fennel",
    tagline: "Crisp lemon layered with anise-like fennel brightness.",
    amazonUrl: "https://www.amazon.in/dp/B0HG4NN2V7",
    color: "#F5E7B0",
    ingredients: [
      { name: "Lemon", note: "Adds a refreshing citrus flavour and natural zest.", image: "/ingredients/fresh_lemon.png" },
      { name: "Fennel", note: "Known for its soothing aroma and digestive benefits.", image: "/ingredients/fennel_seeds.png" },
      { name: "Star Anise", note: "Adds a warm, aromatic spice note and natural sweetness.", image: "/ingredients/star_anise.png" },
      { name: "Green Tea Leaves", note: "Rich in antioxidants, supports metabolism and overall wellness.", image: "/ingredients/green_tea_leaves.png" },
      { name: "Dried Lemon Slices", note: "Enhances the blend with natural citrus aroma and flavour.", image: "/ingredients/dried_lemon_slices.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "3–4 min" },
      { label: "Format", value: "Fresh & bright" },
    ],
    images: getProductImageSet("Lemon Fennel"),
  },
  {
    id: "lemon-ginger",
    name: "Lemon Ginger",
    slug: "lemon-ginger",
    tagline: "A zingy citrus tea with warming ginger depth.",
    amazonUrl: "https://www.amazon.in/dp/B0HG1XQTMJ",
    color: "#F4E4B0",
    ingredients: [
      { name: "Lemon Peel", note: "Adds a refreshing citrus flavour and natural zest.", image: "/ingredients/fresh_lemon.png" },
      { name: "Dried Ginger", note: "Provides a gentle warmth and soothing spice.", image: "/ingredients/dried_ginger.png" },
      { name: "Turmeric", note: "Adds gentle earthiness and warmth.", image: "/ingredients/turmeric_root.png" },
      { name: "Green Tea", note: "Keeps the blend smooth and balanced.", image: "/ingredients/green_tea_leaves.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "3–5 min" },
      { label: "Format", value: "Warming spice" },
    ],
    images: getProductImageSet("Lemon Ginger"),
  },
  {
    id: "moringa-lemongrass",
    name: "Moringa Lemongrass",
    slug: "moringa-lemongrass",
    tagline: "Fresh lemongrass and moringa for a clean, uplifted ritual.",
    amazonUrl: "https://www.amazon.in/dp/B0HG3CGBP5",
    color: "#EAF4E6",
    ingredients: [
      { name: "Lemongrass", note: "Gives a refreshing citrus flavour and supports digestion.", image: "/ingredients/lemongrass.png" },
      { name: "Moringa Leaves", note: "Rich in nutrients and antioxidants, supports energy and overall wellness.", image: "/ingredients/moringa_leaves.png" },
      { name: "Green Tea Leaves", note: "Packed with antioxidants, supports metabolism and promotes well-being.", image: "/ingredients/green_tea_leaves.png" },
    ],
    facts: [
      { label: "Tea bags", value: "20 bags" },
      { label: "Net weight", value: "40 g" },
      { label: "Steep", value: "3–5 min" },
      { label: "Format", value: "Daily green tea" },
    ],
    images: getProductImageSet("Moringa Lemongrass"),
  },
];
