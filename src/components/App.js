import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/items/:id" element={<ItemDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
