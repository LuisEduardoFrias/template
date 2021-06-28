import React, { useContext, useState } from 'react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types.js';
import ProfileMenuComponents from '../userMenuTogger/ProfileMenuComponents';
import logo from '../../../assests/img/logo.png'

export default function HeaderComponent({history})
{
    const { user, dispatch } = useContext( AuthContext );

    const [render, setstate] = useState(false)

    const handleLogin = () => 
    {
        localStorage.setItem('user', JSON.stringify({"name":"","logged":false}));

        dispatch({
            type: types.logout,
            payload: {
                name: '',
                logged:false
            }
        });
    }

    const header = {
        display: 'flex',
        flexDirecction: 'row',
        height:'50px', 
        boxSizing:'border-box',
        border: '1px solid lightgray',
        borderRadius: '5px',
        padding: '4px',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    }

    const UserStyle = {
        display: 'flex',
        flexDirecction: 'row',
        alignItems: 'center',
        marginRight: '20px',

    }
        
    const items = [
        {label:'Cerrar sesion', icon:'pi pi-fw pi-sign-out',    url: '/login',   command: () => handleLogin},
        {label:'Perfil',        icon:'pi pi-fw pi-user',        url: '/profile' }
    ] 

    return ( 
        <div style={header}>

            <Link to='/home'>
                <img src={logo} alt='Logo eps.' height="40" className="p-mr-2" style={{cursor: 'pointer'}} />
            </Link>

            <div style={UserStyle}  onClick={() => {setstate(!render)}}> 
                
                <Button icon="pi pi-user" className="p-button-rounded p-button-info" />
                
                <label style={{marginLeft:'5px'}}>{user.name}</label>
                
                <ProfileMenuComponents model={items} render={render}/>

            </div>

        </div> 
    )
}
