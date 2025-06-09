import "./App.css";
import Home from "./app/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/pages/Dashboard";
import Analytics from "./app/pages/Analytics";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/dashboard" element={<Page />} /> */}
        <Route path="/" element={<Home />} />

        {/* Routes under layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
