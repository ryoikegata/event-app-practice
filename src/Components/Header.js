import React from "react";
import '../App.css';

const Header = () => {

  return(
    <>
    <div className="bg-white w-full h-16 flex justify-center">
    <div className="h-full w-11/12 flex justify-between items-center">
      <div>
        logo
      </div>
      <div>
        <button className="text-gray-400">ログアウト</button>
      </div>
    </div>
    </div>
    </>
  )

}

export default Header;