import React, { Component } from 'react';
import './App.css';
import Home from "./Home";
import logo from './images/GenZlogo.png';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  constructor(){
    super();
    this.state = {
        toggled: true,
        activePage: 'home'
      }
    }
    
    updateActive = (e) => {
      this.setState({activePage: e.target.id})
    }
  
    toggle = () => {
      this.setState({toggled: !this.state.toggled})
      if(this.state.toggled){
        document.getElementById('toggle').className = 'fas fa-times';
        document.getElementById('logo').className = 'animateOut';
      }else{
        document.getElementById('toggle').className = 'fas fa-bars';
        document.getElementById('logo').className = 'animateIn';
      }
    }

    
  render() {
    let navbar =    
            <React.Fragment>
              <i id='toggle' className="fas fa-bars" onClick={this.toggle}></i>
              <img src={logo} alt='logo' id='logo' className='animateIn'/>
            </React.Fragment>

          let navList = 
              <div id='navList' className='animateIn'>
                {
                (this.state.activePage === 'home')
                ? <p id='home' className='active' onClick={(e) => this.updateActive(e)}>Home</p>
                : <p id='home' onClick={(e) => this.updateActive(e)}>Home</p>
                } 
                {
                (this.state.activePage === 'portfolio')
                ? <p id='portfolio' className='active' onClick={(e) => this.updateActive(e)}>Portfolio</p>
                : <p id='portfolio' onClick={(e) => this.updateActive(e)}>Portfolio</p>
                } 
                {
                (this.state.activePage === 'services')
                ? <p id='services' className='active' onClick={(e) => this.updateActive(e)}>Services</p>
                : <p id='services' onClick={(e) => this.updateActive(e)}>Services</p>
                } 
                {
                (this.state.activePage === 'info')
                ? <p id='info' className='active' onClick={(e) => this.updateActive(e)}>Info + Contact</p>
                : <p id='info' onClick={(e) => this.updateActive(e)}>Info + Contact</p>
                } 
              </div>
    return (
      <ParallaxProvider>
        <div className="App">
          {navbar}
          {!this.state.toggled 
            ? navList 
            : null}
          {!this.state.toggled
            ?
            <div className="fullscreen-bg" id='shell'>
            </div>
            : null
          }
          <Home handleScroll={this.state.isScrolling}/>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
