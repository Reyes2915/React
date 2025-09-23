import { CustomJumbotron } from "../../components/CustomJumbotron";
import { CustomPagination } from "@/components/CustomPagination";
import { ProductsGrid } from "../../components/ProductsGrid";
import { CustomHeader } from "../../components/CustomHeader";
import { useProducts } from "@/shop/hooks/useProducts";

export const HomePage = () => {
  const {data}=useProducts();
  return (
    <>
      <CustomHeader></CustomHeader>
      <CustomJumbotron
        title="Todos los productos"
        subTitle=""
      ></CustomJumbotron>

      <ProductsGrid products={data?.products || []}></ProductsGrid>
      <CustomPagination totalPages={data?.pages || 0}></CustomPagination>
    </>
  );
};
