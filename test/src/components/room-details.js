import React from 'react';
import Navbar from './global-components/navbar';
import RoomDetailsSection from './section-components/room-details';
import Contact from './section-components/contact';
import Footer from './global-components/footer';

const RoomDetails = () => {
    return <div>
        <Navbar />
        <RoomDetailsSection />
        <Contact />
        <Footer />
    </div>
}

export default RoomDetails

