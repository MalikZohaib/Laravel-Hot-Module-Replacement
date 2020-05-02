import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    
        this.handleClick = this.handleClick.bind(this);
    }    
    handleClick(){
        console.log("test");
        this.setState(state => ({      count: state.count+1   }));
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="w-100 p-3">
                            <div className="card">
                                <div className="card-header">Second Component</div>

                                <div className="card-body">
                                    <div>
                                        {this.state.count}
                                    </div>
                                    <Button variant="primary" onClick={this.handleClick}>Click Me</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}  


export default SecondComponent;