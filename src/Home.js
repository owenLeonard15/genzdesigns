import React from 'react';
import './Home.css';
import homeVideo from './images/blue.mp4';
import {Row, Col} from 'react-bootstrap';
import profile from './images/rothProfile.png';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import ScrollProgress from './ScrollProgress';
import CircularProgressbar from 'react-circular-progressbar';
import { Parallax } from 'react-scroll-parallax';
import 'react-circular-progressbar/dist/styles.css';

let screenWidth = 0;

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            curSection: 0,
            curScroll: 0,
            isScrolling: false,
            percentage: 0,
            intervalId: null
        }
        this.scrollToTop = this.scrollToTop.bind(this);
        this.startMove = this.startMove.bind(this);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll, { passive: true });

        Events.scrollEvent.register('begin', function () {  
          });
      
          Events.scrollEvent.register('end', function () {
          });

        screenWidth = window.innerWidth;
          console.log(screenWidth);
          
      }

/*animation*/
      startMove = () => {
        this.setState({intervalId: setInterval(this.frame, 100)});
      }

      frame = () => {
          if (this.state.percentage === 10) {
            clearInterval(this.state.intervalId);
          } else {
            this.setState({percentage: (this.state.percentage) + 1})
          }
        }
    
    

/*scroll stuff*/
      scrollToTop() {
        scroll.scrollToTop();
      }

      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    
        handleCircleClick = (circle) =>{
            let nextSection = (parseInt(circle.id) - 1);
            this.setState({curSection: nextSection});
            if(nextSection === 0){
                this.scrollToTop();
            }else if(nextSection === 1){
                scroller.scrollTo('section1', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });;
            }else if(nextSection === 2){
                scroller.scrollTo('section2', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });;
            }else if(nextSection === 3){
                scroller.scrollTo('section3', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });;
            }else if(nextSection === 4){
                scroller.scrollTo('section4', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });;
            }
        }

        handleScroll = () => {
            let tempScroll = this.state.curScroll;
            if(window.scrollY > tempScroll){
                this.setState({isScrolling: true});
            }
            this.setState({curScroll: window.scrollY});
            let box = document.getElementsByClassName('box')[0];
            
            let opacityValue =   15 * (1 / tempScroll);
            if(opacityValue < .15){
                opacityValue = 0;
            }
            box.setAttribute('opacity',opacityValue);

            /*title animations*/ 
            let title1 = document.getElementsByClassName('title')[0];
            if(tempScroll > 250){
                title1.classList = 'title animateOut';
            }else if(tempScroll < 250){
                title1.classList = 'title animateIn';
            }
            let title2 = document.getElementsByClassName('title')[1];
            let description = document.getElementById('description');
            if(tempScroll > 400 && tempScroll < 800){
                title2.classList = 'title animateIn';
            }else if (tempScroll < 400 || tempScroll > 800 ){
                title2.classList = 'title animateOut';
            }
            
            if(tempScroll > 450 && tempScroll < 850){
                description.classList = 'animateIn';
            }else if (tempScroll < 450 || tempScroll > 850){
                description.classList = 'animateOut';
            }

            /*why genz*/
            let bars = document.getElementsByClassName('progress');
            if(tempScroll > 1250 && tempScroll < 1850){
                for(let i = 0; i < bars.length; i++){
                    bars[i].classList = 'progress animateIn';
                }
                this.startMove();
            }

            /*arrow animations*/
            let arrows = document.getElementsByClassName('arrows')[0];
            if(tempScroll > 400){
                arrows.classList = 'arrows animateOut';
            }else if(tempScroll < 30){
                arrows.classList = 'arrows animateIn';
            }


        /*curSection boundaries*/
        if(tempScroll < 400){
            this.setState({curSection: 0})
        }else if (tempScroll > 400  && tempScroll < 1200){
            this.setState({curSection: 1})
        }else if(tempScroll > 1200 && tempScroll < 3300){
            this.setState({curSection: 2});
        }else if(tempScroll > 3300 && tempScroll < 4000){
            this.setState({curSection: 3});
        }else{
            this.setState({curSection: 4});
        }
    }


    render(){
        const percentageOne = this.state.percentage * 4;
        
        return(
            <React.Fragment>
                {(screenWidth >  1000)
                    ?
                    <div className="fullscreen-bg">
                        <video loop muted autoPlay className='fullscreen-bg-video'>
                        <source src={homeVideo}
                                type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                    : null
                }
                 
                
                <div className='home'>
                <ScrollProgress curSection={this.state.curSection} handleCircleClick={this.handleCircleClick} />
                    <Row className='section container-fluid'>
                        <div>
                            <h2 className='title animateIn' id='test'><span id='smaller'>WELCOME TO</span><br /> GenZ Designs</h2>
                            <svg className='box' height='15' width='900'>
                                <line x1="0" y1="0" x2='1200' y2="0" style={{stroke:'white', strokeWidth: '3'}} >
                                    <animate attributeType='XML'
                                            attributeName='x1'
                                            from='450' to='0' dur='2s'
                                            fill='freeze'
                                    />
                                    <animate attributeType='XML'
                                            attributeName='x2'
                                            from='450' to='900' dur='2s'
                                            fill='freeze'
                                    />
                                    <animate attributeType='style'
                                            attributeName='stroke'
                                            from='black' to='white' dur='3s'
                                            fill='freeze'
                                    />
                                    <animate attributeType='style'
                                            attributeName='strokeWidth'
                                            from='10' to='10'  dur='3s'
                                            fill='freeze'
                                    />
                                </line>
                            </svg>
                        </div>
                        <Link activeClass="active" className="section1" to="section1" spy={true} smooth={true} duration={500} >
                        <svg className="arrows" onClick={this.scrollNext}>
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
                        </Link>
                        
                    </Row>
                    <Element id="section1" className="element">
                        <Row className='section container-fluid'>
                            <div className='subsection'>
                                <h3 className='title'>Who We Are</h3>
                                <p id='description' className='invisible'>Genz Designs is a digital experience consulting firm that utilizes expert knowledge, thorough research, and data-driven
                                    design principles to build unique marketing, branding, and design strategies< br/><strong>
                                        to help companies connect with Generation Z.
                                    </strong>
                                </p>
                            </div>
                            <div className='subsection'>
                            <Parallax
                                    className="custom-class"
                                    offsetXMax={20}
                                    offsetXMin={-20}
                                    slowerScrollRate
                                    tag="figure"
                                >
                                <img id='profile' src={profile} alt='profile' /> 
                            </Parallax>
                                <p id='profileDescription'>Andrew Roth <br/>- Founder, CEO, Member of Generation Z</p>
                                
                            </div>
                        
                        </Row>
                    </Element>

                    <Element id="section2" className="element">
                        <Row className='section2 container-fluid'>
                           <Col lg={3} md={3}>
                           <Parallax
                                    className="custom-class"
                                    offsetYMax={20}
                                    offsetYMin={-20}
                                    slowerScrollRate
                                    tag="figure"
                                >
                                <h4 className='bigTitle'>Why<br /> GenZ?</h4>
                            </Parallax>
                                <p id='subtitle'>Because if you want your business to succeed,<br />you don't have a choice
                                </p>
                            
                           </Col>
                                
                           <Col lg={9} md={12} id='secondColumn'>
                           <p className='graphCaption'>By 2020, we will make up nearly<br />half of all consumers </p>
                            <div className='progress animateOut' >
                                <Parallax
                                    className="custom-class"
                                    offsetYMax={-20}
                                    offsetYMin={20}
                                    slowerScrollRate
                                    tag="figure"
                                >
                                
                                    <CircularProgressbar
                                            id='progressBar'
                                            percentage={percentageOne}
                                            text={`${percentageOne}%`}
                                            background
                                            initialAnimation
                                            backgroundPadding={3}
                                            styles={{
                                            zIndex: '-2',
                                            background: {
                                                fill: 'rgba(0,0,0,.3)',
                                            },
                                            text: {
                                                fill: '#fff',
                                                fontSize: '16px'
                                            },
                                            path: {
                                                stroke: '#fff',
                                            },
                                            trail: { stroke: 'transparent' },
                                            
                                            }}
                                        />
                                 </Parallax> 
                                 
                            </div>
                            
                        </Col>
                        </Row>
                        <Row className='container-fluid'>
                            <div className='subsection3'>
                                <h3 className='title'>Generation Z uses technology differently</h3>
                                <Row id='pics'>
                                    <Parallax
                                        offsetXMax={-20}
                                        offsetXMin={20}
                                        slowerScrollRate
                                        tag="figure"
                                    >
                                    <div id='picOne' className='gallery'>
                                        <div className='overlay'>
                                            <p className='fact'>$44 Billion in yearly GenZ purchasing power</p>
                                        </div>
                                    </div>
                                    </Parallax>
                                    {(window.innerWidth > 700)
                                    ?
                                    <Parallax
                                        offsetYMax={15}
                                        offsetYMin={-15}
                                        slowerScrollRate
                                        tag="figure"
                                    >
                                    <div id='picTwo' className='gallery'>
                                        <div className='overlay'>
                                            <p className='fact'>Our attention span is short. 8 seconds short.</p>
                                        </div>
                                    </div>
                                    </Parallax>
                                    :
                                    <div id='picTwo' className='gallery'>
                                        <div className='overlay'>
                                            <p className='fact'>Our attention span is short. 8 seconds short.</p>
                                        </div>
                                    </div>
                                    }
                                    

                                    <Parallax  
                                        offsetXMax={20}
                                        offsetXMin={-20}
                                        slowerScrollRate
                                        tag="figure"
                                    >
                                    <div id='picThree' className='gallery'>
                                        <div className='overlay'>
                                            <p className='fact'>86% use social media to learn about new products</p>
                                        </div>
                                    </div>
                                    </Parallax>
                                </Row>
                                
                            </div>
                        </Row>
                        <Row className='container-fluid'>
                            <div className='subsection3'>
                                <h3 className='title' id='left'>To reach GenZ,<br /> you need to understand them.</h3>
                                <Row id='pics'>
                                    <Parallax
                                        offsetXMax={-15}
                                        offsetXMin={20}
                                        slowerScrollRate
                                        tag="figure"
                                    >
                                    <h4 className='bigTitle2'>How We Do It...</h4>
                                    </Parallax>
                                </Row>
                                <Link activeClass="active" className="section1" to="section3" spy={true} smooth={true} duration={500} >
                                    <svg className="arrows2" onClick={this.scrollNext}>
                                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                                    </svg>
                                </Link>
                            </div>
                        </Row>
                    </Element>
                    <Element id="section3" className="element">
                        <Row className='container-fluid section4'>
                            <div className='infocard'>
                                <h6>The GenZ-Score</h6>
                                <p id='fact2' className='fact'>A GenZ Score is a score given to your business based on its engagement potential for Generation Z.
                                     The score is based on 50+ well researched  quantitative and qualitative factors, 
                                    weighted differently based on GenZ research and compiled to generate sub-scores and an overall GenZ Score. 
                                </p>
                                <button className="button button--wayra button--border-thick button--text-upper button--size-s">LEARN MORE</button>
                            </div>
                        </Row>
                    </Element>
                    <Element id="section4" className="element">
                        <Row className='container-fluid section4'>
                            <div className='contact-banner'>
                                <h6>Contact Us</h6>
                                <p id='fact2' className='fact'>
                                    Send us an email at email@tbd.com or click the button below to<br />get your free 3 pager, or schedule a consultation
                                </p>
                                <button className="button button--wayra button--border-thick button--text-upper button--size-s">LEARN MORE</button>
                            </div>
                        </Row>
                    </Element>
                </div>         
            </React.Fragment>
        )
    }
}

export default Home;