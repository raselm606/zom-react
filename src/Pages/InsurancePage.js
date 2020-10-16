import React, {Component, Fragment} from 'react';
import Insurance from "../Components/Insurance";
import TopNavbar from "../Components/TopNavbar";
import Footer from "../Components/Footer";

class InsurancePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar headerBg="topNavbar top_bg"/>
                <Insurance/>
                <Footer footerclass="footerArea footerBg"/>

            </Fragment>
        );
    }
}

export default InsurancePage;