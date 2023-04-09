import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ReuseableService.css"



class ReuseableService extends React.Component {
    render() {
        const { title, imgsrc } = this.props;


        return (

            <div className="CardS" >
                <div className="C-body">
                    <Row>
                        <Col xs={3}> {imgsrc && <img id='imgS' src={imgsrc} alt="" />}
                        

                        </Col>
                        <Col>
                            <h6 className="CardS-title" >{title} </h6>
                        </Col>
                    </Row>
                </div>

            </div>

        )
    }
}
export default ReuseableService;