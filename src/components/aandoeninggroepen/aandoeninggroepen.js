import './aandoeninggroepen.scss';
import '../../App.scss';
import React from 'react';
import Aandoeningen from "../data/aandoeninggroepen.json";
import Aandoening from '../aandoening/aandoening.js';

import AandoeningData from '../data/aandoening.json';

class Aandoeninggroepen extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        aandoeningen: [],
        selectedAntibioticas: []
      };
    }
    ifCondition = () => {
        this.state.aandoeningen = []
        Aandoeningen.forEach(a => {
            if (a.doelgroep === this.props.doelgroep && a.topics.includes(this.props.topic) && a.subgroups.includes(this.props.subgroup)){
                this.state.aandoeningen.push(a);
            }
        });
        console.log('did this', this.props.doelgroep, this.props.topic,this.props.subgroup, this.state.aandoeningen);
    };
    show = (aandoening) => {
      this.setState({
        selectedAandoening: aandoening,
        showAandoening: true
      });
      this.getAntibioticas();
      console.log(this.state.showAandoening)
  };
  close = () => {
    this.setState({showAandoening: false});
  };
  getAntibioticas= () => {
    console.log(this.state.selectedAandoening);
    AandoeningData.map(a => {
        if(a.name === this.state.selectedAandoening){
            this.setState({selectedAntibioticas: a.antibiotica});
            console.log(a.antibiotica);
        }
    });
    console.log(this.state.selectedAntibioticas);
    return this.state.selectedAntibioticas;
    
} ;
    
    render() {
        

    return (
        <section className="App-section">
            <div className="App-container App-container--xl">
            {this.ifCondition()}
            {this.state.aandoeningen.map((a) => 
                 
            <div className="card">
            <div className="card-title">
              { a.name }
            </div>
            <div className="card-content">
                <ul className="card-content-list">
                    
                    {a.aandoeningen.map((aandoening)=>
                       <li key={aandoening.name}><a onClick={() => this.show(aandoening)}>{aandoening}</a></li> )}
                    
                </ul>
                    
            </div>
          </div>)}
               


            </div>
            <Aandoening selectedAandoening={this.state.selectedAandoening} showAandoening={this.state.showAandoening} antibioticas={this.state.selectedAntibioticas} close={this.close}/>
        </section>
    );
  }
  }
  
  export default Aandoeninggroepen;