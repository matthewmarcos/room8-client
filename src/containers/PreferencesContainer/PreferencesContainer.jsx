import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Sidebar from '../../components/Sidebar/Sidebar';

import './PreferencesContainer.css';

class PreferencesContainer extends Component {

    render() {
        return (
            <div className="preferences-container">
                <Sidebar />
                    <div className="preferences-children">
                        {
                            this.props.children || (
                                <h1 className="text-center">
                                    Preferences Container here!
                                </h1>
                            )
                        }
                    </div>
            </div>
        );
    }
}

export default PreferencesContainer;
