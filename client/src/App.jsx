import "./App.css";
import { Route, Routes } from "react-router";
import Watch from "./components/pages/watch/Watch";
import Home from "./components/pages/home/Home";
import MarketPlace from "./components/pages/marketplace/MarketPlace";
import Group from "./components/pages/group/Group";
import Gaming from "./components/pages/gaming/Gaming";
import Login from "./components/pages/register-login/Login";
import Error from "./components/layouts/error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/watch/" element={<Watch />} />
        <Route path="/marketplace/" element={<MarketPlace />} />
        <Route path="/groups/feed/" element={<Group />} />
        <Route path="/gaming/play/" element={<Gaming />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
