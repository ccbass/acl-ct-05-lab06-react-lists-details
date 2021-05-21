import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


function useAvatarFetchChars() {
    const [loading, setLoading] = useState('idle')
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null)

    const changePage = (dir) => {
        if (dir === 'DOWN' && page !== 1){
            setPage(prevPage => prevPage - 1)
        }
        if (dir === 'UP'){
            setPage(prevPage => prevPage + 1)
        }
    } 

    useEffect(() => {
        setLoading('loading')
        const fetchCharacters = async () => {
            const rawData = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`)
            const jsonData = await rawData.json()
            
            setData(jsonData)
            setLoading('idle')
        }
        fetchCharacters();

    }, [page])


    return {data, loading, changePage}
}




function useAvatarFetchOneChar(url) {
    const [loading, setLoading] = useState('idle')
    const [data, setData] = useState(null)


    useEffect(() => {
        setLoading('loading')
        const fetchCharacter = async () => {
            const rawData = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${url}`)
            const jsonData = await rawData.json()
            
            setData(jsonData)
            setLoading('idle')
        }
        fetchCharacter();

    }, [url])


    return {data, loading}
}

useAvatarFetchOneChar.propTypes = {
    url: PropTypes.string.isRequired,
}

export {useAvatarFetchChars, useAvatarFetchOneChar}
