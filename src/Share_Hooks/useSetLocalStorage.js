import PropTypes from 'prop-types'

export default function useSetLocalStorage(key, {profile})
{
    localStorage.setItem(key,JSON.stringify(profile));
}

useSetLocalStorage.propTypes = {
    datetime: PropTypes.any.isRequired
}