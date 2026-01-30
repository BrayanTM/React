import { useTrafficLight, colors } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const { countDown, light } = useTrafficLight();

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-thin text-white">
          Semaforo con useEffect
        </h1>
        <h2 className="text-xl text-white">Countdown {countDown}</h2>

        <div className="h-2 w-64 rounded-full bg-gray-700">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(countDown / 5) * 100}%` }}
          ></div>
        </div>

        <div
          className={`h-32 w-32 rounded-full ${light === "red" ? [colors[light]] : "bg-gray-500"}`}
        ></div>
        <div
          className={`h-32 w-32 rounded-full ${light === "yellow" ? [colors[light]] : "bg-gray-500"}`}
        ></div>
        <div
          className={`h-32 w-32 rounded-full ${light === "green" ? [colors[light]] : "bg-gray-500"}`}
        ></div>
      </div>
    </div>
  );
};
