import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Toaster } from "sonner";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";
//import { ClientInformation } from "./08-use-suspense/ClientInformation";
//import { getUserAction } from "./08-use-suspense/api/get-user.action";
//import { InstagromApp } from "./07-useOptimistic/InstagromApp";
//import { ScrambleWords } from "./05-useReducer/ScrambleWordsUseState";
//import { MemoHook } from "./06-memos/MemoHook";
//import { MemoCounter } from "./06-memos/MemoCounter";
//import { PokemonPage } from "./03-examples/PokemonPage";
//import { FocusSCreen } from "./04-useRef/FocusSCreen";
//import { TasksApp } from "./05-useReducer/TaskApp";
//import { HooksApp } from "./HooksApp";
//import { TrafficLight } from "./01-useState/TrafficLight";
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
//import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster></Toaster>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusSCreen></FocusSCreen> */}
    {/* <TasksApp></TasksApp> */}
    {/* <ScrambleWords></ScrambleWords> */}
    {/* <MemoHook></MemoHook> */}
    {/* <MemoCounter></MemoCounter> */}
    {/* <InstagromApp></InstagromApp> */}

    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1>Cargando</h1>
        </div>
      }
    >
      <ClientInformation
      getUser={getUserAction(1000)}
      ></ClientInformation>
    </Suspense> */}
    <ProfessionalApp></ProfessionalApp>
  </StrictMode>
);
