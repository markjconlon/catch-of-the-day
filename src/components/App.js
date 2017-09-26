import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes.js';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    //getinitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }
  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes}; //takes a copy of existing state
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // this.state.fishes.fish1 = fish; possible but not advised due to performance
    //set state
    this.setState({ fishes: fishes}) //the same as { fishes }
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
