import Landing from '../../components/Landing/Landing';
import NavbarContainer from '../NavbarContainer/NavbarContainer';


import React, {Component} from 'react';

class LandingContainer extends Component {
    render() {
        return (
            <div>
                <NavbarContainer />
                <div className="container">
                    LandingContainer!
                    <Landing/>
                </div>
            </div>
        );
    }
}

export default LandingContainer;
