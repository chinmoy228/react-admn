import "./App.scss";
import { Routes, Route } from "react-router-dom";

// import LayoutBox from './pages/LayoutBox';
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import SignIn from "./pages/SignIn";
import LayoutBox from "./pages/LayoutBox";
import DashBoard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import Page404 from "./pages/Page404";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormElement from "./pages/FormElement";
import Editor from "./pages/Editor";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";
import Profile from "./pages/Profile";
import UiElement from "./pages/UiElements";
import KanbanPage from "./pages/Kanban";

function App() {
  let location = useLocation();
  let pathname = location?.pathname?.split("/")[1];
  let title = pathname
    ? pathname.charAt(0).toUpperCase() + pathname.slice(1)
    : "";

  useEffect(() => {
    document.title = title ? title : "Dashboard";
  }, [title]);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />

      <Route path="/" exact element={<LayoutBox />}>
        <Route index element={<DashBoard />} />
        <Route path="/charts/:chartType" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/form" element={<FormElement />} />
        <Route path="/product" element={<Product />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/product/:status" element={<EditProduct />} />
        <Route path="/productDetails" element={<ProductDetail />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/uielements/:element" element={<UiElement />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
