import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import ShowGames from './ShowGames.js';
import Header from './header.js';
import FirebaseDetails from './config.js';

import './App.css';

const base = FirebaseDetails();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loading: true
    };
  }
  
  componentDidMount() {
    base.bindToState('games', {
      context: this,
      state: 'games',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    });
  }
  
  render() {
    return (
      <div>
        <Header />
        <Grid>
         {this.state.loading === true ? <div className="loader">Ladataaan..</div> : <ShowGames data={this.state.games} />}
        </Grid>
      </div>
    );
  }
}

export default App;