import "../style/app.scss";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./Layout";
import { act, useEffect, useState } from "react";
import useRoutesWrapper from "../hooks/useRoutesWrapper";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Cart from "../pages/Cart";
// import NotFound from "../pages/NotFound";
// import { routes } from "../utils/routes";


function App() {
  // const routes = useRoutesWrapper();
  return (
    <ErrorBoundary>
  {/* <>{routes}</> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      
    </ErrorBoundary>
  );
}

export default App;
