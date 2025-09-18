import { memo } from "react";

interface Props{
    subtitle:string;
    callMyAPI:()=>void
}

export const MySubtitle = memo(({subtitle,callMyAPI}:Props) => {
  console.log('Subtitle re-render');
    return (
    <>
    <h6
    className="text-2xl"
    >{subtitle}</h6>

    <button
    className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer "
    onClick={callMyAPI}
    >Llamar a funcion</button>
    </>
  )
});

