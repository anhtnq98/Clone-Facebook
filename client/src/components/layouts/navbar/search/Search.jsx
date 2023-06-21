import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

function Search() {
  const [searchStyle, setSearchStyle] = useState("search-board");

  // Hàm tìm kiếm trong danh sách users
  const [searchValue, setSearchValue] = useState("");
  const searchV = searchValue.trim();
  const [searchResults, setSearchResults] = useState("");
  const loadSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/users/friend/search-user?searchValue=${searchV}`
      );
      setSearchResults(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSearch();
  }, [searchValue]);

  return (
    <>
      <div
        onClick={() => setSearchStyle("search-board-active")}
        className="search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={searchStyle}>
        <div className="search-header">
          <div
            onClick={() => {
              setSearchStyle("search-board");
            }}
          >
            <i id="search-back" className="fa-sharp fa-solid fa-arrow-left"></i>
          </div>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            value={searchValue}
          />
        </div>
        {/* SEARCH RECENTLY */}
        <div id="search-middle-container" className="search-middle-container">
          <div className="search-bottom">
            {searchResults?.length >= 1 ? (
              <>
                {searchResults !== undefined &&
                  searchResults?.slice(0, 10).map((search, i) => (
                    <>
                      {/* search block */}
                      <div className="search-block">
                        <div className="search-block-infor">
                          <div className="search-block-infor-avartar">
                            <img src={search.avatarDefault} alt="" />
                          </div>
                          <div style={{ paddingLeft: "15px" }}>
                            <div style={{ fontSize: "18px" }}>
                              {search.firstName} {search.surName}
                            </div>
                            <div style={{ fontSize: "14px", color: "gray" }}>
                              Bạn bè
                            </div>
                          </div>
                        </div>
                        {/* <div>
                          <i
                            id="search-delete"
                            className="fa-solid fa-xmark"
                          ></i>
                        </div> */}
                      </div>
                      {/* search block end */}
                    </>
                  ))}
              </>
            ) : (
              <>
                <div>Không có kết quả tìm kiếm</div>
              </>
            )}
          </div>
        </div>
        {/* SEARCH RECENTLY END */}
      </div>
    </>
  );
}

export default Search;
