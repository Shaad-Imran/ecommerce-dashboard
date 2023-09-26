// Import CSS and SCSS styles at the top of the file for better organization.
import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Use nested routes for better readability */}
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Blank />} />
          <Route path="products" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
          <Route path="stats" element={<Blank />} />

          {/* Add the error route for handling 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
