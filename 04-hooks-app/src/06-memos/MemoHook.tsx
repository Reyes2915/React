import { useCallback, useState } from "react";
import { MySubtitle } from "./ui/MySubtitle";
import { MyTitle } from "./ui/MyTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

const handleMyAPICall= useCallback(()=>{
    console.log('LLamar api',subtitle);
},[subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title}></MyTitle>

      <MySubtitle subtitle={subtitle}
      callMyAPI={handleMyAPICall}
      ></MySubtitle>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello")}
      >
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle("World")}
      >
        Cambiar contraseña
      </button>
    </div>
  );
};
