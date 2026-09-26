import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import StickyBuyBar from "@/components/StickyBuyBar";
import { products } from "@/lib/products";

function findProductBySlug(slug: string) {
  return products.find(
    (item) =>
      item.slug === slug ||
      (item.id === "clove-lemon" && (slug === "clove-lemon" || slug === "chamomile-clove-lemon"))
  );
}

export function generateStaticParams() {
  const staticSlugs = products.map((product) => ({ slug: product.slug }));
  staticSlugs.push({ slug: "chamomile-clove-lemon" });
  return staticSlugs;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = findProductBySlug(params.slug);
  return product
    ? { title: `${product.name} | Origin Pure`, description: product.tagline }
    : { title: "Product | Origin Pure" };
}

export default function ProductRoute({ params }: { params: { slug: string } }) {
  const product = findProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <>
      <ProductPage product={product} />
      <StickyBuyBar amazonUrl={product.amazonUrl} productName={product.name} />
    </>
  );
}
