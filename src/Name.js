import React from 'react';
import pulse from 'animate.css';

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'innerName animated lightSpeedIn',
            delay: 2000
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
    }

    onMouseEnter() {
        if(this.state.className === "innerName" || this.state.className === "innerName animated lightSpeedIn") {
        this.setState({ className: 'innerName animated pulse' });
        setTimeout(this.onAnimationEnd
        , this.state.delay)
        }
    }

    onAnimationEnd() {
        this.setState({ className: 'innerName'});
    }

    render() {

        return (
            <div className='name'>
                <div className={this.state.className} onMouseEnter={this.onMouseEnter}>
               <h1>BARTOSZ OCIEPKA</h1>
               <h2>JUNIOR WEB DEVELOPER</h2>
               </div>
            </div>

        );
    }

};

export default Name;