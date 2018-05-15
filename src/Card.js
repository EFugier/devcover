import React from 'react';

const Card = ({id, name, github}) => {
    return (
        <div className='tc bg-light-blue dib br3 pd3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://www.robohash.org/${id+github}?200x200`}/>
          <div>
              <h2>{name}</h2>
              <p>{github}</p>
          </div>
        </div>

    )
}

export default Card;
