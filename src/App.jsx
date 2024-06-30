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
          <Route path="/blog/informatsionny" element={<Informatsiony />} />
          <Route path="/delevery" element={<Delevery />} />
          <Route path="/katalog/laboratory" element={<Laboratory />} />
          <Route path="/katalog/laboratory/analiz" element={<Analiz />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
