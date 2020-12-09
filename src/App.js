
import './App.scss';
import Header from './components/header/header.js';
import Beam from './components/beam/beam.js';
import React from "react";


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      beamType: null,
      doelgroep: ""
    }
  }
  beamTypeCallback = (childData) => {
    this.setState({beamType: childData});
  }
  doelgroepCallback = (childData) => {
    this.setState({doelgroep: childData});
  }

  render (){
    //this.getTopics();
    //this.getSubgroups();
  return (
    <div className="App">
      <Header parentCallback={this.doelgroepCallback}/>
      <Beam parentCallback={this.beamTypeCallback} />
    </div>
  );
}
}

export default App;
