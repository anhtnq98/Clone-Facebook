import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import MyNavbar from "./components/layouts/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
