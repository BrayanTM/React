import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const { countDown, percentage, greenLight, yellowLight, redLight } =
    useTrafficLight();

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
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className={`h-32 w-32 rounded-full ${redLight}`}></div>
        <div className={`h-32 w-32 rounded-full ${yellowLight}`}></div>
        <div className={`h-32 w-32 rounded-full ${greenLight}`}></div>
      </div>
    </div>
  );
};
