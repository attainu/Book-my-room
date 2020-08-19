import React from 'react';
import Navbar from './global-components/navbar';
import VisibleRoomDetails from './section-components/visible-room-details';
import Contact from './section-components/contact';
import Footer from './global-components/footer';

const RoomDetails = () => {
    return <div>
        <Navbar />
        <VisibleRoomDetails />
        <Contact />
        <Footer />
    </div>
}

export default RoomDetails

