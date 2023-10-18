import React from "react";
import '../App.css';


const Event = () => {


  return (
    <>
    <div className="mt-5">
      <p className="font-bold">一覧</p>
      <div className="mt-5">
      <div className="bg-white w-full h-24 rounded-md shadow-lg flex justify-between">
        <div className="m-4">
          <div className="flex gap-3 mb-2 items-center">
            <div>
            <p className="font-bold">ハロインイベント</p>
            </div>
            <div>
              <p className="bg-blue-600 text-white px-2 py-1 rounded text-xs">3期生</p>
            </div>
          </div>
          <p className="text-base">2023年10月29日(日)</p>
          <p className="text-xs text-gray-600">11:00~19:00</p>
        </div>
        <div>
          <div className="m-4">
            <p className="text-sm font-bold text-orange-500">未回答</p>
          </div>
          <div>
            <button>
            <p className=""><span className="font-medium text-2xl">7</span>人参加</p>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}


export default Event;