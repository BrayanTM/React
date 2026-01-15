import type { CSSProperties } from "react";

const firstName: string = "Brayan";
const lastName: string = "Tebelan";

const favoriteGames: string[] = ["Elder Ring", "Smash", "Halo"];

const isActive: boolean = true;

const address = {
  zipCode: 14001,
  country: "Guatemala",
};

const myStyles: CSSProperties = {
  backgroundColor: isActive ? "green" : "yellow",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "Inactivo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
