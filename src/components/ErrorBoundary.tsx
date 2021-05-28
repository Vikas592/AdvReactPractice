import React, { PureComponent, ReactNode } from 'react'

interface ErrorBoundaryState{
    hasError:boolean;
}
interface ErrorBoundaryProps{
    children: ReactNode
}
export default class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps){
        super(props)
        this.state={
            hasError:false
        }
    };

    static getDerivedStateFromError(error:any){
        return {hasError: true};
    }

    componentDidCatch(error:any, errorInfo:any){
        console.log({error, errorInfo});
    }

    render() {
        if(this.state.hasError)
        {return (
            <div>
                Something went wrong!
            </div>
        )}
        return this.props.children
    }
}
