import { Route, Routes } from "react-router-dom";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Maintenance />} />
      <Route path="/a-propos" element={<Maintenance />} />
      <Route path="/tarifs" element={<Maintenance />} />
      <Route path="/pro" element={<Maintenance />} />
      <Route path="/login" element={<Maintenance />} />
    </Routes>
  );
}

export default App;
