/* @flow */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import SearchContext from './../contexts/SearchContext';

const SearchComponent = () => {
    const [ search, setSearch ] = useState('');
    return (
        <SearchContext.Consumer>
            {
                ({changeSearch}) => (
                    <TextField 
                        label={'Búsqueda'} 
                        value={search} 
                        onChange={event => {
                            const searchText = event.target.value;
                            setSearch(searchText);
                            changeSearch(searchText);
                        }} />
                )
            }
        </SearchContext.Consumer>
    );
};

export default SearchComponent;