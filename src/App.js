import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import { react } from '@babel/types';

class App extends Component {
  state = { 
    counters:[
        {id:1, value: 4},
        {id:2, value: 2},
        {id:3, value: 0},
        {id:4, value: 0},
    ]
 }
 handleDelete = (counterId) =>{
    
   
    // console.log('event fired',counterId);
    const counters = this.state.counters.filter(c =>c.id !== counterId);

    this.setState({counters : counters });

 };
 handleReset = ()=>{
     const counters = this.state.counters.map(c =>{
         c.value = 0;
         return c;
     });

     this.setState({ counters });
 };
 handleIncreament = (counter)=>{

    const counters = [...this.state.counters];
    // console.log(counters);
    const index = counters.indexOf(counter);
    // console.log(index);

    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});

 }
  render() { 
    return ( 
      <React.Fragment>
      <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}></Navbar>
      <main className="container">
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncreament = {this.handleIncreament}
        onDelete = {this.handleDelete}
        />

      </main>
    </React.Fragment>
     );
  }
}
 


export default App;
