import React, { useContext, useRef } from 'react'

import logo from '../../../assests/img/logo.png'

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { ContextMenu } from 'primereact/contextmenu';

import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types.js';

export default function HeaderComponent()
{
    const { user, dispatch } = useContext( AuthContext );

    const cm = useRef(null);

    const handleLogin = () => 
    {
        localStorage.setItem('user', JSON.stringify({"name":"Luis Eduardo Frias","logged":false}));

        dispatch({
            type: types.logout,
            payload: {
                name: 'Luis Eduardo Frias',
                logged:false
            }
        });
    }

    const items = [
        {
           label:'Log out',
           icon:'pi pi-fw pi-file',
           command:handleLogin
        },
        {
            label:'Configuración',
            icon:'pi pi-fw pi-file',
         }
     ];
     
    const UserStyle = {
        display: 'flex',
        flexDirecction: 'row',
        alignItems: 'center'

    }

    const start = <img src={logo} alt='Logo eps.' height="40" className="p-mr-2"/>;

    const end = <div style={UserStyle} onClick={(e) => cm.current.show(e)}> 
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info"  />
                    <label style={{marginLeft: '5px', color:'white', cursor:'pointer'}}>{user.name}</label>
                </div>
    
    return ( 
        <>
        <ContextMenu model={items} ref={cm} ></ContextMenu>
        
        <Menubar 
            start={start} 
            end={end} 
            style={{ height: '50px', boxSizing: 'border-box',  backgroundColor: '#0DA0C1'}}
            />
        </> 
    )
}
