export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  await new Promise((res) => setTimeout(res, 3000));

  return {
    id: id,
    name: "Jose",
    location: "Santa Cruz del Quiche, Quiche",
    role: "Full Stack Developer",
  };
};
