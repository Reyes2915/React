import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FistStepsApp'
//import { MyAwesomeApp } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp></FirstStepsApp>
    {/* <MyAwesomeApp></MyAwesomeApp> */}
  </StrictMode>,
)
