import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./Cards.css"
class CardSellMore extends React.Component {
    render() {
        const { title, description, imageSrc } = this.props;
        return (


            <div className="card" id='cardBodyAll'>

                <div className="card-body" id='cardBody'>
                    <Row>
                        <Col >{imageSrc && <img id='imgCardSellMore' src={imageSrc} alt="" />}</Col>
                        <Col>
                            <h3 className="card-title" id='CardSellMoreTitleCard'>{title}</h3>
                            {description && <p className="card-description" id='CardSellMoreTitleCardp'>{description}</p>}
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default CardSellMore;
