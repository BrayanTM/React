const firstName: string = "Brayan";
const lastName: string = "Tebelan";

const favoriteGames: string[] = ["Elder Ring", "Smash", "Halo"];

const isActive: boolean = false;

const address = {
  zipCode: 14001,
  country: "Guatemala",
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "Inactivo"}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
  );
}
