import React from 'react';

import { Menubar } from 'primereact/menubar';

import './Menu.css';

export default function SiderBarComponent({Sizeheight})
{
   const items = 
   [
      {
         label:'Gestión',
         icon:'pi pi-fw pi-file',
         items:[
            {
               label:'CRM',
               icon:'pi pi-fw pi-plus',
               items:[
                  { 
                     label:'Clientes',
                     icon:'pi pi-fw pi-bookmark',
                     url: '/'
                  },
                  {
                     label:'Prospectos',
                     icon:'pi pi-fw pi-video',
                     url: '/'
                  }
               ]
            },
            {
               label:'RRHH',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Empleados',
                     icon:'pi pi-fw pi-bookmark',
                     url: '/'
                  },
               ]
            },
         ]
      },
      {
         label:'Transacciones',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'Sales',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Facturación',
                     icon:'pi pi-fw pi-filter',
                     url: '/'
                  }
               ]
            }
         ]
      },
      {
         label:'Reportes',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'CRM',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'visitas semanales a prospectos',
                     icon:'pi pi-fw pi-calendar-plus',
                     url: '/'
                  },
               ]
            },
            {
               label:'RRHH',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'tardanzas de empleados',
                     icon:'pi pi-fw pi-calendar-plus',
                     url: '/'
                  },
               ]
            }
         ]
      },
      {
         label:'Herramientas',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'CRM',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'importar desde excel clientes',
                     icon:'pi pi-fw pi-calendar-plus',
                     url: '/'
                  },
               ]
            },
            {
               label:'RRHH',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'importar desde excel empleados',
                     icon:'pi pi-fw pi-calendar-plus',
                     url: '/'
                  },
               ]
            }
         ]
      },
      {
         label:'Configuraciones',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Informacion de Empresa',
               icon:'pi pi-fw pi-pencil',
               url: '/'
            },
            {
               label:'info generales',
               icon:'pi pi-fw pi-pencil',
               url: '/'
            },
            {
               label:'sucusales',
               icon:'pi pi-fw pi-pencil',
               url: '/'
            },
            {
               label:'agencias',
               icon:'pi pi-fw pi-pencil',
               url: '/'
            },
            {
               label:'Usuarios y Roles',
               icon:'pi pi-fw pi-pencil',
               items: [
                  {
                     label:'usuarios',
                     icon:'pi pi-fw pi-pencil',
                     url: '/'
                  },
                  {
                     label:'roles',
                     icon:'pi pi-fw pi-pencil',
                     url: '/'
                  },
                  {
                     label:'permisos',
                     icon:'pi pi-fw pi-pencil',
                     url: '/'
                  }
               ]
            }
         ]
      }
   ];

   return ( <Menubar style={{height: `${Sizeheight}px`}} model={items}/> );
}


