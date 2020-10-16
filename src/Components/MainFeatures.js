import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import insuranceImg from "../Assets/images/insurance-without-shadow.svg";
import medImg from "../Assets/images/med-rep-without-shadow.svg";
import premiumImg from "../Assets/images/premium-without-shadow.svg";
import healthImg from "../Assets/images/healthcare-providers-without-shadow.svg";
import eth from "../Assets/images/eth.png";
import usdt from "../Assets/images/tether.png";
import usdc from "../Assets/images/usdc.png";
import dai from "../Assets/images/dai-Copy.png";
import tusd from "../Assets/images/tusd.png";
import uni from "../Assets/images/uni.png";
import bigimg from "../Assets/images/Background-Shape-Content.svg";
import {Link} from "react-router-dom";

class MainFeatures extends Component {
    render() {
        return (
            <Fragment>
                <div className="mainbody">
                    <div className="mainFeature">
                        <div className="bgbigImg text-center overflow-hidden">
                            <img src={bigimg} alt=""/>
                        </div>
                        <Container>
                            <Row>
                                <Col lg={3} md={3} sm={12}>
                                    <div className="featureStart text-center mb-3">
                                        <img src={insuranceImg} alt="insurance"/>
                                        <h2>Insurance</h2>
                                        <div className="hiddenFeature">
                                            <p>Start earning ZOM tokens by providing liquidty.</p>

                                            <div className="socialIcons">
                                                <img src={eth} alt=""/>
                                                <img src={uni} alt=""/>
                                                <img src={usdt} alt=""/>
                                                <img src={usdc} alt=""/>
                                                <img src={tusd} alt=""/>
                                                <img src={dai} alt=""/>
                                            </div>
                                            <div className="btns mt-3">
                                                <Link to="/insurance"><button className="btn-primary btn">Select insurance pool</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <div className="featureStart text-center mb-3">
                                        <img src={medImg} alt="insurance"/>
                                        <h2>Med Rep</h2>

                                        <div className="hiddenFeature">
                                            <h5>Coming Soon</h5>
                                            <p>Claim your Med Rep rewards.</p>


                                            <div className="btns mt-3">
                                                <button className="btn-primary btn">Learn More</button>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <div className="featureStart text-center mb-3">
                                        <img src={premiumImg} alt="insurance"/>
                                        <h2>Premium</h2>

                                        <div className="hiddenFeature">
                                            <h5>Coming Soon</h5>
                                            <p>Learn more about the power of ZOM</p>
                                            <div className="btns mt-3">
                                                <button onClick={()=> window.open('https://www.yazom.com/index.php?login/zom', '_blank')} className="btn-primary btn">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3} sm={12}>
                                    <div className="featureStart text-center mb-3">
                                        <img src={healthImg} alt="insurance"/>
                                        <h2>Healthcare Providers</h2>

                                        <div className="hiddenFeature">
                                            <h5>Coming Soon</h5>
                                            <p>Learn more about the power of ZOM</p>
                                            <div className="btns mt-3">
                                                <button onClick={()=> window.open('https://www.yazom.com/index.php?login/zom ', '_blank')} className="btn-primary btn">Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default MainFeatures;