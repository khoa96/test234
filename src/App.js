import React, { Component } from 'react'
import './App.css'
import Filter from './components/Shelf/Filter/Filter';
import Shelf from './components/Shelf/Shelf';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Filter />
          <Shelf />
        </main>
      </React.Fragment>
    )
  }
}
