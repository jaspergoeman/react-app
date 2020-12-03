import './header.scss';
import '../../App.scss';
import logo_uz from '../../img/logo-uz.svg';
import logo_u_gent from '../../img/logo-u-gent.svg';
import React from 'react';

class Header extends React.Component {

    constructor(props) {
      super(props);
    }
    SetDoelgroep(doelgroep){
      if(doelgroep === "kinderen"){
        document.getElementById("volwassenen").classList.remove("App-is-selected");
      }else{
        document.getElementById("kinderen").classList.remove("App-is-selected");
      }
      document.getElementById(doelgroep).classList.add("App-is-selected");
      this.props.parentCallback(doelgroep);
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
                    <li id="kinderen"><div className="clickable" onClick={() => {this.SetDoelgroep("kinderen")}}> Kinderen</div></li>
                    <li id="volwassenen" className="App-is-selected"> <div className="clickable" onClick={() => {this.SetDoelgroep("volwassenen")}}>Volwassenen</div></li>
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