import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./pages/table/Table";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <Breadcrumbs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
