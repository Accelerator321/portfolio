import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container my-3">
          <h1>Some Top Headlines of our website</h1>
          <div className='row my-2'>
            <div className='col-md-4'>
            <News title='title' desc='desc' />
            </div>
            <div className='col-md-4'>
            <News title='title' desc='desc' />
            </div>
            <div className='col-md-4'>
            <News title='title' desc='desc' />
            </div>
          </div>
          

        </div>
      </>
    )
  }
}



