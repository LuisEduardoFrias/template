import { useContext } from 'react'

import { AuthContext } from '../../auth/AuthContext.js';
import { types } from '../../types/types';

import LoginForm from '../Components/loginForm/LoginForm.js';

export default function LoginPage({ history })
{
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: 'Luis Eduardo Frias'
            }
        });

        history.replace( localStorage.getItem('lastPath') || '/home' );
    }

    return (
        <LoginForm handleLogin={handleLogin} />
    )
}
