import React from 'react';

import { PanelMenu } from 'primereact/panelmenu';

export default function SiderBarComponent({ShowSubMenu})
{

    const items = [
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
                       icon:'pi pi-fw pi-bookmark'
                    },
                    {
                       label:'Prospectos',
                       icon:'pi pi-fw pi-video'
                    }
                 ]
              },
              {
               label:'RRHH',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Empleados',
                     icon:'pi pi-fw pi-bookmark'
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
                       icon:'pi pi-fw pi-calendar-plus'
                    },
                 ]
              },
              {
               label:'RRHH',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'tardanzas de empleados',
                     icon:'pi pi-fw pi-calendar-plus'
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
                     icon:'pi pi-fw pi-calendar-plus'
                  },
               ]
            },
            {
             label:'RRHH',
             icon:'pi pi-fw pi-pencil',
             items:[
                {
                   label:'importar desde excel empleados',
                   icon:'pi pi-fw pi-calendar-plus'
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
            },
            {
             label:'info generales',
             icon:'pi pi-fw pi-pencil',
          },
          {
            label:'sucusales',
            icon:'pi pi-fw pi-pencil',
         },
         {
          label:'agencias',
          icon:'pi pi-fw pi-pencil',
         },
         {
            label:'Usuarios y Roles',
            icon:'pi pi-fw pi-pencil',
            items: [
               {
                  label:'usuarios',
                  icon:'pi pi-fw pi-pencil',
               },
               {
                  label:'roles',
                  icon:'pi pi-fw pi-pencil',
               },
               {
                  label:'permisos',
                  icon:'pi pi-fw pi-pencil',
               }
            ]
           }
         ]
      }
    ];

    return ( <PanelMenu model={items} style={{backgroundColor: '#F5F5F5'}} /> )
}


