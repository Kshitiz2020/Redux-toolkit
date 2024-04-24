import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Components/Product";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import RootLayout from "./Components/RootLayout";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
