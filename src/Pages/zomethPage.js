import React, {Component, Fragment} from 'react';
import TopNavbar from "../Components/TopNavbar";
import Footer from "../Components/Footer";
import ZomEthDetails from "../Components/ZomEthDetails";

class ZomEthPage extends Component {
    render(props) {
        return (
            <Fragment>
                <TopNavbar headerBg="topNavbar top_bg"/>
                <ZomEthDetails/>
                <Footer footerclass="footerArea footerBg "/>

            </Fragment>
        );
    }
}

export default ZomEthPage;