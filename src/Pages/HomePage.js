import React, {Component, Fragment} from 'react';
import TopNavbar from "../Components/TopNavbar";
import MainFeatures from "../Components/MainFeatures";
import Footer from "../Components/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavbar headerBg="topNavbar"/>
                <MainFeatures/>
                <Footer footerclass="footerArea top_marginn"/>
                
            </Fragment>
        );
    }
}

export default HomePage;