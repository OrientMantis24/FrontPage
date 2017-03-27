import React from 'react';
import Name from './Name';

class Home extends React.Component {
    render (){
        return(
            <div className='expand'>
            <div className="home"></div>
            <Name />
            </div>
        )
    }
}
export default Home;