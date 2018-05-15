import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pd2'>
            <input className='pa3 ba b--blue bg-washed-green'
                   type='search'
                   placeholder='search devs'
                   onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
