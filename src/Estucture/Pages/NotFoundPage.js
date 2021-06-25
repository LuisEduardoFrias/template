import React from 'react';
import './NotFound.css';
import paquetes from '../../assests/img/Paquetes.jpg';

export default function NotFoundPage()
{
    return (
        <div style={{width:'100%', height:'100%'}}>

            <img src={paquetes} className='backgroundImageNotFound' style={{width:'100%', height:'100%'}} alt="paquetes." />

            <div style={{fontSize:'50px', width:'763px', color: 'red', display:'flex', alignItems:'center', justifyContent: 'center',
             position: 'absolute', top:'10px', left:'50%', transform: 'translateX(-50%)'}}>

                <label>No se encuentra lo que está buscando.</label>

            </div> 

        </div>
    )
}
