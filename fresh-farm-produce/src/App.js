import "./App.css";
import NavScrollExample from "./components/NavScrollExample";
import Footer from "./components/Footer";
import AppRouterPages from "./router";
import ProfilePage from "./Pages/ProfilePage";
import NotificationPage from "./Pages/NotificationPage";
import LogoutPage from "./Pages/LogoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import ManageProduct from "./Pages/ManageProduct";
import OrderList from "./Pages/OrderList";
import CardContainer from "./components/CardCon";
import ParentPage from "./Pages/ParentPage";

function App() {
  return (
    <>
      <div className="background">
        <Router>
          <div>
            <NavScrollExample />
            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/" element={<CardContainer />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/manage-product" element={<ManageProduct />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/parent_page" element={<ParentPage />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
