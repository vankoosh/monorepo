import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import styled from "styled-components";
import Systems from "./pages/Systems";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/systems" element={<Systems />} />
    </Routes>
  );
}

export default App;
