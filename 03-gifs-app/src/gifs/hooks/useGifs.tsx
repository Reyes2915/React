import { useRef, useState } from "react";

import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);
  const [gifs, setgifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});
  const handleTermClicked = async (term: string) => {

    if (gifsCache.current[term]) {
      setgifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setgifs(gifs);
  };

  const handleSearch = async (query: string) => {
    //Convertir a minusculas y eliminar espacios en blanco
    query.trim().toLowerCase();

    //2.Validar que el query no este vacio
    if (query === "") return;

    //3.Evitar Busquedas duplicadas
    if (previousTerms.includes(query)) return;

    setpreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);

    setgifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    //Values
    gifs,
    previousTerms,

    //Methods
    handleSearch,
    handleTermClicked,
  };
};
