import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/product-list"
import ProductDetailsPage from "./pages/product-details"
import CartListPage from "./pages/cart-list"

function App() {
  return (
   <Fragment>
    <Routes>
      <Route path="/products" element={<ProductListPage/>}/>
      <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
      <Route path="/cart" element={<CartListPage/>}/>
    </Routes>
   </Fragment>
  )
}

export default App
