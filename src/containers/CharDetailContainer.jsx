import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import { useAvatarFetchOneChar } from '../components/characters/CharHooks';
// import {useAvatarFetchChars} from '../components/characters/CharHooks'
// import CharList from '../components/characters/CharList'



function CharDetailContainer() {
    const {id} = useParams()
    const {loading, data} = useAvatarFetchOneChar(id)

    if (data){
        return (
            <div>
                <h2>Details for: {data.name}</h2>
                {data.name}
    
            </div>
        )
    }
    else{
        return null
    }
}



export default CharDetailContainer
