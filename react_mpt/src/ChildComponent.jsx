import React,{Component}from 'react';

class ChildComponent extends Component{

    render(){

        const {name,age} = this.props;

        return(

            <div>

                <h2>Child Component</h2>

                <p>Name : {name}</p>

                <p>Age: {age}</p>

            </div>

        );

    }

}

export default ChildComponent;