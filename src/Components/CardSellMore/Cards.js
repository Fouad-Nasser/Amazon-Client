import React from 'react';

import "./Cards.css"
class CardSellMore extends React.Component {
    render() {
        const { title, description, imageSrc } = this.props;
        return (


            <div className="card" id='cardBodyAll'>

                <div className="card-body" id='cardBody'>
                    
                        <div >{imageSrc && <img id='imgCardSellMore' src={imageSrc} alt="" />}</div>
                        <div>
                            <h3 className="card-title" id='CardSellMoreTitleCard'>{title}</h3>
                            {description && <p className="card-description" id='CardSellMoreTitleCardp'>{description}</p>}
                        </div>
                   
                </div>
            </div>

        );
    }
}

export default CardSellMore;
