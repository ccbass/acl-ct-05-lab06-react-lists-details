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
                <h2>{data.name}'s Details</h2>
                <section>
                    {<img src={data.photoUrl} />}
                    <h3>{data.name}</h3>
                    <h4>{data.affiliation}</h4>
                    <p>{data.profession}</p>
                </section>
            </div>
        )
    }
    else{
        return null
    }
}



export default CharDetailContainer
