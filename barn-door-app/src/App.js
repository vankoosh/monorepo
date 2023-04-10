import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Systems from "./pages/Systems";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/systems" element={<Systems />} />
    </Routes>
  );
};

export default App;
