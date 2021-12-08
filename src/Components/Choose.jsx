import React from 'react'
import Button from './Button'
import "./choose.css"
const Choose = () => {
    return (
        <div className="construction__choose">     
            <div className="construction__choose-left">
            <div className="construction__choose-left__content">
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                <Button content="Explore" background="#18A7B9"
             boxShadowStyle="0px 64.8148px 46.8519px rgba(24, 167, 185, 0.0759259), 0px 38.5185px 25.4815px rgba(24, 167, 185, 0.0607407), 0px 20px 13px rgba(24, 167, 185, 0.05), 0px 8.14815px 6.51852px rgba(24, 167, 185, 0.0392593), 0px 1.85185px 3.14815px rgba(24, 167, 185, 0.0240741)"
             color="#FFFFFF"/>
            </div>
            <div className="construction__choose-left__title">
                <p>Why Choose us for best construction experience</p>
            </div>
        </div>
        <div className="construction__choose-right">
            <div className="construction__choose-right-image">
                <img src={require("./images/image2.svg").default} alt="img" />
            </div>
            <div>
                <div className="construction__choose1-color"></div>
                <p>01</p>
                <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
            </div>
        </div>
        </div>

    )
}

export default Choose
