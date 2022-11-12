import React, { useState, useEffect } from "react";
import "./Clock.css"

export default function Clock() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    },1000);
  });

  return (
    <div className="clock1">
      <h4 > {clock}</h4>
    </div>
  )
}
