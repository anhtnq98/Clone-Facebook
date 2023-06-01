import "./App.css";
import { Route, Routes } from "react-router";
import MyNavbar from "./components/layouts/navbar/MyNavbar";
import Watch from "./components/pages/watch/Watch";
import Home from "./components/pages/home/Home";
import MarketPlace from "./components/pages/marketplace/MarketPlace";
import Group from "./components/pages/group/Group";
import Gaming from "./components/pages/gaming/Gaming";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/" element={<Watch />} />
        <Route path="/marketplace/" element={<MarketPlace />} />
        <Route path="/groups/feed/" element={<Group />} />
        <Route path="/gaming/play/" element={<Gaming />} />
      </Routes>
    </>
  );
}

export default App;
