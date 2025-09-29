import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Browse from "./components/Browse";
import MarqueeSec from "./components/MarqueeSec";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"
import { Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import Cart from "./pages/Cart";




function App() {
  return (
    <>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              
              <Cards />
              <Browse />
              <Feedback />
            </>
          }
        />
        <Route path="/items/:id" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
