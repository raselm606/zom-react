import React, {Component, Fragment} from 'react';
import footerImg from "../Assets/images/zom_logo_header.svg"
import {Col, Nav, Container, Row, Navbar} from "react-bootstrap";
import redditimg from "../Assets/images/reddit.svg"
import telegramimg from "../Assets/images/telegram.svg"
import twitterimg from "../Assets/images/twitter.svg"

class Footer extends Component {
    render(props) {
        return (
            <Fragment>
                    <div className={this.props.footerclass}>
                        <Container fluid>
                            <Row className="align-items-center">

                                <Col lg={4} md={4} sm={12} className="mt-5" >
                                    <div className="footerMenu text-center">
                                        <a href="" onClick={()=> window.open('https://www.yazom.com/index.php?login/zom')} target="_blank">About</a>
                                        <a href="/uniswap">ZOM Uniswap</a>
                                        <a href="" onClick={()=> window.open('https://github.com/Yazom/ZOM')} target="_blank">Github</a>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} className="order-2 mt-5">
                                    <div className="footersocial text-right">
                                        <a href=""  onClick={()=> window.open('https://www.reddit.com/r/zom ')} target="_blank"><img src={redditimg} alt=""/></a>
                                        <a href=""  onClick={()=> window.open('https://t.me/ZOM_Official')} target="_blank"><img src={telegramimg} alt=""/></a>
                                        <a href="" onClick={()=> window.open('http://twitter.com/yazomit/')} target="_blank"><img src={twitterimg} alt=""/></a>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} className="order-md-first order-last mt-5">
                                    <div className="footerContent">
                                        <img src={footerImg} alt=""/>
                                        <p>&copy; ZOM 2020 Ltd.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

            </Fragment>
        );
    }
}

export default Footer;