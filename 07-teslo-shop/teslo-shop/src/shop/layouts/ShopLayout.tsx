import { Outlet } from "react-router";
import { CustomFooter } from "./components/CustomFooter";

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Outlet></Outlet>
      <CustomFooter></CustomFooter>
    </div>
  );
};
