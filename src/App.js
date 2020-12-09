
import './App.scss';
import Header from './components/header/header.js';
import Beam from './components/beam/beam.js';
import React from "react";


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      beamType: null,
      subgroups: [],
      topics: [],
      doelgroep: ""
    }
  }
  getSubgroups() {
    this.state.subgroups = ["EMPIRische THERAPIE",
        "GERICHTE THERAPIE",
        "MIDdelEN",
        "PROFYLAXE",
        "TDM"
    ];
  }

   getTopics() {
    this.state.topics = ["ABDOMINAAL",
        "CARDIOVASCULAIR",
        "CENTRAAL ZENUWSTELSEL",
        "GISTEN EN SCHIMMELS",
        "HUID EN WEKE DELEN",
        "NEUS-KEEL-OOR",
        "NEUTROPENE KOORTS",
        "OOG",
        "ORTHOPEDIE",
        "REISGENEESKUNDE",
        "RESPIRATOIR",
        "SEPSIS",
        "URINAIR",
        "UROGENITAAL EN SEKSUEEL OVERDRAAGBARE INFECTIES"
    ];
}

  beamTypeCallback = (childData) => {
    this.setState({beamType: childData});
    console.log(childData);
  }
  doelgroepCallback = (childData) => {
    this.setState({doelgroep: childData});
    console.log(childData);
  }

  render (){
    this.getTopics();
    this.getSubgroups();
  return (
    <div className="App">
      <Header parentCallback={this.doelgroepCallback}/>
      <Beam parentCallback={this.beamTypeCallback} subgroups={this.state.subgroups} topics={this.state.topics}/>
    </div>
  );
}
}

export default App;
