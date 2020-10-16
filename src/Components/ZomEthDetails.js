import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import eth from "../Assets/images/eth.png";
import plusImg from "../Assets/images/plus.png";
import logoImg from "../Assets/images/zom_logo_header.svg";
import cross from "../Assets/images/close.svg"

class ZomEthDetails extends Component {
    constructor(){
        super();
        this.state={
            approveBtn:"btn btn-primary",
            hidebtn:"d-none",
            notice:"d-none"
        }
    }
    hideBtn =()=> this.setState({approveBtn:"d-none", hidebtn:"hidebtnn", notice:"depositeZom mt-5 p-4"});
    closeNotice =()=>this.setState({hidebtn:"d-none", notice:"d-none", approveBtn:"btn btn-primary"  })

    render() {
        return (
            <Fragment>
                <div className="zoomEtharea ">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12} sm={12} md={12}>
                                <div className="insuraceTitle text-center mb-5">
                                    <h2>ZOM-ETH</h2>
                                    <p>Deposit ZOM-ETH UNI-V2 LP to start earning ZOMs.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={logoImg} alt=""/>
                                    <h2>0.000</h2>
                                    <p>Earned</p>
                                    <div className="buttonarea">
                                        <Button className="btn btn-primary mt-4">CLAIM</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="insuranceItem text-center mb-3">
                                    <img src={eth} alt=""/>
                                    <h2>0.000</h2>
                                    <p>ZOM-ETH UNI-V2 LP Tokens Staked</p>
                                    <div className="buttonarea approveBtn">
                                        <Button onClick={this.hideBtn} className={this.state.approveBtn}>APPROVE DEPOSIT</Button>
                                        <div className={this.state.hidebtn}>
                                            <Button className="btn btn-primary">Unstake</Button>
                                            <img src={plusImg} alt=""/>
                                            <div className="iconArrrow"></div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={8} md={8} sm={12}>
                                <div className={this.state.notice}>
                                    <div className="closeBtn" onClick={this.closeNotice}><img src={cross} alt=""/></div>
                                    <h2>Deposit ZOM-ETH UNI-V2 LP Tokens</h2>
                                    <div className="inputareaa text-center">
                                        <input className="inputbtn" type="text" value="23.149678"/>
                                        <div className="max_value">
                                            Max
                                        </div>
                                        <Button className="btn btn-primary">Submit</Button>
                                    </div>
                                    <p className="smallValue">Available: <strong>23.149678</strong></p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default ZomEthDetails;