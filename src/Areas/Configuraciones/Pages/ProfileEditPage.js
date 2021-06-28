import React from 'react'
import ProfileEditComponent from '../Components/ProfileEditComponent.js';
import useGetLocalStorage from '../../../Share_Hooks/useGetLocalStorage.js';

export default function ProfileEditPage()
{
    const profile = useGetLocalStorage({profile:'profile'});

    return (
        <div>
            <ProfileEditComponent profile={profile} />
        </div>
    )
}
