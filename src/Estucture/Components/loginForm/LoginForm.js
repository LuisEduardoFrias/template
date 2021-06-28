import React from 'react'
import { Link } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

import EpsLogo from '../../../assests/img/logo.png';

import './Login.css';

export default function LoginForm({handleLogin})
{
    return (
        <div className="p-grid p-dir-rev" style={{fontFamily:'arial', backgroundColor: 'rgba(236, 242, 242)', height: '100%', margin: '0px', display:'flex', flexDirection: 'column',
         justifyContent: 'center', alignItems:'center'}}>

            <img src={EpsLogo} alt='Logo de eps.' style={{position: 'relative', top:'7%', zIndex:'9', width:'300px', height:'120px'}} />

            <div className="p-col-6 p-shadow-5" style={{position:'relative', backgroundColor: 'rgba(236, 242, 242, 0.3)', height: '50%', width: "40%", border: '2px solid lightgray',
             boxSizing: 'border-box', borderRadius: '15px 15px'}}>
             
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', height: '100%'}}>

                    <form  className="p-grid p-dir-col" style={{height: '70%', width: '300px', display: 'flex', flexDirection:'column'}}>

                        <div className="p-col">
                            <label style={{fontSize:'20px', fontFamily:'arial', fontWeight: 'bold', position:'absolute', left:'50%',
                            transform: 'translateX(-50%)'}}>Inicio de Sesión</label>
                        </div>

                        <div className="p-col" style={{marginTop:'20px'}}>

                            <span className="p-float-label" >
                                <InputText id="in" style={{fontFamily:'arial', width: '300px'}}/>
                                <label>Usuario</label>
                            </span>

                        </div>

                        <div className="p-col">

                            <span  className="p-float-label">
                                <Password inputStyle={{fontFamily:'arial',  width:'300px'}} feedback={false} />

                                <label>Contraseña</label>
                            </span>

                        </div>

                        <div className="p-col" style={{display: 'flex', flexDirection:'column',}}>

                            <Button label="Iniciar sesión" onClick={ handleLogin } style={{fontFamily:'arial', backgroundColor:'rgb(39, 180, 183)', border: '1px solid rgb(39, 180, 183)'}} />

                        </div> 

                        <Link to='/recuperar_contrasena' id='cursorDown' style={{position:'absolute', bottom:'30px', textDecoration: 'none', left:'50%',
                         color: 'black', transform: 'translateX(-50%)', fontFamily:'arial', border: '1px solid lightgray', borderRadius:'5px 5px', padding:'4px'}}>¡Olvidé la contraseña!</Link>

                    </form> 
                </div>
            </div>
        </div>
    )
}