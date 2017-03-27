import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import $ from 'jquery';
window.JQuery = $;
import bootstrap from 'bootstrap';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

const app = document.querySelector('#root');

class App extends React.Component {
  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation: true
    };
    return (
      <div>
        <Header>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#sectionOne">Strona główna</a></li>
                  <li><a href="#sectionTwo">O mnie</a></li>
                  <li><a href="#sectionThree">Umiejętności</a></li>
                </ul>
              </div>
            </div>

          </nav>
        </Header>
        <Footer>
          <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer  {...options}>
          <Section verticalAlign="true" color="white" overflow="hidden" margin="20px" onChange={this.handleSectionChange}><Home /></Section>
          <Section color="#5885ce"></Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}


ReactDOM.render(<App />, app);