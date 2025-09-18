import React, { useEffect, useRef, useState } from "react";

export default function Game({ playerName = "You", onExit }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [players] = useState([
    { name: "Nom", color: "bg-red-400" },
    { name: "cutiee", color: "bg-orange-400" },
    { name: "AKHIL", color: "bg-yellow-300" },
    { name: "Neeli", color: "bg-green-400" },
    { name: "Meeeerub", color: "bg-cyan-400" },
    { name: "Lily", color: "bg-purple-400" },
    { name: "Robot", color: "bg-pink-400" },
    { name: `${playerName} (You)`, color: "bg-blue-400" },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000000";
    ctxRef.current = ctx;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = Math.floor(width);
      canvas.height = Math.floor(height);
      ctx.putImageData(imageData, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handleDown = (e) => {
    setIsDrawing(true);
    const { x, y } = getPos(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
  };

  const handleMove = (e) => {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const handleUp = () => {
    setIsDrawing(false);
    ctxRef.current.closePath();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between bg-blue-800/80 rounded-md px-4 py-2 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white text-blue-900 font-bold flex items-center justify-center">36</div>
          <div className="font-bold">Round 1 of 3</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-xs opacity-80">GUESS THIS</div>
          <div className="tracking-[0.6em]">_ o _ _</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-green-500/90 text-blue-900 px-2 py-1 rounded">👍</button>
          <button className="bg-pink-400/90 text-blue-900 px-2 py-1 rounded">👎</button>
          <button className="ml-2 bg-blue-600 px-3 py-1 rounded" onClick={onExit}>Exit</button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-2 bg-blue-800/80 rounded-md p-2">
          {players.map((p, i) => (
            <div key={i} className="flex items-center justify-between px-2 py-1 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${p.color}`}></div>
                <div className="text-xs">
                  <div className="leading-4">{p.name}</div>
                  <div className="opacity-70">0 points</div>
                </div>
              </div>
              <div className="opacity-70">#1</div>
            </div>
          ))}
        </div>

        
        <div className="col-span-7 bg-white rounded-md overflow-hidden">
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="block w-full h-[470px] touch-none"
              onMouseDown={handleDown}
              onMouseMove={handleMove}
              onMouseUp={handleUp}
              onMouseLeave={handleUp}
              onTouchStart={handleDown}
              onTouchMove={handleMove}
              onTouchEnd={handleUp}
            />
            <div className="absolute top-2 right-2 text-3xl select-none">🖌️</div>
          </div>
        </div>

       
        <div className="col-span-3 bg-blue-800/80 rounded-md flex flex-col">
          <div className="flex-1 overflow-y-auto p-2 space-y-1 text-sm">
            <div className="opacity-90">Lily is drawing now!</div>
            {["rust", "Tree", "Bamboo", "Rode", "rope", "Rope"].map((g, i) => (
              <div key={i} className="bg-blue-900/50 px-2 py-1 rounded">{g}</div>
            ))}
          </div>
          <div className="p-2 border-t border-white/10">
            <input className="w-full h-8 px-3 rounded bg-blue-700 outline-none" placeholder="Type your guess here..." />
          </div>
        </div>
      </div>
    </div>
  );
}


