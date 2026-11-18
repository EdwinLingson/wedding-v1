"use client"; // needed because it uses state and a timer in the browser

import { useEffect, useState } from "react";

function calc(target) {
  const diff = Math.max(0, new Date(target) - new Date());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown({ target }) {
  const [t, setT] = useState(null); // null on first render avoids a server/browser mismatch

  useEffect(() => {
    setT(calc(target));
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = t
    ? [["days", t.days], ["hours", t.hours], ["minutes", t.minutes], ["seconds", t.seconds]]
    : [["days", "–"], ["hours", "–"], ["minutes", "–"], ["seconds", "–"]];

  return (
    <div className="flex justify-center gap-6 sm:gap-10" aria-label="Time until the wedding">
      {items.map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="font-display text-4xl tabular-nums sm:text-5xl">{value}</div>
          <div className="text-sm text-white/70">{label}</div>
        </div>
      ))}
    </div>
  );
}
