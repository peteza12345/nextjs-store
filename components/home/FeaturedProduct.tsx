import { fetchFeaturedProducts } from "@/utils/actions";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";

const FeaturedProduct = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Product' />
      <ProductsGrid products={products} />
    </section>
  );
};
export default FeaturedProduct;
