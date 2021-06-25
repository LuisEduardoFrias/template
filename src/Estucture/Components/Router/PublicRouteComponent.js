import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


export default function PublicRouteComponent({isAuthenticated, component: Component, ...rest})
{
    return (
        <Route { ...rest } component={ 
            (props)  =>   ( !isAuthenticated )
                        ? ( <Component { ...props } /> )
                        : ( <Redirect to="/" /> )
            }
        />
    )
}

PublicRouteComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
