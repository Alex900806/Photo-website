import React from "react";

const Nav = () => {
  const auth = "VWxjKUmk80SGulSLkyrgf5aRdFN8iwXNbSdL20baNy1KplQO6HofBg03";

  const handleHomeClick = () => {
    const apiUrl = "https://api.pexels.com/v1/curated?&page=1&per_page=15";

    // 使用fetch發送GET请求
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("API请求失败");
    //   }
    //   return response.json();
    // })
    // .then((data) => {
    //   // 處理API響應数据
    //   console.log(data);
    // })
    // .catch((error) => {
    //   // 處理错误
    //   console.error(error);
    // });
  };

  return (
    <nav>
      <div>Lexie Photo Website</div>
      <ul>
        <li>
          <a href="/" onClick={handleHomeClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
