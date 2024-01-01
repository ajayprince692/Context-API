import React, { useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Payment from "./components/Payment";
import CardComponents from "./Utils/CardComponents";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardComponents></CardComponents>}/>
          <Route path="/payment/:productId" element={<Payment data={data} />} />
        </Routes>
      </BrowserRouter>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
