import './beam.scss';
import '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import Topics from "../data/topics.json";
import Subgroups from "../data/subgroups.json";

class Beam extends React.Component {
   

  constructor(props) {
    super(props);
    this.state = {topic: "",
                  subgroup: "",
                  showInput: false,
                  topics: [],
                  subgroups: []
                };
    
  }
  componentDidMount(){
    this.setState({
                  topics: Topics,
                  subgroups: Subgroups
    });
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
                  {this.state.subgroups.map((type) => <li id={type.name} key={type.name}>
                    <a className={this.state.subgroup === type.name ? 'beam__isSelected' : '' }
                     onClick={() => this.selectSubgroup(type.name)}>{type.name}</a> </li>)}
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
                  {this.state.topics.map((type) => <li id={type.name} key={type.name}>
                    <a className={this.state.topic === type.name ? 'beam__isSelected' :''}
                    onClick={() => this.selectTopic(type.name)}>{type.name}</a> </li>)}
                </ul>
            </div>
          </div>
        </section>
     </>
    );
  }
  }
  
  export default Beam;