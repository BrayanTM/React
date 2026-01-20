import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClick = (term: string) => {
    console.log(term);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        tittle="Buscador de Gifs"
        description="Descubre y comparte tus gifs favoritos con el mundo"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
