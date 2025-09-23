import { CustomPagination } from "@/components/CustomPagination";
import { CustomHeader } from "@/components/Header";
import { CustomJumbotron } from "../../components/CustomJumbotron";
import { ProductsGrid } from "../../components/ProductsGrid";
import { useParams } from "react-router";
import { useProducts } from "@/shop/hooks/useProducts";

export const GenderPage = () => {
  const { gender } = useParams();
  const {data}=useProducts();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";
  return (
    <>
      <CustomHeader></CustomHeader>
      <CustomJumbotron
        title={`Productos para ${genderLabel}`}
        subTitle=""
      ></CustomJumbotron>

      <ProductsGrid products={data?.products || []}></ProductsGrid>
      <CustomPagination totalPages={data?.pages || 1}></CustomPagination>
    </>
  );
};
