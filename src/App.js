import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layouts/Client";
import Home from "./pages/Home/Index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
