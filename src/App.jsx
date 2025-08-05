import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Browse from "./components/Browse";
import MarqueeSec from "./components/MarqueeSec";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MarqueeSec />
              <Cards />
              <Browse />
              <Feedback />
            </>
          }
        />
        <Route path="/items" element={<Items />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
