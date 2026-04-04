import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API - ", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo Hook</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={handleMyAPICall} />

      <button
        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={() => setTitle("Hello, " + new Date().getTime())}
      >
        Cambiar Titulo
      </button>

      <button
        className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
        // onClick={() => setSubTitle("World, " + new Date().getTime())}
        onClick={() => setSubTitle("World")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
