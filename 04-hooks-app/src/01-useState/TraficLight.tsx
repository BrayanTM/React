import { useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// type TrafficLightColor = "red" | "yellow" | "green";
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const handleColorChange = (color: TrafficLightColor) => {
    setLight((prev) => {
      console.log(prev);
      return color;
    });
  };

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={`h-32 w-32 rounded-full ${light === "red" ? [colors[light]] : "bg-gray-500"}`}
        ></div>
        <div
          className={`h-32 w-32 rounded-full ${light === "yellow" ? [colors[light]] : "bg-gray-500"}`}
        ></div>
        <div
          className={`h-32 w-32 rounded-full ${light === "green" ? [colors[light]] : "bg-gray-500"}`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleColorChange("red");
            }}
            className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white"
          >
            Rojo
          </button>
          <button
            onClick={() => {
              handleColorChange("yellow");
            }}
            className="cursor-pointer rounded-md bg-yellow-500 px-4 py-2 text-white"
          >
            Amarillo
          </button>
          <button
            onClick={() => {
              handleColorChange("green");
            }}
            className="cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white"
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
