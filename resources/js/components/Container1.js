import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstComponent from "./FirstComponent.js";
import SecondComponent from "./SecondComponent.js";

function Container1() {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Module 1</div>
                            <FirstComponent />
                            <SecondComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}    


export default Container1;

if (document.getElementById('module-one')) {
    ReactDOM.render(<Container1 />, document.getElementById('module-one'));
}

if (module.hot) {
    module.hot.accept()
}