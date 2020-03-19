import React from 'react';

const Display = (props) => (
    <div id="display" className="container-fluid p-0" >
        <div className="col-12 bg-info rounded">
            <div className="row" style={{marginBottom: "-.75rem"}}>
                <div className="ml-auto">
                    <p style={{fontSize: "12px"}}>{props.equation.substr(-49)}</p>
                </div>
            </div>
            <div className="row">
                <div className="ml-auto">
                    <h5>{"" + props.display}</h5>
                </div>
            </div>
        </div>
    </div>
)

export default Display;