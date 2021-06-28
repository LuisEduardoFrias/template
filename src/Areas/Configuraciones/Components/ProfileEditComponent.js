import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import { Dialog } from 'primereact/dialog';
import useSetLocalStorage from '../../../Share_Hooks/useSetLocalStorage.js';
import useForm from '../../../Share_Hooks/useForm.js';

import './Profile.css';

export default function ProfileComponent(profile)
{
    const [showMessage, setShowMessage] = useState(false);

    debugger;

/*     useEffect(() => {
     
        handleInputChange({name: 'userName',value:})
        const profile_ = { 
            : profile.Nombre,
            charge: profile.Cargo,
            DateOfBirth:profile.FechaNacimiento, 
            document:profile.Cedula,
            sex:profile.Sexo,
            Phone:profile.Telefono, 
            Address:profile.Direccion
        };

    }, [profile])

    console.log(profile_); */
    
    const [ values, handleInputChange, reset ] = useForm({ 
        userName: '',
        charge: '',
        DateOfBirth: '', 
        document: '',
        sex: '',
        Phone: '', 
        Address: ''
    });

    const {userName, charge, DateOfBirth, document, sex, Phone, Address} = values;

    const citySelectItems = [
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Femenino', value: 'Femenino'}
    ];

    const dialogFooter = 
    <div className="p-d-flex p-jc-center">
        <Button label="OK" className="p-button-text" autoFocus onClick={ () => setShowMessage(false) } />
    </div>;
 
    const HandleForm = () =>  
    {
        useSetLocalStorage('profile', 
        {
            profile:
            {
                Nombre: userName,     
                Cargo: charge,
                FechaNacimiento: Date(DateOfBirth),
                Cedula: document,
                Sexo: sex, 
                Telefono: Phone,
                Direccion: Address
            }
        });

        reset();
    }

    return (
        <div className="form-demo">
           
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
              
                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                   
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>¡Registro exitoso!</h5>
 {/*                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p> */}

                </div>

            </Dialog>

            <div className="p-d-flex p-jc-center" style={{marginTop:'8%'}}>

                <div className="card">

                    <h5 className="p-text-center">Editar perfil</h5>

                    <form  className="p-fluid">
                        
                        <div className="p-field">
                            
                            <span className="p-float-label">
                                <InputText name="userName" value={userName} onChange={handleInputChange} autoFocus />
                                <label htmlFor="userName" >Nombre*</label>
                            </span>
                            
                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <InputText name="charge" value={charge} onChange={handleInputChange} />
                                <label htmlFor="charge" >Cargo*</label>
                            </span>

                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <Calendar name="DateOfBirth" value={DateOfBirth} onChange={handleInputChange} 
                                 dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="DateOfBirth">FechaNacimiento</label>
                            </span>

                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <InputMask name="document" value={document} onChange={handleInputChange} 
                                 mask="999-9999999-9" />
                                 <label htmlFor="DateOfBirth">Cédula</label>
                            </span>

                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <InputMask name="Phone" value={Phone} onChange={handleInputChange}
                                mask="(999) 999-9999" />
                                 <label htmlFor="DateOfBirth">Teléfono</label>
                            </span>

                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <InputText name="Address" value={Address} onChange={handleInputChange} />
                                <label htmlFor="Address" >Direccion</label>
                            </span>

                        </div>

                        <div className="p-field">

                            <span className="p-float-label">
                                <Dropdown name="sex" value={sex} options={citySelectItems} sele onChange={handleInputChange}  
                                placeholder="Sexo"/>
                            </span>

                        </div>

                        <Button type="submit" label="Submit" onClick={(e) => {HandleForm(e)}} className="p-mt-2" />

                    </form>
                </div>
            </div>
        </div>
    );
}

ProfileComponent.propTypes = {
    profile: PropTypes.any.isRequired
}
