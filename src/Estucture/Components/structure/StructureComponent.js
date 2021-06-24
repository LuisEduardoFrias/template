import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SiderBarComponent from "../routerLinks/SiderBarComponent.js";
import HeaderComponent from "../header/HeaderComponent.js";

import HomePage from '../../Pages/HomePage.js';
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
        flexDirection: 'row', 
        alignItems: 'stretch', 
        height: `Calc(100% - ${heightHeader})`,
        overflow: 'hidden',

    }

    const sider = {
        padding: '1px',
        margin: '1px 0px 0px 0px',
        width: '200px',
        height: '100%',
        backgroundColor: '#F5F5F5',
        borderRight: '1px solid rgb(222, 226, 230)',
        boxSizing: 'border-box',

    }

    const home = {
        padding: '5px',
        margin: '0px',
        width: `Calc(100%)`,
        height: 'Calc(100%)',
        overflow: 'hidden',
        
    }

    return (
        <BrowserRouter>
            <div style={{height: '100%', }}>

                <div style={header}>
                   <HeaderComponent />
                </div>

                <div style={container} >

                    <div style={sider} >
                        <SiderBarComponent />
                    </div>
                    
                    <div style={home} >
                        <Switch>
            
                            <Route exact path='/' component={HomePage} />

                            <Route path='**' component={NotFoundPage} />

                        </Switch>
                    </div>
                
                </div>

            </div>
        </BrowserRouter>
    )
}


