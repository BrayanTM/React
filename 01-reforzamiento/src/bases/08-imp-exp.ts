import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero?.id === id;
  });

  //   if (!hero) {
  //     throw new Error(`No existe un hero con el id: ${id}`);
  //   }

  return hero;
};

// console.log(getHeroById(7));

/**
 * getHeroesByOwner => Hero[]
 * Filtra heroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeracion Owner
 * @returns Array de heroes pertenecientes al propietario especificado
 */

// Mi Solucion
// export const getHeroesByOwner = (owner: Owner): Hero[] => {
//   const filterHeroes: Hero[] = [];

//   for (const heroe of heroes) {
//     if (heroe.owner === owner) {
//       filterHeroes.push(heroe);
//     }
//   }

//   return filterHeroes;
// };

//NO: console.log(getHeroesByOwner( 'Marvel' ));

// Solucion Fernando

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const findHeroes = heroes.filter((hero) => hero.owner === owner);

  return findHeroes;
};
