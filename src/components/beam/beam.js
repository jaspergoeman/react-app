import './beam.scss';
import '../../App.scss';
//import BeamSubgroup from './beam-subgroup-data.js';
//import BeamTopics from './beam-topics-data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from "react";

class Beam extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {topic: "",
                  subgroup: ""};
    
  }
  


selectSubgroup(type){
  this.state.subgroup = type;
  console.log(this.state.subgroup);

  if(document.getElementsByClassName("beam__subgroup__isSelected")[0]){
    document.getElementsByClassName("beam__subgroup__isSelected")[0].classList.remove("beam__subgroup__isSelected");
  };

  document.getElementById(type).classList.add("beam__subgroup__isSelected");

}
selectTopic(type){
  this.state.topic = type;
  console.log(this.state.topic);

  if(document.getElementsByClassName("beam__topic__isSelected")[0]){ 
    document.getElementsByClassName("beam__topic__isSelected")[0].classList.remove("beam__topic__isSelected");
  };

  document.getElementById(type).classList.add("beam__topic__isSelected");

  this.props.parentCallback(this.state);
}
    
  render() {
    return (
      <>
            <section className="App-section App-section--primary">
              <div className="App-container App-container--xl">
                <div className="beam">
                <ul>
                  {this.props.subgroups.map((type) => <li id={type} key={type}><a  onClick={() => this.selectSubgroup(type)}>{type}</a> </li>)}
                </ul>
                <input  type="text" placeholder="zoekterm"/>
                <div className="clickable beam__search" >
                <FontAwesomeIcon  icon={faSearch} />
                </div>
                </div>
              </div>
          </section>
          <section className="App-section App-section--secondary">
          <div className="App-container App-container--xl">
            <div className="beam">
            <ul>
                  {this.props.topics.map((type) => <li id={type} key={type}><a onClick={() => this.selectTopic(type)}>{type}</a> </li>)}
                </ul>
            </div>
          </div>
        </section>
     </>
    );
  }
  }
  
  export default Beam;