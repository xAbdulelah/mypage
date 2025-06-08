import ProductList from "@/components/shared/product/product-list";

import { getLatestProducts } from "@/lib/actions/product.actions";


const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="px-6 wrapper ">
      <ProductList
        data={latestProducts}
        title="new araaive"
        limit={4}
      ></ProductList>
    </div>
  );
};

export default Homepage;
