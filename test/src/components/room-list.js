import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomList from './section-components/room-list';

import Footer from './global-components/footer';

const RoomListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Room" subheader="Room List" />
        <RoomList />
        
        <Footer />
    </div>
}

export default RoomListPage

