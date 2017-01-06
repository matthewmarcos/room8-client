import React, { Component } from 'react';

class ForgotContainer extends Component {

    render() {

        const headerStyle = {
            fontSize: '350'
        };

        return(
            <div className="forgot-container">
                <div className="container-fluid">
                    <h1 style={headerStyle} className="text-center">GGWP</h1>
                </div>
            </div>
        );
    }
}

export default ForgotContainer;
