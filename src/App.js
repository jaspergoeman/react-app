
import './App.scss';
import Header from './components/header/header.js';
import Beam from './components/beam/beam.js';
import React from "react";
import Antibioticagroepen from './components/data/antibioticagroepen.json'


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
    console.log(this.state.beamType);
  }
  doelgroepCallback = (childData) => {
    this.setState({doelgroep: childData});
    console.log(Antibioticagroepen.filter(groep => groep.doelgroep === this.state.doelgroep));
  }

  render (){
  return (
    <div className="App">
      <Header parentCallback={this.doelgroepCallback}/>

      <Beam  parentCallback={this.beamTypeCallback} />
      {Antibioticagroepen.filter(groep => groep.doelgroep === this.state.doelgroep)
                          .map((groep) => <p>{groep.name}</p>)}
    </div>
  );
}
}

export default App;
