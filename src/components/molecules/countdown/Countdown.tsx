"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-10-12T08:00:00");
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft(null);
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white">
      {timeLeft ? (
        <div className="flex justify-center space-x-4">
          <div className="bg-white/50 text-black font-bold md:text-3xl text-xl p-4 rounded">
            <span className="text-2xl">{timeLeft.days}</span>{" "}
            <span className="text-lg">hari</span>
          </div>
          <div className="bg-white/50 text-black font-bold md:text-3xl text-xl p-4 rounded">
            <span className="text-2xl">{timeLeft.hours}</span>{" "}
            <span className="text-lg">jam</span>
          </div>
          <div className="bg-white/50 text-black font-bold md:text-3xl text-xl p-4 rounded">
            <span className="text-2xl">{timeLeft.minutes}</span>{" "}
            <span className="text-lg">menit</span>
          </div>
          <div className="bg-white/50 text-black font-bold md:text-3xl text-xl p-4 rounded">
            <span className="text-2xl">{timeLeft.seconds}</span>{" "}
            <span className="text-lg">detik</span>
          </div>
        </div>
      ) : (
        <p className="text-xl">Loading..</p>
      )}
    </div>
  );
};

export default CountdownTimer;
