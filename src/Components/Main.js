import React, { useState } from "react";
import '../App.css';
import Event from "./Event";


const Main = () => {

  const topSelectTexts = [
    "リアルイベント",
    "必須イベント",
    "所属情報登録"
  ];

  const eventTypeSelects = [
    "全て",
    "参加",
    "不参加",
    "提出済み",
    "未回答"
  ];

  const [topSelectButton, setTopSelectButton] = useState(null);
  const [eventSelectButton, setEventSelectButton] = useState(null);


  function handleTopSelectClick (index) {
    setTopSelectButton(index);

  }
  
  function handleEventSelectClick (index) {
    setEventSelectButton(index);
  }




  return (
    <>
    <div className="absolute top-20 left-5 font-semibold">
      <p>ようこそ！ POSSE2: 3.0期生 池形凌さん</p>
    </div>

    <div className="flex justify-center relative">
    <div className="w-1/2 absolute top-16">
      <div className="flex gap-3">
      {topSelectTexts.map((text,index) => (
      <button key={index} className={`bg-white p-2 rounded shadow-xl font-bold ${topSelectButton === index ? 'bg-blue-600 text-white' : ''}`} onClick={() => handleTopSelectClick(index)}>{text}</button>))}
      </div>
      <div className="mt-8 flex gap-3">
      {eventTypeSelects.map((text,index) => (
      <button key={index} className={`bg-white p-2 rounded shadow-xl font-bold  ${eventSelectButton === index ? 'bg-blue-600 text-white' : ''}`} onClick={() => handleEventSelectClick(index)}>{text}</button>))}
      </div>

      <Event></Event>
    </div>
    </div>
    </>
  )

}


export default Main;