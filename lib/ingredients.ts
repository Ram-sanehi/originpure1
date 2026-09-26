export interface BotanicalIngredient {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: string;
  category: "Citrus & Zest" | "Herbal & Floral" | "Spices & Roots" | "Antioxidant Greens";
  blends: string[];
}

export interface BlendIngredientsInfo {
  id: string;
  name: string;
  folder: string;
  artwork: string;
  headline: string;
  subtext: string;
  ingredients: {
    name: string;
    description: string;
    image: string;
    badge: string;
  }[];
}

export const BLEND_INGREDIENTS: BlendIngredientsInfo[] = [
  {
    id: "moringa-lemongrass",
    name: "Moringa Lemongrass",
    folder: "MoringaLemonGrass",
    artwork: "/prdimg/MoringaLemonGrass/2.png",
    headline: "Three quiet essentials.",
    subtext: "Fresh lemongrass and nutrient-rich moringa layered over green tea leaves for everyday calm and vitality.",
    ingredients: [
      {
        name: "Lemongrass",
        description: "Gives a refreshing citrus flavour and supports digestion.",
        image: "/ingredients/lemongrass.png",
        badge: "Digestive Care",
      },
      {
        name: "Moringa Leaves",
        description: "Rich in nutrients and antioxidants, supports energy and overall wellness.",
        image: "/ingredients/moringa_leaves.png",
        badge: "Daily Vitality",
      },
      {
        name: "Green Tea Leaves",
        description: "Packed with antioxidants, supports metabolism and promotes well-being.",
        image: "/ingredients/green_tea_leaves.png",
        badge: "Smooth Metabolism",
      },
    ],
  },
  {
    id: "butterfly-pea-blue-tea",
    name: "Butterfly Pea Blue Tea",
    folder: "ButterflyPea",
    artwork: "/prdimg/ButterflyPea/2.png",
    headline: "Five vibrant botanicals.",
    subtext: "Naturally blue butterfly pea blossoms blended with cooling spearmint, dandelion root, and lemongrass.",
    ingredients: [
      {
        name: "Butterfly Pea Flowers",
        description: "Known for its natural blue hue and antioxidant properties.",
        image: "/ingredients/butterfly_pea_flowers.png",
        badge: "Natural Blue Hue",
      },
      {
        name: "Lemongrass",
        description: "Adds a refreshing citrus flavour and natural zest.",
        image: "/ingredients/lemongrass.png",
        badge: "Citrus Zest",
      },
      {
        name: "Spearmint Leaves",
        description: "Provides a cool, refreshing taste and soothing aroma.",
        image: "/ingredients/spearmint_leaves.png",
        badge: "Cooling Aroma",
      },
      {
        name: "Dandelion Root",
        description: "Supports digestion and overall wellness naturally.",
        image: "/ingredients/dandelion_root.png",
        badge: "Digestive Wellness",
      },
      {
        name: "Dried Ginger",
        description: "Adds warmth and supports healthy digestion.",
        image: "/ingredients/dried_ginger.png",
        badge: "Gentle Warmth",
      },
    ],
  },
  {
    id: "hibiscus-lemon-balm",
    name: "Hibiscus Lemon Balm",
    folder: "HibiscusLemonBalm",
    artwork: "/prdimg/HibiscusLemonBalm/2.png",
    headline: "Five floral & berry infusions.",
    subtext: "Tart, crimson hibiscus calyces paired with sweet wild berry notes, lemon peel, and whole leaf green tea.",
    ingredients: [
      {
        name: "Hibiscus",
        description: "Adds a rich floral flavour, natural colour and is known for its antioxidant properties.",
        image: "/ingredients/hibiscus_petals.png",
        badge: "Antioxidant Rich",
      },
      {
        name: "Berry Flavour",
        description: "Delivers a sweet, tangy berry taste that perfectly complements hibiscus.",
        image: "/ingredients/wild_berries.png",
        badge: "Tangy Berry",
      },
      {
        name: "Lemon Peel",
        description: "Adds a refreshing citrus note and enhances the overall flavour.",
        image: "/ingredients/lemon_peel.png",
        badge: "Citrus Note",
      },
      {
        name: "Green Tea",
        description: "A gentle source of antioxidants, supports wellness and gives a smooth, light taste.",
        image: "/ingredients/green_tea_leaves.png",
        badge: "Light & Smooth",
      },
      {
        name: "Ginger",
        description: "Provides a warm, soothing touch and supports digestion naturally.",
        image: "/ingredients/dried_ginger.png",
        badge: "Digestive Touch",
      },
    ],
  },
  {
    id: "lemon-tulsi",
    name: "Lemon Tulsi",
    folder: "LemonTulsi",
    artwork: "/prdimg/LemonTulsi/2.png",
    headline: "Five sacred herbs & botanicals.",
    subtext: "Holy basil (Tulsi) revered for adaptogenic calm, lifted with fresh lemon and aromatic basil leaves.",
    ingredients: [
      {
        name: "Lemon",
        description: "Adds a refreshing citrus flavour and natural zest.",
        image: "/ingredients/fresh_lemon.png",
        badge: "Natural Zest",
      },
      {
        name: "Tulsi (Holy Basil)",
        description: "Known for its immunity boosting and adaptogenic properties.",
        image: "/ingredients/tulsi_holy_basil.png",
        badge: "Adaptogen Support",
      },
      {
        name: "Green Tea",
        description: "Rich in antioxidants, supports metabolism and overall wellness.",
        image: "/ingredients/green_tea_leaves.png",
        badge: "Clean Energy",
      },
      {
        name: "Aromatic Basil",
        description: "Enhances flavour with a subtle herbal aroma.",
        image: "/ingredients/aromatic_basil.png",
        badge: "Herbal Aroma",
      },
      {
        name: "Citrus Notes",
        description: "Uplifting natural citrus notes for a refreshing tea experience.",
        image: "/ingredients/citrus_purple_basil.png",
        badge: "Citrus Lift",
      },
    ],
  },
  {
    id: "lemon-turmeric",
    name: "Lemon Turmeric",
    folder: "LemonTurmeric",
    artwork: "/prdimg/LemonTurmeric/2.png",
    headline: "Five golden roots & spices.",
    subtext: "Earthy golden turmeric root activated with crushed black pepper and brightened by dried lemon slices.",
    ingredients: [
      {
        name: "Crushed Turmeric Root",
        description: "A golden spice known for its natural goodness and wellness benefits.",
        image: "/ingredients/turmeric_root.png",
        badge: "Golden Goodness",
      },
      {
        name: "Dried Lemon Slices",
        description: "Adds a refreshing citrus flavour and natural zest to the blend.",
        image: "/ingredients/dried_lemon_slices.png",
        badge: "Citrus Zest",
      },
      {
        name: "Crushed Black Pepper",
        description: "Enhances absorption and adds a mild, warming spice.",
        image: "/ingredients/crushed_black_pepper.png",
        badge: "Absorption Boost",
      },
      {
        name: "Green Tea Leaves",
        description: "Rich in antioxidants, supports metabolism and overall wellness.",
        image: "/ingredients/green_tea_leaves.png",
        badge: "Polished Finish",
      },
    ],
  },
  {
    id: "chamomile-lemon",
    name: "Chamomile Lemon",
    folder: "ChamomileLemon",
    artwork: "/prdimg/ChamomileLemon/2.png",
    headline: "Two soothing elements.",
    subtext: "Golden whole chamomile blossoms infused with zesty fresh lemon and ginger warmth for nighttime ease.",
    ingredients: [
      {
        name: "Lemon",
        description: "Adds a refreshing citrus flavour and natural zest.",
        image: "/ingredients/fresh_lemon.png",
        badge: "Refreshing Zest",
      },
      {
        name: "Ginger",
        description: "Known for its soothing warmth, supports digestion and immunity.",
        image: "/ingredients/dried_ginger.png",
        badge: "Soothing Warmth",
      },
    ],
  },
  {
    id: "lemon-fennel",
    name: "Lemon Fennel",
    folder: "LemonFennel",
    artwork: "/prdimg/LemonFennel/2.png",
    headline: "Five soothing seeds & citrus.",
    subtext: "Fragrant sweet fennel seeds combined with star anise spice, dried lemon, and green tea leaves.",
    ingredients: [
      {
        name: "Lemon",
        description: "Adds a refreshing citrus flavour and natural zest.",
        image: "/ingredients/fresh_lemon.png",
        badge: "Citrus Zest",
      },
      {
        name: "Fennel",
        description: "Known for its soothing aroma and digestive benefits.",
        image: "/ingredients/fennel_seeds.png",
        badge: "Digestive Soothe",
      },
      {
        name: "Star Anise",
        description: "Adds a warm, aromatic spice note and natural sweetness.",
        image: "/ingredients/star_anise.png",
        badge: "Natural Sweetness",
      },
      {
        name: "Green Tea Leaves",
        description: "Rich in antioxidants, supports metabolism and overall wellness.",
        image: "/ingredients/green_tea_leaves.png",
        badge: "Antioxidants",
      },
      {
        name: "Dried Lemon Slices",
        description: "Enhances the blend with natural citrus aroma and flavour.",
        image: "/ingredients/dried_lemon_slices.png",
        badge: "Citrus Aroma",
      },
    ],
  },
  {
    id: "lemon-ginger",
    name: "Lemon Ginger",
    folder: "LemonGinger",
    artwork: "/prdimg/LemonGinger/2.png",
    headline: "Two warming essentials.",
    subtext: "Sun-ripened citrus peel coupled with dried root ginger for a fiery, restorative daily cup.",
    ingredients: [
      {
        name: "Lemon Peel",
        description: "Adds a refreshing citrus flavour and natural zest.",
        image: "/ingredients/fresh_lemon.png",
        badge: "Citrus Flavour",
      },
      {
        name: "Dried Ginger",
        description: "Provides a gentle warmth and soothing spice.",
        image: "/ingredients/dried_ginger.png",
        badge: "Soothing Spice",
      },
    ],
  },
  {
    id: "clove-lemon",
    name: "Chamomile Clove Lemon",
    folder: "CloveLemon",
    artwork: "/prdimg/CloveLemon/2.png",
    headline: "Three aromatic spices & blossoms.",
    subtext: "A comforting blend of hand-selected cloves, chamomile blossoms, and lively sun-kissed lemon.",
    ingredients: [
      {
        name: "Chamomile",
        description: "Known for its calming properties and gentle floral aroma.",
        image: "/ingredients/chamomile_flowers.png",
        badge: "Gentle Floral",
      },
      {
        name: "Lemon",
        description: "Adds a refreshing citrus flavour and a natural zest to the blend.",
        image: "/ingredients/fresh_lemon.png",
        badge: "Natural Zest",
      },
      {
        name: "Clove",
        description: "Brings a warm, aromatic spice note for a perfectly balanced infusion.",
        image: "/ingredients/clove_spice.png",
        badge: "Warm Aromatic",
      },
    ],
  },
];

export const ALL_UNIQUE_BOTANICALS: BotanicalIngredient[] = [
  {
    id: "lemongrass",
    name: "Lemongrass",
    description: "Crisp stalk botanicals delivering clean citrus lift, digestive comfort, and natural aroma.",
    image: "/ingredients/lemongrass.png",
    badge: "Digestive Care",
    category: "Citrus & Zest",
    blends: ["Moringa Lemongrass", "Butterfly Pea Blue Tea"],
  },
  {
    id: "moringa-leaves",
    name: "Moringa Leaves",
    description: "Nutrient-dense superleaf rich in plant antioxidants that support steady energy and cellular wellness.",
    image: "/ingredients/moringa_leaves.png",
    badge: "Daily Vitality",
    category: "Antioxidant Greens",
    blends: ["Moringa Lemongrass"],
  },
  {
    id: "green-tea-leaves",
    name: "Green Tea Leaves",
    description: "Carefully sourced whole leaf green tea providing smooth caffeine, clean metabolism, and gentle antioxidants.",
    image: "/ingredients/green_tea_leaves.png",
    badge: "Smooth Metabolism",
    category: "Antioxidant Greens",
    blends: ["Moringa Lemongrass", "Lemon Tulsi", "Lemon Turmeric", "Lemon Fennel", "Hibiscus Lemon Balm"],
  },
  {
    id: "butterfly-pea-flowers",
    name: "Butterfly Pea Flowers",
    description: "Vibrant indigo petals celebrated for their mesmerizing blue infusion and rich flavonoid profile.",
    image: "/ingredients/butterfly_pea_flowers.png",
    badge: "Natural Blue Hue",
    category: "Herbal & Floral",
    blends: ["Butterfly Pea Blue Tea"],
  },
  {
    id: "spearmint-leaves",
    name: "Spearmint Leaves",
    description: "Cooling garden leaves imparting an instantly refreshing palate cleanse and calming breath.",
    image: "/ingredients/spearmint_leaves.png",
    badge: "Cooling Aroma",
    category: "Herbal & Floral",
    blends: ["Butterfly Pea Blue Tea"],
  },
  {
    id: "dandelion-root",
    name: "Dandelion Root",
    description: "Traditional herbal root known to gently stimulate digestion and nurture everyday inner balance.",
    image: "/ingredients/dandelion_root.png",
    badge: "Digestive Wellness",
    category: "Spices & Roots",
    blends: ["Butterfly Pea Blue Tea"],
  },
  {
    id: "turmeric-root",
    name: "Crushed Turmeric Root",
    description: "Golden root packed with natural curcumin for restorative body warmth and vibrant vitality.",
    image: "/ingredients/turmeric_root.png",
    badge: "Golden Goodness",
    category: "Spices & Roots",
    blends: ["Lemon Turmeric"],
  },
  {
    id: "chamomile-flowers",
    name: "Chamomile Blossoms",
    description: "Delicate honey-scented daisy flowers revered for tranquil evenings, muscle ease, and serene sleep.",
    image: "/ingredients/chamomile_flowers.png",
    badge: "Floral Calm",
    category: "Herbal & Floral",
    blends: ["Chamomile Lemon", "Chamomile Clove Lemon", "Clove Lemon"],
  },
  {
    id: "clove-spice",
    name: "Aromatic Clove",
    description: "Intensely fragrant spice buds lending deep aromatic comfort, eugenol warmth, and soothing notes.",
    image: "/ingredients/clove_spice.png",
    badge: "Warm Spice",
    category: "Spices & Roots",
    blends: ["Chamomile Clove Lemon", "Clove Lemon"],
  },
  {
    id: "hibiscus-petals",
    name: "Hibiscus Calyces",
    description: "Jewel-toned ruby petals creating a juicy, cranberry-like tang enriched with Vitamin C.",
    image: "/ingredients/hibiscus_petals.png",
    badge: "Antioxidant Rich",
    category: "Herbal & Floral",
    blends: ["Hibiscus Lemon Balm"],
  },
  {
    id: "wild-berries",
    name: "Wild Berry Notes",
    description: "Sweet and tangy woodland berry essence that perfectly balances tart floral hibiscus.",
    image: "/ingredients/wild_berries.png",
    badge: "Tangy Berry",
    category: "Citrus & Zest",
    blends: ["Hibiscus Lemon Balm"],
  },
  {
    id: "tulsi-holy-basil",
    name: "Tulsi (Holy Basil)",
    description: "The revered 'Queen of Herbs', offering adaptogenic resilience against everyday fatigue and stress.",
    image: "/ingredients/tulsi_holy_basil.png",
    badge: "Adaptogen Support",
    category: "Herbal & Floral",
    blends: ["Lemon Tulsi"],
  },
  {
    id: "fresh-lemon",
    name: "Fresh Lemon & Peel",
    description: "Sun-drenched citrus bursting with sparkling limonene notes that brighten every single infusion.",
    image: "/ingredients/fresh_lemon.png",
    badge: "Natural Zest",
    category: "Citrus & Zest",
    blends: ["Chamomile Lemon", "Lemon Tulsi", "Lemon Ginger", "Lemon Fennel", "Chamomile Clove Lemon", "Clove Lemon"],
  },
  {
    id: "dried-ginger",
    name: "Dried Ginger Root",
    description: "Warming organic rhizome that provides a comforting digestive glow and gentle spicy finish.",
    image: "/ingredients/dried_ginger.png",
    badge: "Gentle Warmth",
    category: "Spices & Roots",
    blends: ["Lemon Ginger", "Butterfly Pea Blue Tea", "Chamomile Lemon", "Hibiscus Lemon Balm"],
  },
  {
    id: "fennel-seeds",
    name: "Sweet Fennel Seeds",
    description: "Anise-sweet aromatic seeds traditionally steeped post-meal to soothe digestion and freshen the breath.",
    image: "/ingredients/fennel_seeds.png",
    badge: "Digestive Soothe",
    category: "Spices & Roots",
    blends: ["Lemon Fennel"],
  },
  {
    id: "star-anise",
    name: "Whole Star Anise",
    description: "Striking eight-pointed pods releasing sweet licorice warmth and therapeutic botanical depth.",
    image: "/ingredients/star_anise.png",
    badge: "Natural Sweetness",
    category: "Spices & Roots",
    blends: ["Lemon Fennel"],
  },
  {
    id: "dried-lemon-slices",
    name: "Dried Lemon Slices",
    description: "Dehydrated whole lemon rounds slowly releasing essential oils and authentic citrus sweetness.",
    image: "/ingredients/dried_lemon_slices.png",
    badge: "Aromatic Citrus",
    category: "Citrus & Zest",
    blends: ["Lemon Fennel", "Lemon Turmeric"],
  },
  {
    id: "crushed-black-pepper",
    name: "Crushed Black Pepper",
    description: "A pinch of piperine spice that enhances the bioavailability and absorption of active turmeric curcumin.",
    image: "/ingredients/crushed_black_pepper.png",
    badge: "Absorption Boost",
    category: "Spices & Roots",
    blends: ["Lemon Turmeric"],
  },
];
