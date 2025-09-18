
import React from "react";

export default function Sections() {
  return (
    <div className="w-full mt-10 mb-8 flex justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0 text-sm">
        <div className="bg-blue-800/80 rounded-md shadow-2xl p-6 relative">
          <div className="absolute -left-3 -top-3 text-3xl">❓</div>
          <h2 className="text-2xl font-extrabold mb-3">About</h2>
          <p>
            <span className="font-bold">skribbl.io</span> is a free online multiplayer
            drawing and guessing pictionary game.
          </p>
          <p className="mt-3">
            A normal game consists of a few rounds, where every round a player has to
            draw their chosen word and others have to guess it to gain points!
          </p>
          <p className="mt-3">
            The person with the most points at the end of the game, will then be crowned
            as the winner!<br />
            Have fun!
          </p>
        </div>

      
        <div className="bg-blue-800/80 rounded-md shadow-2xl p-6 relative">
          <div className="absolute -left-3 -top-3 text-3xl">📰</div>
          <h2 className="text-2xl font-extrabold mb-3">News</h2>
          <div className="flex items-center justify-between border-b border-blue-300/40 pb-2 mb-3">
            <div className="font-bold">Fresh paint</div>
            <div className="text-xs">9th November 2022</div>
          </div>
          <div className="h-[340px] overflow-y-auto pr-2">
            <p className="mb-2">Hello!</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Redesign of the page</li>
              <li>Mobile support</li>
              <li>
                Reworked toolbar
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Undo button</li>
                  <li>More colors</li>
                  <li>Left- and rightclick to select colors and draw</li>
                  <li>Experimental support for pressure touch input</li>
                  <li>Configurable hotkeys</li>
                </ul>
              </li>
              <li>
                Better player interactions/moderation
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Ability to kick and ban any player as a room owner</li>
                  <li>Votekick, Mute and Report naughty players</li>
                </ul>
              </li>
              <li>Invite your friends to public rooms</li>
              <li>
                More room settings
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Increased player count in custom rooms to 20</li>
                  <li>Set the amount of Words to choose</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

  
        <div className="bg-blue-800/80 rounded-md shadow-2xl p-6 relative flex flex-col items-center">
          <div className="absolute -left-3 -top-3 text-3xl">✏️</div>
          <h2 className="text-2xl font-extrabold mb-3 self-start">How to play</h2>
          <div className="w-full h-[300px] bg-blue-900/60 border-2 border-blue-200/50 rounded-sm flex items-center justify-center">
            <div className="text-6xl select-none">🏠</div>
          </div>
          <p className="text-center mt-4 px-4">
            Let other players try to guess your drawn word!
          </p>
          <div className="flex gap-2 mt-3">
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/90"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
