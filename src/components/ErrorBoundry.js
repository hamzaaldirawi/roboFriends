import { Component } from "react/cjs/react.production.min";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props) 
        // I put props here to access this.props
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        if(this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }

        return this.props.children

    }
}

export default ErrorBoundry;