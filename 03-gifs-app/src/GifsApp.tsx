import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
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
      <PreviousSearches />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
