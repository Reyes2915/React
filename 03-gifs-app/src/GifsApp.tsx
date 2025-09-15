import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearchBar } from "./shared/components/CustomSearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

  const {gifs,previousTerms,handleSearch,handleTermClicked}=useGifs();
 
  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      ></CustomHeader>

      {/* Search */}

      <CustomSearchBar
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
      ></CustomSearchBar>

      {/* Busquedas previas */}

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      ></PreviousSearches>

      {/* Gifs */}
      <GifList 
      gifs={gifs}></GifList>
    </>
  );
};
