import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import PublicLayout from './layouts/PublicLayout.tsx';
import Landing from './pages/Landing.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout/>}>
        <Route index element={<Landing/>}></Route>

      </Route>
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
