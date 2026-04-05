import React from "react";

interface Props {
  subTitle: string;
  callMyAPI: () => void;
}

export const MySubTitle = React.memo(({ subTitle, callMyAPI }: Props) => {
  console.log("MySubTitle re-render");

  return (
    <>
      <h6 className="text-2xl font-bold">{subTitle}</h6>
      <button
        className="cursor-pointer rounded-md bg-indigo-500 px-2 py-1 text-white"
        onClick={callMyAPI}
      >
        Lammar a Funcion
      </button>
    </>
  );
});
