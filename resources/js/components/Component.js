import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    
        this.handleClick = this.handleClick.bind(this);
    }    
    handleClick(){
        this.setState(state => ({      count: state.count+1   }));
    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Module 2</div>

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

export default Component;