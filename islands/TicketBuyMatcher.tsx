import SelectorButton from "$store/components/ui/SelectorButton.tsx";
import AddToCartButton from "$store/components/product/AddToCartButton.tsx";

import { Runtime } from "deco-sites/std/runtime.ts";
import { useCallback, useEffect, useState } from "preact/hooks";
import { useOffer } from "$store/sdk/useOffer.ts";

import type { Product, ProductLeaf } from "deco-sites/std/commerce/types.ts";

export interface Props {
  products: Product[] | null;
}

export default function TicketSelector() {
  const [products, setProducts] = useState<Product[] | null>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(
    undefined,
  );
  const [selectedSubproduct, setSelectedSubproduct] = useState<
    string | undefined
  >(undefined);
  const [quantity, setQuantity] = useState<string | undefined>("1");

  const fetchData = useCallback(async () => {
    const data = await Runtime.invoke({
      key: "deco-sites/std/loaders/vtex/legacy/productList.ts",
    }) || [];

    setProducts(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const productsName = products?.map((item) => item.name);

  let subProducts: ProductLeaf[] | null = [];

  if (selectedProduct) {
    const selectedProductData = products?.find((item) =>
      item.name === selectedProduct
    );

    if (selectedProductData && selectedProductData.isVariantOf) {
      const subProductList = selectedProductData.isVariantOf.hasVariant || [];
      subProducts = subProductList;
    }
  }

  const filteredSubproduct = subProducts.find((item) =>
    item.name === selectedSubproduct
  );

  const { listPrice, price, installments, seller, availability } = useOffer(
    filteredSubproduct?.offers,
  );

  return (
    <div class="flex flex-col gap-3 text-center min-w-[310px] max-w-[310px] h-[340px] bg-midnightblue rounded-xl backdrop-blur-xl bg-opacity-75 items-center justify-center">
      <label for="ticket-selector" class="text-xl text-white">
        Get your tickets now
      </label>

      <div id="ticket-selector" class="flex flex-col gap-5 w-full px-7">
        <SelectorButton
          title="Location"
          options={productsName}
          setSelected={setSelectedProduct}
        />
        <SelectorButton
          title="Package"
          options={subProducts?.map((item) => item.name)}
          setSelected={setSelectedSubproduct}
        />
        <SelectorButton
          title="How many"
          options={["1", "2", "3", "4", "5"]}
          setSelected={setQuantity}
        />
      </div>

      <AddToCartButton
        skuId={filteredSubproduct?.productID ?? ""}
        sellerId={seller ?? ""}
        name={filteredSubproduct?.name ?? ""}
        discount={price && listPrice ? listPrice - price : 0}
        price={price ?? 0}
        productGroupId={""}
        quantity={Number(quantity) ?? 1}
        type="ticket-selector"
      />
    </div>
  );
}
