import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-6">
      
      <img src="/assets/logo.gif" alt="Skribbl.io Logo" className="w-[320px] h-auto" />

     
      <div className="flex gap-2 mt-2">
        <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-orange-400 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-yellow-300 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-green-400 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-cyan-400 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-white"></div>
        <div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-white"></div>
      </div>
    </div>
  );
}
