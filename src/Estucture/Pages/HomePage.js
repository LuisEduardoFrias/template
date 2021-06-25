import React from 'react'
import background from '../../assests/img/background.png';

export default function HomePage()
{
    return (

        
        <div style={{ display:'flex', alignItems:'center', justifyContent: 'center', height:'100%', width:'100%'}}>
            <img src={background} style={{height:'100%', width:'100%'}} alt="Imagen de eps" />
        </div>
    )
}
