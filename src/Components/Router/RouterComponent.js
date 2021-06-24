import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RouterLinksComponent from "../RouterLinks/RouterLinksComponent.js";
import HeaderComponent from "../Header/HeaderComponent.js";

export default function RouterComponent(  )
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
        backgroundColor: 'rgb(248, 249, 250)',
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
                        <RouterLinksComponent />
                    </div>
                    
                    <div style={home} >

                        <Switch>
                            
                            <Route exact path='/'>
                                <h1>HOla</h1>
                            </Route>

                        </Switch>

                    </div>
                
                </div>

            </div>

        </BrowserRouter>
    )
}

