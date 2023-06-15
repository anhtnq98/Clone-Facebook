import React from "react";
import MyNavbar from "../../layouts/navbar/MyNavbar";
import NoPage from "../../layouts/error/NoPage";

function Group() {
  return (
    <>
      <MyNavbar />
      <div>
        <NoPage />
      </div>
    </>
  );
}

export default Group;
