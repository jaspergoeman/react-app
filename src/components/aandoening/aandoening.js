import './aandoening.scss';
import '../../App.scss';
import React from 'react';
import Antibioticas from '../data/antibioticas.json';

class Aandoening extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };
      getAntibiotica = (name)=> {
          console.log(name);
        Antibioticas.forEach(a => {
            if(a.name === name){
                console.log(a);
                return a;
                
            }
        });
    } ;
    close = () => {
        this.props.close();
        console.log("close", this.props.showAandoening);
    }


render() {
    if (this.props.showAandoening){
        return (
            <div className="box">
      <div className="close"><a onClick={() => this.close()}>close X</a></div>
      <div className="box-title"><h2>{this.props.selectedAandoening }</h2></div>
      <div className="box-content">
          <div className="box-content-title"><h4>Variant 2</h4></div>
          <div className="box-columns">
          <div className="box-first">
              <div className="box-subtitle"><h5>Eerste keuze</h5></div>
              <div className="box-item" >
                 
                  {this.props.antibioticas.map((a) => 
                  
                  <ul>
                  <li className="item-name">{ this.getAntibiotica(a) === undefined ? "" :this.getAntibiotica(a).name}</li>
                  <li className="item-dosis">{this.state.selectedAntibiotica === undefined ? "" : this.state.selectedAntibiotica.dosis}</li>
                  <li className="item-remark">{this.state.selectedAntibiotica === undefined ? "" : this.state.selectedAntibiotica.remark}</li>
                    </ul>
                  )}
                  
              </div>
          </div>
          <div className="box-second"><div className="box-subtitle"><h5>Tweede keuze</h5></div></div>
          <div className="box-third"><div className="box-subtitle"><h5>Alergie</h5></div></div>
      </div>
      </div>
      </div>
      );
    }

    return ( <div></div>
    );
}
}

export default Aandoening;