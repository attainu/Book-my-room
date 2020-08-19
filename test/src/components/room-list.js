import React from 'react';
import Navbar from './global-components/navbar';
import VisibleRoomList from './section-components/visible-room-list';
import BookingForm from './section-components/booking-form';
import Footer from './global-components/footer';

const RoomListPage = () => {
    return <div>
        <Navbar />
        <BookingForm />
        <VisibleRoomList />
        <Footer />
    </div>
}
export default RoomListPage

