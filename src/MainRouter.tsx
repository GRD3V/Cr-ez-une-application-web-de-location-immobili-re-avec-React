import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Product from "./pages/Product";
import ErrorNotFound from "./pages/ErrorNotFound";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/product/:productId/*" element={<Product />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
}
