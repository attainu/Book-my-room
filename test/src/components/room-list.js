import React from 'react';
import Navbar from './global-components/navbar';
import RoomList from './section-components/room-list';
import BookingForm from './section-components/booking-form';
import Footer from './global-components/footer';

const RoomListPage = () => {
    return <div>
        <Navbar />
        <BookingForm />
        <RoomList />
        <Footer />
    </div>
}
export default RoomListPage

