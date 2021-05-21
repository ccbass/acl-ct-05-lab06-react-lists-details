import React from 'react';
import { useParams } from 'react-router-dom';
import { useAvatarFetchOneChar } from '../hooks/characters/CharHooks';


function CharDetailContainer() {
  const { id } = useParams();
  const { loading, data } = useAvatarFetchOneChar(id);

  if(data && loading !== 'loading'){
    return (
      <div>
        <h2>{data.name} Details</h2>
        <section>
          {<img src={data.photoUrl} />}
          <h3>{data.name}</h3>
          <h4>{data.affiliation}</h4>
          <p>{data.profession}</p>
        </section>
      </div>
    );
  }
  else {
    return <h1>L O A D I N G</h1>;
  }
}



export default CharDetailContainer;
