import './beam.scss';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from "react";

class Beam extends React.Component {
   

  constructor(props) {
    super(props);
    this.state = {topic: "",
                  subgroup: "",
                  showInput: false,
                };
    
  }
  getSubgroups(){
    var subgroups = ["EMPIRische THERAPIE",
    "GERICHTE THERAPIE",
    "MIDdelEN",
    "PROFYLAXE",
    "TDM"
];
    return subgroups;
  }
  getTopics(){
    var topics = ["ABDOMINAAL",
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
    return topics;
  }
  
selectSubgroup(type){
  this.setState({
    subgroup : type,
    showInput: false
  });
}
selectTopic(type){
  this.setState({
    topic : type,
    showInput: false
  });
  this.props.parentCallback(this.state);
}

    
  render() {
    return (
      <>
            <section className="App-section App-section--primary">
              <div className="App-container App-container--xl">
                <div className="beam">
                <ul>
                  {this.getSubgroups().map((type) => <li id={type} key={type}>
                    <a className={this.state.subgroup === type ? 'beam__isSelected' : '' }
                     onClick={() => this.selectSubgroup(type)}>{type}</a> </li>)}
                  <div className="beam__div-item">
                  {this.state.showInput && <input className={"beam__input"} type="text" placeholder="zoekterm"/>}
                   <div className="clickable beam__search" >
                     <FontAwesomeIcon  icon={faSearch} onMouseEnter={() => this.setState({showInput: true})}/>
                     </div>
                   
                   </div>
                </ul>
               
                </div>
              </div>
          </section>
          <section className="App-section App-section--secondary">
          <div className="App-container App-container--xl">
            <div className="beam">
            <ul>
                  {this.getTopics().map((type) => <li id={type} key={type}>
                    <a className={this.state.topic === type ? 'beam__isSelected' :''}
                    onClick={() => this.selectTopic(type)}>{type}</a> </li>)}
                </ul>
            </div>
          </div>
        </section>
     </>
    );
  }
  }
  
  export default Beam;