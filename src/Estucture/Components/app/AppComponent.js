import StructureComponent from '../structure/StructureComponent.js';

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
        <StructureComponent />
     </div>
   );
}