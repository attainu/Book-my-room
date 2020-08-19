import React from 'react';
import Slider from './section-components/slider';
import BookingForm from './section-components/booking-form';
import Welcome from './section-components/welcome';
import LatestRoom from './section-components/latest-room';
import CallToActoin from './section-components/call-to-action';
import Features from './section-components/features';
import ClientFeedBack from './section-components/clientFeedBack';
import Contact from './section-components/contact';
import Footer from './global-components/footer';

const HomeV2 = () => {
    return <div>
        <Slider/>
        <BookingForm />
        <Welcome />
        <LatestRoom />
        <CallToActoin />
        <Features />
        <ClientFeedBack />
        <Contact />
        <Footer />
    </div>
}
export default HomeV2;