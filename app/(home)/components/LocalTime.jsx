"use client";

import { useState, useEffect } from "react";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Colombo",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export default function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(clock.format(new Date()));
    update();
    const timer = window.setInterval(update, 15000);
    return () => window.clearInterval(timer);
  }, []);

  return <span>{time ? `${time} local time` : "UTC +05:30"}</span>;
}
