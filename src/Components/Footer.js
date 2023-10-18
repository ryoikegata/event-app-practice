import React from "react";
import '../App.css';

const Footer = () => {

  return(
    <>
    <div className="flex justify-center">
    <div className="w-1/2 h-16 flex absolute bottom-0">
      <div className="w-1/2 h-full bg-blue-700 flex justify-center items-center text-white font-bold">
        <p>参加予定(未回答)</p>
      </div>
      <div className="w-1/2 h-full bg-green-500 flex justify-center items-center text-white font-bold">
        <p>今日の出欠</p>
      </div>

    </div>
    </div>
    </>
  )

}

export default Footer;