import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomList from './section-components/room-grid';

import Footer from './global-components/footer';

const RoomGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Room" subheader="Room Grid" />
        <RoomList />
       
        <Footer />
    </div>
}

export default RoomGridPage

