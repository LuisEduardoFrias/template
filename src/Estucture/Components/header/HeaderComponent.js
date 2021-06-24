import React from 'react'

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

export default function HeaderComponent()
{
    const items = [
        {
           label:'Luis Eduardo Frias',
           icon:'pi pi-fw pi-file',
        }
     ];
     
    const UserStyle ={
        display: 'flex',
        flexDirecction: 'row',
        alignItems: 'center',

    }

    return ( <Menubar model={items} style={{ height: '50px', boxSizing: 'border-box'}} 
    end={ <div style={UserStyle}> <Button icon="pi pi-user" className="p-button-rounded p-button-info" /> <label style={{marginLeft: '5px'}}>Luis Eduardo frias</label></div> }/> )
}
