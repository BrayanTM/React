import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        tittle="Buscador de Gifs"
        description="Descubre y comparte tus gifs favoritos con el mundo"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Busquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
