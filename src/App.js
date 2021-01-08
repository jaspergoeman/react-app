
import './App.scss';
import Header from './components/header/header.js';
import Beam from './components/beam/beam.js';
import Aandoeninggroepen from './components/aandoeninggroepen/aandoeninggroepen.js';
import React from "react";


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      
    };
  }
  topicCallback = (childData) => {
    this.setState({topic: childData});
    console.log(this.state.topic);
  }
  subgroupCallback = (childData) => {
    this.setState({subgroup: childData});
    console.log(this.state.subgroup);
  }
  doelgroepCallback = (childData) => {
    this.setState({doelgroep: childData});
    console.log(this.state.doelgroep);
  }

  render (){
  return (
    <div className="App">
      <Header parentCallback={this.doelgroepCallback}/>
      <Beam  parentTopicCallback={this.topicCallback} parentSubgroupCallback={this.subgroupCallback} />
      <Aandoeninggroepen doelgroep={this.state.doelgroep} topic={this.state.topic} subgroup={this.state.subgroup}/>
    </div>
  );
}
}

export default App;
