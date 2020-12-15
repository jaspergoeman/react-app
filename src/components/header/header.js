import './header.scss';
import '../../App.scss';
import logo_uz from '../../img/logo-uz.svg';
import logo_u_gent from '../../img/logo-u-gent.svg';
import React from 'react';
import Doelgroepen from '../data/doelgroepen.json';

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        doelgroepen: []
      }
    }
    componentDidMount(){
      this.setState({
        doelgroepen: Doelgroepen
      });
    }
    SetDoelgroep(doelgroep){
      this.setState({
        selectedDoelgroep: doelgroep
      });
      console.log(this.state.selectedDoelgroep);
      this.props.parentCallback(this.state.selectedDoelgroep);
  };
    
    render() {
      

    return (
        <header className="App-header">
            <section className="App-section">
            <div className="App-container App-container--xl">
              <div className="header__section">
            <div className="header__section--left">
                <img src={logo_uz} alt="logo uz-gent" className="header__section--img"></img>
                <img src={logo_u_gent} alt="logo uz-gent" className="header__section--img"></img>
            </div>
            <div className="header__section--mid">
                <h1>Antibioticagids</h1>
                <ul>
                    {this.state.doelgroepen.map((doelgroep) => 
                    <li id={doelgroep.name} key={doelgroep.name} className={this.state.selectedDoelgroep === doelgroep.name ? 'App-is-selected' :''}><div className="clickable" onClick={() => {this.SetDoelgroep(doelgroep.name)}}> {doelgroep.name}</div></li>
                    )}
                   </ul>
                </div>
            <div className="header__section--right">
              <ul>
					      <li><a href="https://www.bvikm.org/documenten" target="_blank" rel="noreferrer">IGGI</a></li>
                <li><a href="https://www.uzgent.be/nl/zorgaanbod/mdspecialismen/OPAT/Paginas/default.aspx" target="_blank" rel="noreferrer">OPAT</a></li>
				      </ul>
            </div>
            </div>
          </div>
          </section>
        </header>
    );
  }
  }
  
  export default Header;