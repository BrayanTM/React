import { useEffect } from "react";
import { getUserAction } from "./api/get-user.action";

export const ClientInformation = async ({ id }: { id: number }) => {
  //   const user = await getUserAction(id);

  //   useEffect(() => {
  //     getUserAction(id).then(console.log);
  //   }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">Jose - #123</h2>

      <p className="text-2xl text-white">Santa Cruz del Quiche, Quiche</p>
      <p className="text-xl text-white">Un role del usuario</p>
    </div>
  );
};
