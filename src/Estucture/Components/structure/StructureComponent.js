import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenuComponent from "../routerLinks/MenuComponent.js";
import HeaderComponent from "../header/HeaderComponent.js";

import HomePage from '../../Pages/HomePage.js';
import ProfileShowPage from '../../../Areas/Configuraciones/Pages/ProfileShowPage.js'
import ProfileEditPage from '../../../Areas/Configuraciones/Pages/ProfileEditPage.js'
import CrudExample from '../../../Areas/Gestion/Components/crudExample'
import NotFoundPage from '../../Pages/NotFoundPage.js';

export default function StructureComponent(  )
{

    const heightHeader = '50px';

    const header = {
        boxSizing: 'border-box',
        padding: '1px',
        margin: '0px',
        width: '100%',
        height: heightHeader,

    }

    const container = {
        padding: '0px',
        margin: '0px',
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'stretch', 
        height: `Calc(100% - ${heightHeader})`,
        overflow: 'hidden',

    }

    const Sizeheight = 40;
    const menu = {
        padding: '1px',
        margin: '1px 0px 0px 0px',
        width: '100%',
        height: `${Sizeheight}px`,
        backgroundColor: '#F5F5F5',
        borderRight: '1px solid rgb(222, 226, 230)',
        boxSizing: 'border-box',

    }

    const home = {
        boxSizing:'boxSizing',
        borderRadius: '5px 5px',
        margin: '2px 0px 0px 0px',
        padding: '3px',
        width: `Calc(100%)`,
        height: 'Calc(100%)',
         overflow: 'auto',
        position: 'relative',
        border: '1px solid lightgray',
        
    }

    return (
        <div style={{height: '100%', padding: '2px' }}>

            <div style={header}>
               <HeaderComponent />
            </div>

            <div style={container} >

                <div style={menu} >
                    <MenuComponent Sizeheight={Sizeheight}/>
                </div>
                
                <div style={home} >
                    <Switch>
        
                        <Route exact path='/home' component={HomePage} />

                        <Route exact path='/' component={HomePage} />

                        <Route exact path='/profile' component={ProfileShowPage} />

                        <Route exact path='/profile/edit' component={ProfileEditPage} />

                        <Route exact path='/crud' component={CrudExample} />
                        
                        <Route path='**' component={NotFoundPage} /> 

                    </Switch>
                </div>
            
            </div>

        </div>
    )
}


