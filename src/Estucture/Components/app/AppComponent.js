import React, { useReducer, useEffect } from 'react'
import { AuthContext } from '../../../auth/AuthContext'
import { authReducer } from '../../../auth/authReducer'
import AppRouterComponent from '../Router/AppRouterComponent.js';

const init = () => {
   return JSON.parse(localStorage.getItem('user'))  || { logged: false };
}

export default function App() 
{
   const styles =  
   {
      width: 'Calc(100vw)',
      height: 'Calc(100vh)',
      overflow: 'hidden',
      
   }

   const [ user, dispatch ] = useReducer(authReducer, {}, init);

   useEffect(() => {
       localStorage.setItem( 'user', JSON.stringify(user) );
   }, [user])
 
   return (
      <div style={styles}> 
         <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouterComponent />
         </AuthContext.Provider>
      </div>
   );
}