import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DictionaryComponent from './components/DictionaryComponent';
import SearchComponent from './components/SearchComponent';
import SearchContext from './contexts/SearchContext';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = { 
      showIncrement: true,
      searchContext: {
        search: '',
        changeSearch: this.changeSearch,
      }
    };
  }

  changeSearch = (search) => {
    const searchContext = { ...this.state.searchContext, search } ;
    this.setState({ searchContext });
    console.log(search);
  }

  render() {
    const { searchContext } = this.state;
    return (
      <div className="App">
        <SearchContext.Provider value={searchContext}>
          <AppBar position="static">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Diccionario
              </Typography>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
          <SearchComponent />
          <DictionaryComponent word={searchContext.search} />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
