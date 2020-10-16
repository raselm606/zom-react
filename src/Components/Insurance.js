import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import eth from "../Assets/images/eth.png";
import usdt from "../Assets/images/tether.png";
import usdc from "../Assets/images/usdc.png";
import dai from "../Assets/images/dai-Copy.png";
import tusd from "../Assets/images/tusd.png";
import uni from "../Assets/images/uni.png";
import {Link} from "react-router-dom";

class Insurance extends Component {
    render() {
        return (
            <Fragment>
                <div className="insuranceArea">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12} sm={12} md={12}>
                                <div className="insuraceTitle text-center mb-5">
                                    <h2>Insurance</h2>
                                    <p>Start earning ZOM tokens by providing liquidity.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={eth} alt=""/>
                                    <h2>ZOM-ETH</h2>
                                    <p>Deposit ZOM-ETH UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <Link to="/zometh"> <button className="btn btn-primary">SELECT POOL</button> </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={uni} alt=""/>
                                    <h2>ZOM-UNI</h2>
                                    <p>Deposit ZOM-UNI UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <Link to="/zometh"> <button className="btn btn-primary">SELECT POOL</button> </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={usdt} alt=""/>
                                    <h2>ZOM-USDT</h2>
                                    <p>Deposit ZOM-USDT UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <button className="btn btn-primary">SELECT POOL</button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={usdc} alt=""/>
                                    <h2>ZOM-USDC</h2>
                                    <p>Deposit ZOM-USDC UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <button className="btn btn-primary">SELECT POOL</button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={tusd} alt=""/>
                                    <h2>ZOM-TUSD</h2>
                                    <p>Deposit ZOM-TUSD UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <button className="btn btn-primary">SELECT POOL</button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={dai} alt=""/>
                                    <h2>ZOM-DAI</h2>
                                    <p>Deposit ZOM-DAI UNI-V2 LP to start earning ZOMs.</p>
                                    <span>APY:  1,000%</span>
                                    <div className="buttonarea">
                                        <button className="btn btn-primary">SELECT POOL</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default Insurance;