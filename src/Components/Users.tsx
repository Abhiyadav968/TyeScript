import React from "react";

interface IPROPS {
    userid:string
 }

export class Users extends React.Component<IPROPS> {

    //eslint-disable-next-line
    constructor(props: IPROPS) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Welcome to Class Components</h1>
                <h1>{this.props.userid}</h1>
            </>
        )
    }
}