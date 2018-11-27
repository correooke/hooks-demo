import React from 'react';

const initialContext = {
    search: '',
    changeSearch: () => {}
};

const SearchContext = React.createContext(initialContext);

export default SearchContext;