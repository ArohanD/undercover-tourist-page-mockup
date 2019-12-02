import React from 'react';
import Header from './Header.jsx'
import Info_About from './Info_About.jsx'
import Accordion from './Accordion.jsx';
import Footer from './Footer.jsx';
import Side_Panel from './Side_Panel.jsx'
import Close_Box from './Close_Box.jsx'

const Home = () => {
    return (
        <div className={'page_container'}>
            <Header />
            <div className={'info_content_holder'}>
                <Info_About />
                <Accordion />
            </div>
            <div className={'info_content_right'}>
                <Side_Panel />
                <Close_Box />
            </div>
            <Footer />
        </div>
    )
}

export default Home;