import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import RoomDetailsSection from './section-components/room-details';
import LatestRoom from './section-components/latest-room-v2';

import Footer from './global-components/footer';

const RoomDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Details" Img="blog/blog-breadcrumb.jpg" />
        <RoomDetailsSection />
        <LatestRoom />
        
        <Footer />
    </div>
}

export default RoomDetails

