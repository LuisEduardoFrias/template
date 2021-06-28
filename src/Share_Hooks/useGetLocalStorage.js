import PropTypes from 'prop-types'

export default function useGetLocalStorage({profile})
{
    return JSON.parse(localStorage.getItem(profile));
}

useGetLocalStorage.propTypes = {
    profile: PropTypes.string.isRequired
}