import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Staff from './section-components/our-staff';

import Footer from './global-components/footer';

const RoomListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Staffs" subheader="Staffs" />
        <Staff />
        
        <Footer />
    </div>
}

export default RoomListPage

