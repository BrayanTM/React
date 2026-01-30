import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-3.5">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input
        ref={inputRef}
        className="rounded-md bg-white px-4 py-2 text-black"
        type="text"
        name=""
        id=""
        autoFocus
      />
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Set Focus
      </button>
    </div>
  );
};
