import { useCounter } from "../hooks/useCounter";

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{counter} Bulbasaur</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
        alt=""
      />

      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Anterior
        </button>

        <button
          onClick={increment}
          className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
