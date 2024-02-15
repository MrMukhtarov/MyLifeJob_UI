import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layouts/Client";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
