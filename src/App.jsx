import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Katalog from "./pages/Katalog";
import Analiz from "./pages/Analiz";
import Laboratory from "./pages/Laboratory";
import Kompane from "./pages/Kompane";
import Delevery from "./pages/Delevery";
import Usluga from "./pages/Usluga";
import Informatsiony from "./pages/Informatsiony";
import Oplata from "./pages/Oplata";
import Manifactures from "./pages/Manifactures";
import Kabinet from "./pages/Kabinet";
import Grante from "./pages/Grante";
import Aksiya from "./pages/Aksiya";
import Kab from "./pages/Kab";
import ManifacMain from "./pages/ManifacMain";
import Kontact from "./pages/Kontact";
import Like from "./pages/Like";
import Compare from "./pages/Compare";
import Faq from "./pages/Faq";
import Footer from "./components/home/Footer";
import Korzina from "./pages/Korzina";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/kompane" element={<Kompane />} />
          <Route path="/usluga" element={<Usluga />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/kabinet" element={<Kabinet />} />
          <Route path="/kab" element={<Kab />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/like" element={<Like />} />
          <Route path="/kontact" element={<Kontact />} />
          <Route path="/korzin" element={<Korzina />} />
          <Route path="/manifac" element={<ManifacMain />} />
          <Route path="/grante" element={<Grante />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/aksiya" element={<Aksiya />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/katalog/manifactures" element={<Manifactures />} />
          <Route path="/blog/informatsionny" element={<Informatsiony />} />
          <Route path="/delevery" element={<Delevery />} />
          <Route path="/katalog/laboratory" element={<Laboratory />} />
          <Route path="/katalog/laboratory/analiz" element={<Analiz />} />
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
};

export default App;