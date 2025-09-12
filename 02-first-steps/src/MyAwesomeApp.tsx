import type { CSSProperties } from "react";

 const firstName = "Reyes";
  const lastName = "Delgado";

  const favoriteGames=['Cuphead','Assassins Creed','COD']
  const isActive=true;

  const address={
    zipCode:'ABC-123',
    country:'Spain'

  }

  const myStyles:CSSProperties={
     backgroundColor:'red',
     borderRadius: isActive ? 10:20,
     marginTop:200,
  }
export const MyAwesomeApp = () => {

    
  

  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(', ')}</p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p  
      style={myStyles}
      >{JSON.stringify(address)}</p>
    </>
  );
};

/* export function MyAwesomeApp() {
  return (
    <>
      <h1>Reyes</h1>
      <h3>Delgado</h3>
    </>
  );
} */
