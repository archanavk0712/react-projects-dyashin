import React, { Component } from 'react'
import FallbackUI from '../components/FallbackUI';

export class ErrorBoundary extends Component {
    state={
        hasError:false,
    }

    static getDerivedStateFromError(error){
        console.log("getDerivedStateFromError executed");
        console.log(error);
        return {hasError : true};
    }
    componentDidCatch(error, errorInfo){
        console.log(errorInfo);
        
    }
  render() {
    console.log(this.state.hasError,"state");
    if(this.state.hasError){
        return <FallbackUI/>;
    }else{
        return <>{this.props.children}</>
    }
  }
}

export default ErrorBoundary
