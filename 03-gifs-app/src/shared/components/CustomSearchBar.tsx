import { useEffect, useState } from "react";
import { type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const CustomSearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };

    //onQuery(query);
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
