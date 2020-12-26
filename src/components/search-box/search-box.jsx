import React from 'react'
import './search-box.css'

function SearchBox({placeholder, changeHandler}) {
    return (
        <div className='search'>
            <input 
                type='search' 
                placeholder={placeholder}
                onChange={ changeHandler }>
            </input>
        </div>
    )
}

export default SearchBox
