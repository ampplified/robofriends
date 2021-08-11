import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return [
        <div className='tc pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' value={searchfield} onChange={searchChange}/>
        </div>
    ];


}
export default Searchbox;