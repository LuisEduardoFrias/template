import axios from 'axios';

export default function CountryHook()
{
    const getCountries = () => 
    {
        return axios.get('data/countries.json')
            .then(res => res.data.data);
    }
}