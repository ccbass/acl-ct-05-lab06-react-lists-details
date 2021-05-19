import React, { useState } from 'react'
import {useAvatarFetchChars} from '../components/characters/CharHooks'
import CharList from '../components/characters/CharList'



function CharListContainer() {
    const {data, loading, changePage} = useAvatarFetchChars()

    return (
        <div>
            <button onClick={() => changePage('DOWN')}>PREV PAGE</button>
            <button onClick={() => changePage('UP')}>NEXT PAGE</button>
            <CharList characters={data} />
            
        </div>
    )
}



export default CharListContainer

