import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Character({character}) {
    return (
        <div>
            <Link to={`/${character._id}`}>{character.name}</Link>
        </div>
    )
}

Character.propTypes = {
    character: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            allies: PropTypes.array.isRequired,
            enemies: PropTypes.array.isRequired,
            photoUrl: PropTypes.string,
            name: PropTypes.string.isRequired,
        })
}

export default Character
