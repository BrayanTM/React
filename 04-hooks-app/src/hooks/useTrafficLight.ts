import { useEffect, useEffectEvent, useState } from "react";

export const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const useTrafficLight = () => {
  // type TrafficLightColor = "red" | "yellow" | "green";
  type TrafficLightColor = keyof typeof colors;

  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDown]);

  const setLightAction = useEffectEvent(() => {
    setCountDown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "green") {
      setLight("yellow");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
  });

  useEffect(() => {
    if (countDown > 0) return;
    setLightAction();
  }, [countDown]);

  return {
    // Properties
    countDown,
    light,
    // Methods
  };
};
