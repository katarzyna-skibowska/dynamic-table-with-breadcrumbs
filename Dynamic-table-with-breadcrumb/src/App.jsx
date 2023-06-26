import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Breadcrumbs from "./components/Breadcrumbs";
// import TableRow from "./components/TableRow";

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
