export type ProductReview = {
  name: string;
  productName: string;
  rating: number;
  reviewText: string;
  date: string;
};

export const productReviews: ProductReview[] = [
  // Lemon Fennel
  { name: "Derek L.", productName: "Lemon Fennel", rating: 5, reviewText: "This is one of the few teas that feels energizing but still calming. The lemongrass flavor is crisp and inviting.", date: "Feb 2026" },
  { name: "Ananya R.", productName: "Lemon Fennel", rating: 5, reviewText: "The natural sweetness from the star anise pairs so well with the fennel and lemon. It feels gentle on digestion after heavy meals.", date: "Mar 2026" },
  { name: "Marcus S.", productName: "Lemon Fennel", rating: 4, reviewText: "Really clean taste with no artificial notes. Steeps into a fragrant golden infusion that has replaced my evening coffee.", date: "Apr 2026" },

  // Lemon Ginger
  { name: "Alex P.", productName: "Lemon Ginger", rating: 5, reviewText: "The citrus notes are bright and the ginger gives it a really grounding finish. It has become my daily go-to after lunch.", date: "Apr 2026" },
  { name: "Ritu M.", productName: "Lemon Ginger", rating: 5, reviewText: "Just the right amount of ginger warmth without being harsh on the throat. Beautiful fresh lemon aroma.", date: "May 2026" },
  { name: "David K.", productName: "Lemon Ginger", rating: 4, reviewText: "Warming, clean, and soothing. Especially comforting on chilly mornings or whenever I feel sluggish.", date: "Mar 2026" },

  // Lemon Tulsi
  { name: "Nina S.", productName: "Lemon Tulsi", rating: 4, reviewText: "Smooth, fresh, and surprisingly soothing. I enjoy it both hot and iced, and it tastes clean without any artificial aftertaste.", date: "Mar 2026" },
  { name: "Vikram P.", productName: "Lemon Tulsi", rating: 5, reviewText: "The holy basil aroma is authentic and relaxing. You can genuinely taste the whole-leaf botanical purity.", date: "Apr 2026" },
  { name: "Clara B.", productName: "Lemon Tulsi", rating: 5, reviewText: "My favorite everyday herbal tea. Helps me unwind after long work days without making me feel drowsy.", date: "Feb 2026" },

  // Chamomile Lemon
  { name: "Priya V.", productName: "Chamomile Lemon", rating: 4, reviewText: "Great flavor and easy to steep. I especially like the citrus brightness and the fact that it feels gentle on the stomach.", date: "Jan 2026" },
  { name: "Liam N.", productName: "Chamomile Lemon", rating: 5, reviewText: "Whole chamomile blossoms and bright lemon zest. Extremely calming and part of my nightly bedtime routine.", date: "Feb 2026" },
  { name: "Sophie H.", productName: "Chamomile Lemon", rating: 5, reviewText: "No bitter aftertaste whatsoever. Deliciously floral and citrusy with whole plant-based pyramid bags.", date: "Mar 2026" },

  // Chamomile Clove Lemon / Clove Lemon
  { name: "Jordan M.", productName: "Chamomile Clove Lemon", rating: 4, reviewText: "I like how gentle it is on the stomach and how fresh it tastes without any bitterness. The clove and lemon really stand out.", date: "Oct 2025" },
  { name: "Tara B.", productName: "Chamomile Clove Lemon", rating: 5, reviewText: "The hint of clove adds a wonderfully cozy warmth that elevates the chamomile. Truly delicious.", date: "Jan 2026" },
  { name: "Neil K.", productName: "Chamomile Clove Lemon", rating: 5, reviewText: "Very balanced spices. Delicate chamomile upfront with a soothing, fragrant clove and lemon finish.", date: "Mar 2026" },

  // Hibiscus Lemon Balm
  { name: "Sam K.", productName: "Hibiscus Lemon Balm", rating: 5, reviewText: "Beautiful taste and a noticeable wellness feel. It sits well in my routine and tastes far more premium than expected.", date: "Dec 2025" },
  { name: "Maya J.", productName: "Hibiscus Lemon Balm", rating: 5, reviewText: "Vibrant ruby-red infusion with a tangy, fruity brightness. Tastes incredible iced on hot afternoons!", date: "Feb 2026" },
  { name: "Oliver G.", productName: "Hibiscus Lemon Balm", rating: 4, reviewText: "Crisp berry and hibiscus notes balanced by gentle lemon balm. Very refreshing and high quality.", date: "Apr 2026" },

  // Butterfly Pea Blue Tea
  { name: "Lena T.", productName: "Butterfly Pea Blue Tea", rating: 5, reviewText: "This tea feels premium from the first sip. The floral brightness is clean and the butterfly pea finish makes it feel deeply restorative.", date: "Nov 2025" },
  { name: "Arjun S.", productName: "Butterfly Pea Blue Tea", rating: 5, reviewText: "The vivid natural blue hue is mesmerizing, and adding a drop of lemon turns it into royal purple. Tastes floral, earthy, and clean.", date: "Jan 2026" },
  { name: "Chloe D.", productName: "Butterfly Pea Blue Tea", rating: 4, reviewText: "Subtle botanical sweetness and visually stunning. Guests are always amazed when I brew this.", date: "Mar 2026" },

  // Lemon Turmeric
  { name: "Harper W.", productName: "Lemon Turmeric", rating: 5, reviewText: "The golden turmeric warmth is perfectly balanced with citrus. It feels grounding and bright at the same time.", date: "Sep 2025" },
  { name: "Rohan D.", productName: "Lemon Turmeric", rating: 5, reviewText: "The cracked black pepper really makes the turmeric bioavailable without overpowering the refreshing lemon.", date: "Jan 2026" },
  { name: "Emma T.", productName: "Lemon Turmeric", rating: 4, reviewText: "A wonderful anti-inflammatory morning brew that actually tastes smooth and delightful.", date: "Mar 2026" },

  // Moringa Lemongrass
  { name: "Ram", productName: "Moringa Lemongrass", rating: 5, reviewText: "I look forward to this every evening. It feels light, clean, and calming without being overly sweet.", date: "May 2026" },
  { name: "Elliot B.", productName: "Moringa Lemongrass", rating: 5, reviewText: "A crisp, fresh ritual I genuinely look forward to. The lemongrass keeps it light and the moringa makes it feel deeply clean.", date: "Aug 2025" },
  { name: "Sneha M.", productName: "Moringa Lemongrass", rating: 5, reviewText: "Nutrient-packed moringa with uplifting lemongrass aroma. Leaves me feeling refreshed and revitalized.", date: "Feb 2026" },
];

export function getReviewsForProduct(productName: string): ProductReview[] {
  const norm = productName.toLowerCase();
  const matched = productReviews.filter((r) => {
    const rNorm = r.productName.toLowerCase();
    if (rNorm === norm) return true;
    if (norm.includes("clove") && norm.includes("lemon") && rNorm.includes("clove") && rNorm.includes("lemon")) return true;
    return false;
  });

  if (matched.length >= 3) return matched.slice(0, 3);
  if (matched.length > 0) {
    const fallback = productReviews.filter((r) => !matched.includes(r)).slice(0, 3 - matched.length);
    return [...matched, ...fallback];
  }
  return productReviews.slice(0, 3);
}
