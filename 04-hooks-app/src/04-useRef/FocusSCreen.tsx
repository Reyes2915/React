import { useRef } from "react";


export const FocusSCreen = () => {

    const inputRef=useRef<HTMLInputElement>(null);

    const handleclick=()=>{
        
        inputRef.current?.select();

    }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focues Screen</h1>

      <input
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
      ></input>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={handleclick}
      >
        Set Focues
      </button>
    </div>
  );
};
