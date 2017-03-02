export const IsLoggedIn = (Component) => {
    const blah = React.createClass({
        componentWillMount() {
            // check
            //
            // if no
            //
            // router.push('/');
        }
        render() {
            // if isLoading
                // return <Loading/>

            return (
                <Component {...this.props} {...this.state}/>
            );
        }
    });


    return blah;
}
