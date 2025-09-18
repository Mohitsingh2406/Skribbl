
import React, { useState } from "react";

export default function PlayerSetup({ onPlay }) {
  const [name, setName] = useState("mohit");
  const [lang, setLang] = useState("English");

  return (
    <div className="bg-blue-800/80 rounded-md shadow-2xl mt-6 p-5 w-[430px]">
      
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 h-10 px-3 rounded bg-blue-700 text-white placeholder-white/70 outline-none"
          placeholder="mohit"
        />
        <div className="relative w-[140px]">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full h-10 pr-8 pl-3 rounded bg-blue-700 text-white outline-none appearance-none"
          >
            <option>English</option>
            <option>German</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Italian</option>
            <option>Portuguese</option>
            <option>Russian</option>
            <option>Turkish</option>
            <option>Japanese</option>
            <option>Korean</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/80">▾</span>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="absolute right-2 -top-2 text-white/90">❄️</div>
        <div className="bg-blue-900/60 border-2 border-blue-200/50 rounded-sm h-[220px] flex items-center justify-center">
          <div className="flex items-center gap-6 text-3xl">
            <button className="px-2 py-1 bg-blue-700 rounded">◀</button>
            <div className="relative">
              <div className="w-28 h-28 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-5xl">😎</span>
              </div>
            </div>
            <button className="px-2 py-1 bg-blue-700 rounded">▶</button>
          </div>
        </div>
      </div>

      <button className="bg-green-400 hover:bg-green-300 text-black tracking-wide text-2xl font-extrabold w-full py-3 rounded mt-4" onClick={() => onPlay?.(name)}>
        Play!
      </button>
      <button className="bg-blue-600 hover:bg-blue-500 text-white w-full py-3 rounded mt-3">
        Create Private Room
      </button>
    </div>
  );
}
