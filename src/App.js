import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './App.css';
import DictionaryComponent from './components/DictionaryComponent';
import SearchComponent from './components/SearchComponent';
import SearchContext from './contexts/SearchContext';

class App extends Component {
  
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

  changeSearch = search => {
    const searchContext = { ...this.state.searchContext, search } ;
    this.setState({ searchContext });
  }

  onCheckShowIncrement = showIncrement => {
    console.log(showIncrement);
    this.setState({ showIncrement });
  }

  render() {
    return (
      <div className="App">
        <SearchContext.Provider value={this.state.searchContext}>
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
          <SearchContext.Consumer>
            {
              ({search}) => <DictionaryComponent word={search}></DictionaryComponent>
            }
          </SearchContext.Consumer>
          
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
