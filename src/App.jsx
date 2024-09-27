import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.jsx";
import Catalog from "../src/components/Catalog/Catalog.jsx";
import CatalogId from "../src/components/CatalogId/CatalogId.jsx";
import NotFound from "../src/components/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CatalogId />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
