import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';

import PrivateRouteComponent from './PrivateRouteComponent.js';
import PublicRouteComponent from './PublicRouteComponent.js';
import StructureComponent from '../structure/StructureComponent.js';

import LoginPage from '../../Pages/LoginPage';

export default function AppRouterComponent()
{
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch> 
                <PublicRouteComponent 
                    exact 
                    path="/login" 
                    component={ LoginPage } 
                    isAuthenticated={ user.logged }
                />
                
                <PrivateRouteComponent 
                    path="/" 
                    component={ StructureComponent } 
                    isAuthenticated={ user.logged }
                />  
            </Switch>
        </Router>
    )
}
