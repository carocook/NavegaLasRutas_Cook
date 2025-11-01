import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <NavBar carrito={carrito} setCarrito={setCarrito} />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenida a nuestra tienda"
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/category/:category"
          element={
            <ItemListContainer
              greeting="Descubrí la magia de nuestras joyas"
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ItemDetailContainer carrito={carrito} setCarrito={setCarrito} />
          }
        />

        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </>
  );
}

export default App;
