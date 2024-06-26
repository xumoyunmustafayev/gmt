import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Katalog from "./pages/Katalog";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<Katalog />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
