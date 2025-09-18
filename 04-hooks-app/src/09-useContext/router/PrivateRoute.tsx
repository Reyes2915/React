import { use, type JSX } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router';


interface Props{
    element:JSX.Element //React.ReactNode
}

export const PrivateRoute = ({element}:Props) => {

    const {isAuthenticatedStatus}=use(UserContext);

    if(isAuthenticatedStatus==='checking'){
        return <div>Loading...</div>
    };

    if(isAuthenticatedStatus==='authenticated'){
        return element;
    }



    



  return (
    <Navigate to="/login" replace></Navigate>
  )
}
