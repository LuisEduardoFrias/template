import React, { useRef  } from 'react'
import logo from '../../../assests/img/logo.png'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { ContextMenu } from 'primereact/contextmenu';

export default function HeaderComponent()
{
    const cm = useRef(null);
    const items = [
        {
           label:'Log out',
           icon:'pi pi-fw pi-file',
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

    const start = <img src={logo} alt='Logo' height="40" className="p-mr-2"></img >;
    const end = <div style={UserStyle} onClick={(e) => cm.current.show(e)}> <Button icon="pi pi-user" className="p-button-rounded p-button-info" onClick={(e) => cm.current.show(e)} /> <label style={{marginLeft: '5px', color:'white', cursor:'pointer'}}>Luis Eduardo frias</label></div>

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
