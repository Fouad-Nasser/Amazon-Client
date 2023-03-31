import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./AccountCard.css"
class AccountCard extends React.Component {
    render() {
        const { title, description, imageSrc } = this.props;
        return (


            <div className="card" id='cardBodyAll'>

                <div className="card-body" id='cardBody'>
                    <Row>
                        <Col xs={3}>{imageSrc && <img id='imgAccountCard' src={imageSrc} alt="" />}</Col>
                        <Col>
                            <h4 className="card-title" id='AccountCardTitleCard'>{title}</h4>
                            {description && <p className="card-description" id='AccountCardTitleCardP'>{description}</p>}
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default AccountCard;
