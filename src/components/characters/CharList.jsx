import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

function CharList({characters}) {
    return (
        <div className={'characterlist'}>
            {characters && characters
                .map(char => 
                    <div key={char._id}>
                        <Character character={char} />
                    </div>
                )
            }
        </div>
    )
}

CharList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            allies: PropTypes.array.isRequired,
            enemies: PropTypes.array.isRequired,
            photoUrl: PropTypes.string,
            name: PropTypes.string.isRequired,
        })
    )

}

export default CharList

