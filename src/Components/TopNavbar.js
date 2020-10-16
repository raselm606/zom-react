import React, {Component, Fragment} from 'react';
import "../Assets/css/bootstrap.min.css";
import "../Assets/css/style.css";
import {Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import logoImg from "../Assets/images/zom_logo_header.svg"

class TopNavbar extends Component {
    constructor(){
        super();
        this.state={
            show:false
    }
}
handleClose = () => this.setState({show:false});
handleShow = () => this.setState({show:true});

    render(props) {
        return (
            <Fragment>
                <div className={this.props.headerBg}>
                    <Container fluid>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="/">
                                <img src={logoImg} alt="logoImg"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto greenDot">
                                    <div className="balEth" onClick={this.handleShow}>
                                        <span>1,000 ZOM</span>
                                        <span>0x0000...0000</span>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </div>



                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    animation={false}
                    centered
                    className="modalArea"
                >
                    <Modal.Header closeButton className="modheader">
                    </Modal.Header>
                    <Modal.Body className="modbody text-center">
                        <div className="modalBodyText">
                            <h2>My Wallet</h2>
                            <img src={logoImg} alt=""/>
                            <h2>1,000.00</h2>
                            <p>ZOM Balance</p>

                            <div className="btnarea">
                                <Button className="btn btn-primary">View on etherscan</Button> <br/>
                                <Button className="btn btn-primary sgbtn">Sign Out</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </Fragment>
        );
    }
}

export default TopNavbar;