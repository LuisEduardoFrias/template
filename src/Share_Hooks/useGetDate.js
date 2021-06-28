import PropTypes from 'prop-types'

export default function useGetDate(datetime)
{
    return `${new Date(datetime).getDate()}/${1 + new Date(datetime).getUTCMonth()}/${new Date(datetime).getFullYear()}`;
}

useGetDate.propTypes = {
    datetime: PropTypes.any.isRequired
}


