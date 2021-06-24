import RouterComponent from '../Router/RouterComponent.js';

export default function App() 
{
   const styles =  
   {
      width: 'Calc(100vw)',
      height: 'Calc(100vh)',
      overflow: 'hidden',
      
   }
 
   return (
     <div style={styles}> 
        <RouterComponent />
     </div>
   );
}