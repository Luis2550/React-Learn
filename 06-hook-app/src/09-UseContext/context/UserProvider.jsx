import { useState } from 'react';
import {UserContext} from './UserContext';

// const user = {
//     nombre: 'Juan',
//     edad: 25
// }

export const UserProvider = ( { children } ) => {


  const [user, setUser] = useState();


  return (
    
    <UserContext.Provider value={ {user, setUser} }>
        {children}
    </UserContext.Provider>
  )
}
