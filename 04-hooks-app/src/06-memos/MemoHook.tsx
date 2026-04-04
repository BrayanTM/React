import { useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo Hook</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} />

      <button className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white">
        Cambiar Titulo
      </button>

      <button className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white">
        Cambiar Subtitulo
      </button>
    </div>
  );
};
