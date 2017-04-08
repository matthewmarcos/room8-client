import React from 'react';

export const IsLoggedIn = (Component) => {
    const blah = React.createClass({
        componentWillMount() {
            // check
            //
            // if no
            //
            // router.push('/');
        },
        render() {
            // if isLoading
                // return <Loading/>

            return (
                <SampleComponent {...this.props} {...this.state}/>
            );
        }
    });


    return blah;
};


export const SampleComponent = (props) => {
    console.log('SampleComponent loaded!');
    console.log('props', props);

    return (
        <div>
           <h1>Sample Component</h1>
        </div>
    )
};
