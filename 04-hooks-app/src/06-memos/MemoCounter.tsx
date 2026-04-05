import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_Stuff_Start");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahi vamos...");
  }

  console.timeEnd("Heavy_Stuff_Start");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>
      <hr />

      <h4>Counter: {counter}</h4>
      <h4>Counter 2: {counter2}</h4>

      <button
        className="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white"
        onClick={increment}
      >
        + 1
      </button>

      <button
        className="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white"
        onClick={increment2}
      >
        + 1 - Counter 2
      </button>
    </div>
  );
};
