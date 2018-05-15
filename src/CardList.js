import React from 'react';
import Card from './Card'

const CardList = ({devs}) => {
    return (
        <div>
            {
                devs.map((dev, i) => {
                    return (
                        <Card
                            key={i}
                            id={dev.id}
                            name={dev.name}
                            github={dev.github}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
