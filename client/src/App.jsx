import "./App.css";
import { Route, Routes } from "react-router";
import Watch from "./components/pages/watch/Watch";
import Home from "./components/pages/home/Home";
import MarketPlace from "./components/pages/marketplace/MarketPlace";
import Group from "./components/pages/group/Group";
import Gaming from "./components/pages/gaming/Gaming";
import Login from "./components/pages/register-login/Login";
import Error from "./components/layouts/error/Error";
import UserMain from "./components/pages/user/user-main/UserMain";
import UserMainAbout from "./components/pages/user/user-main/user-main-bottom/user-main-about/UserMainAbout";
import UserMainFriends from "./components/pages/user/user-main/user-main-bottom/user-main-friends/UserMainFriends";
import UserMainPhotos from "./components/pages/user/user-main/user-main-bottom/user-main-photos/UserMainPhotos";
import UserMainVideos from "./components/pages/user/user-main/user-main-bottom/user-main-videos/UserMainVideos";
import UserMainHome from "./components/pages/user/user-main/user-main-bottom/user-main-home/UserMainHome";
import OtherMain from "./components/pages/user/other-main/OtherMain";
import OtherMainHome from "./components/pages/user/other-main/other-main-bottom/other-main-home/OtherMainHome";
import OtherMainFriends from "./components/pages/user/other-main/other-main-bottom/other-main-friends/OtherMainFriends";

function App() {
  const loginFlag = JSON.parse(localStorage.getItem("loginFlag"));
  const saveFlag = JSON.parse(localStorage.getItem("saveFlag"));

  return (
    <>
      <Routes>
        <Route path="/watch/" element={<Watch />} />
        <Route path="/marketplace/" element={<MarketPlace />} />
        <Route path="/groups/feed/" element={<Group />} />
        <Route path="/gaming/play/" element={<Gaming />} />
        {saveFlag !== null && loginFlag !== null ? (
          <>
            <Route path={`/${saveFlag.userId}/`} element={<UserMain />}>
              <Route path="" element={<UserMainHome />} />
              <Route path="about" element={<UserMainAbout />} />
              <Route path="friends" element={<UserMainFriends />} />
              <Route path="photos" element={<UserMainPhotos />} />
              <Route path="videos" element={<UserMainVideos />} />
            </Route>

            <Route path={`/:id/`} element={<OtherMain />}>
              <Route path="" element={<OtherMainHome />} />
              <Route path="about" element={<UserMainAbout />} />
              <Route path="friends" element={<OtherMainFriends />} />
              <Route path="photos" element={<UserMainPhotos />} />
              <Route path="videos" element={<UserMainVideos />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}

        {loginFlag !== null ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
