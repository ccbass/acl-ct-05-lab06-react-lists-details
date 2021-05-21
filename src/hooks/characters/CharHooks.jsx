import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function useAvatarFetch(url) {
  const [loading, setLoading] = useState('idle');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const changePage = (dir) => {
    if(dir === 'DOWN' && page !== 1){
      setPage(prevPage => prevPage - 1);
    }
    if(dir === 'UP'){
      setPage(prevPage => prevPage + 1);
    }
  }; 

  useEffect(() => {
    setLoading('loading');
    const fetchCharacters = async () => {
      // eslint-disable-next-line max-len
      const rawData = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);
      const jsonData = await rawData.json();
      setData(jsonData);
      setLoading('idle');
    };

    const fetchOneCharacter = async () => {
      // eslint-disable-next-line max-len
      const rawData = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${url}`);
      const jsonData = await rawData.json();  
      setData(jsonData);
      setLoading('idle');
    };

    if(!url){
      fetchCharacters();
    } else {
      fetchOneCharacter();
    }

  }, [page, url]);


  return { data, loading, changePage };
}

useAvatarFetch.propTypes = {
  url: PropTypes.string,
};

export { useAvatarFetch };
