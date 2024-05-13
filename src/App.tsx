import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>Ovo je neki header</header>

        <main>
          <nav>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </main>
        <Routes>
          <Route path="/customers" element={<AppCustomers />} />
          <Route path="/products" element={<AppProducts />} />
        </Routes>
        <footer>Created by Me</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
