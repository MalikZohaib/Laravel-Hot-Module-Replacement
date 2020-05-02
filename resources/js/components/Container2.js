import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Component from "./Component.js";

function Container2(){

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Module 1</div>
                            <Component />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Container2;

if (document.getElementById('module-second')) {
    ReactDOM.render(<Container2 />, document.getElementById('module-second'));
}

if (module.hot) {
    module.hot.accept()
}