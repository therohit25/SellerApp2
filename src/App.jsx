import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Hotel from "./pages/Hotel";
import HostelList from "./pages/HostelList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HostelList />}></Route>
          <Route exact path="/Hotel/:id" element={<Hotel />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
