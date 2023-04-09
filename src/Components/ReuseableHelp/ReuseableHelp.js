
import React from "react";

import "./ReuseableHelp.css"
import { Col, Row } from "react-bootstrap";




class ReuseableHelp extends React.Component {

    render() {
        const { title, description } = this.props



        return (

            <div className="CardH" >
                <div className="C-body">
                    
                    <Col>
                            <h6 className="CardH-title" >{title} </h6>
                            <p className="CardH-description">{description}</p>
                        </Col>
                    
                   
                        

                </div>

            </div>
        );
    }
}
export default ReuseableHelp;