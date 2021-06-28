import PropTypes from 'prop-types'

export default function useGetAge({datetime})
{
    let suma = 0;
    const date = new Date(datetime);
    const NewDateTime = new Date();

    if(NewDateTime.getMonth() === date.getMonth())
        if (date.getDay() >= NewDateTime.getDay())
            suma = 1;

    if (date.getMonth() > NewDateTime.getMonth())
        suma = 1;

    return NewDateTime.getYear() - (date.getYear() + suma);
}

useGetAge.propTypes = {
    datetime: PropTypes.any.isRequired
}
