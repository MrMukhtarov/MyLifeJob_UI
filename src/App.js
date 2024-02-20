import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layouts/Client";
import Home from "./pages/Home/Index.jsx";
import Category from './pages/Category/Index.jsx'
import Industry from './pages/Industry/Index.jsx'
import Company from './pages/Company/Index.jsx'
import About from './pages/About/Index.jsx'
import Service from './pages/Service/Index.jsx'
import Contact from './pages/Contact/Index.jsx'
import WishList from './pages/WishList/Index.jsx'
import AdvertismentDetail from './pages/AdvertismentDetail/Index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/advertisment" element={<AdvertismentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
