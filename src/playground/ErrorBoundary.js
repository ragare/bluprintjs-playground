import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true, error });
    }

    render() {
        if (this.state.hasError) {
            console.log("chil:", this.props.children)
            return this.props.children;
        }
        return this.props.children;
    }
}

export { ErrorBoundary as default }