import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SignIn from "./Pages/SignIn";
import ShopPage from "./Pages/ShopPage";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
