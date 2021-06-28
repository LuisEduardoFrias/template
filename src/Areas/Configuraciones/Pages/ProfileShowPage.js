import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import useGetAge from '../../../Share_Hooks/useGetAge.js';
import useGetDate from '../../../Share_Hooks/useGetDate.js';
import useGetLocalStorage from '../../../Share_Hooks/useGetLocalStorage.js';
import { Link } from 'react-router-dom';

export default function ProfileShowPage()
{
    const footer = 
    <span>
        <Link to='/profile/edit' style={{textDecoration:'none'}}>
            <Button label="Editar" icon="pi pi-user-edit" style={{marginRight: '.25em'}}/> 
        </Link>
    </span>;

    const  {Nombre,Cargo,FechaNacimiento,Cedula,Sexo,Telefono,Direccion} = useGetLocalStorage({profile:'profile'});

    return (
            <Card title={`Nombre : ${Nombre}`} subTitle={`Cargo: ${Cargo}`} footer={footer} style={{marginTop:'50px',
             marginInline:'50px'}}> 

                <div style={{width: '100%', marginBottom: '10px'}}>Fecha de nacimiento: {useGetDate(FechaNacimiento)}</div>
                <div style={{width: '100%', marginBottom: '10px'}}>Edad: {useGetAge({datetime: new Date(FechaNacimiento)})}</div>
                <div style={{width: '100%', marginBottom: '10px'}}>Cédular : {Cedula}</div>
                <div style={{width: '100%', marginBottom: '10px'}}>Sexo: {Sexo}</div>
                <div style={{width: '100%', marginBottom: '10px'}}>Teléfono: {Telefono}</div>
                <div style={{width: '100%', marginBottom: '10px'}}>Dirección: {Direccion}</div>

            </Card>
    )
}
