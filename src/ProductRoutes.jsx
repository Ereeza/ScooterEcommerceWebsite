import { Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { NewProduct } from "./pages/NewProduct";
import { ProductLayout } from "./ProductLayout";

export function ProductRoutes() {
  return (
    <>
      <Routes>
        <Route element={<ProductLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<Product />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  );
}
