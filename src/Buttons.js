import React from 'react';
import './Buttons.css';

const Buttons = (props) =>(
    <div className="container-fluid">
        <div className="row">
            <div className="col-6 p-0">
                <button id="clear" onClick={props.clear} className="btn btn-danger btn-block border border-dark" >AC</button>
            </div>
            <div className="col-3 p-0">
                <button id="divide" value="/" onClick={props.sign} className="btn btn-light btn-block border border-dark">/</button>
            </div>
            <div className="col-3 p-0">
                <button id="multiply" value="*" onClick={props.sign} className="btn btn-light btn-block border border-dark">*</button>
            </div>
        </div>
        <div className="row">
            <div className="col-3 p-0">
                <button id="7" value="7" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >7</button>
            </div>
            <div className="col-3 p-0">
                <button id="8" value="8" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >8</button>
            </div>
            <div className="col-3 p-0">
                <button id="9" value="9" onClick={props.number} className="btn btn-secondary btn-block border border-dark">9</button>
            </div>
            <div className="col-3 p-0">
                <button id="subtract" value="-" onClick={props.sign} className="btn btn-light btn-block border border-dark">-</button>
            </div>
        </div>
        <div className="row">
            <div className="col-3 p-0">
                <button id="4" value="4" onClick={props.number}  className="btn btn-secondary btn-block border border-dark" >4</button>
            </div>
            <div className="col-3 p-0">
                <button id="5" value="5" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >5</button>
            </div>
            <div className="col-3 p-0">
                <button id="6" value="6" onClick={props.number} className="btn btn-secondary btn-block border border-dark">6</button>
            </div>
            <div className="col-3 p-0">
                <button id="add" value="+" onClick={props.sign} className="btn btn-light btn-block border border-dark">+</button>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                <div className="row">
                    <div className="col-4 p-0">
                        <button id="1" value="1" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >1</button>
                    </div>
                    <div className="col-4 p-0">
                        <button id="2" value="2" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >2</button>
                    </div>
                    <div className="col-4 p-0">
                        <button id="3" value="3" onClick={props.number} className="btn btn-secondary btn-block border border-dark">3</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 p-0">
                        <button id="0" value="0" onClick={props.number} className="btn btn-secondary btn-block border border-dark" >0</button>
                    </div>
                    <div className="col-4 p-0">
                        <button id="decimal" value="." onClick={props.number} className="btn btn-secondary btn-block border border-dark" >.</button>
                    </div>
                </div>
            </div>
            <div className="col-3 p-0">
                <button id="equals" onClick={props.equals}className="btn btn-success btn-block border border-dark" style={{height: "100%"}}>=</button>
            </div>
        </div>
    </div>
)

export default Buttons;