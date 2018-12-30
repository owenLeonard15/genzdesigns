import React from 'react';
import './ScrollProgress.css';

class ScrollProgress extends React.Component {

    componentDidMount = () =>{
        this.updateIndicator();
    }

    componentDidUpdate = () =>{
        this.updateIndicator();
    }

    updateIndicator = () =>{
        let circles = document.getElementsByClassName('circle');
        let lines = document.getElementsByClassName('line');
        
        for(let i = 0; i < circles.length; i++){
            circles[i].setAttribute('fill', 'transparent');
            circles[i].setAttribute('stroke', 'white');
            circles[i].classList.remove('animateIn');
        }

        for(let j= 0; j < lines.length; j++){
            lines[j].setAttribute('stroke-width', '1');
        }
        
        for(let i = 0; i < circles.length; i++){
            if(i <= this.props.curSection){
                circles[i].setAttribute('fill', 'white');
                circles[i].setAttribute('stroke', 'white');
            }
        }

        for(let j=0; j < lines.length; j++){
            if(j < this.props.curSection){
                lines[j].setAttribute('stroke-width', '3');
            }
        }

        circles[this.props.curSection].classList.add('animateIn');
        circles[this.props.curSection].setAttribute('fill', 'white');
    }


    render(){
        return(
            <React.Fragment>
                <div id='indicator'>
                <svg height="300" width="70">
                    <line className='line' x1="50" y1="50" x2='50' y2="93" style={{stroke:'white'}} />
                    <circle onClick={e => this.props.handleCircleClick(e.target)} className='circle'id='1' cx="50" cy="50" r="8" stroke="white" strokeWidth="1" fill="transparent" /> 
                    <line className='line' x1="50" y1="108" x2='50' y2="143" style={{stroke:'white'}} />
                    <circle onClick={e => this.props.handleCircleClick(e.target)} className='circle' id='2' cx="50" cy="100" r="8" stroke="white" strokeWidth="1" fill="transparent" />
                    <line className='line' x1="50" y1="158" x2='50' y2="193" style={{stroke:'white'}} />
                    <circle onClick={e => this.props.handleCircleClick(e.target)} className='circle' id='3' cx="50" cy="150" r="8" stroke="white" strokeWidth="1" fill="transparent" />
                    <line className='line' x1="50" y1="208" x2='50' y2="243" style={{stroke:'white'}} />
                    <circle onClick={e => this.props.handleCircleClick(e.target)} className='circle' id='4' cx="50" cy="200" r="8" stroke="white" strokeWidth="1" fill="transparent" />
                    <circle onClick={e => this.props.handleCircleClick(e.target)} className='circle' id='5' cx="50" cy="250" r="8" stroke="white" strokeWidth="1" fill="transparent" />
                    Sorry, your browser does not support inline SVG.  
                </svg> 
                </div>
            </React.Fragment>    
        );
    }
}

export default ScrollProgress;