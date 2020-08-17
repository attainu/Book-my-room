import React from 'react';
import WelcomePage from './global-components/navbar';
import Slider from './section-components/slider';
import BookingForm from './section-components/booking-form';
import Welcome from './section-components/welcome';
import LatestRoom from './section-components/latest-room';
import Service from './section-components/service';
import CallToActoin from './section-components/call-to-action';
import Gallery from './section-components/gallery';
import Features from './section-components/features';
import Client from './section-components/client';
import Contact from './section-components/contact';
import Footer from './global-components/footer';

const Home_V1 = (props) => {
    return <div>
        <WelcomePage props={props}/>
        <Slider/>
        <BookingForm />
        <Welcome />
        <LatestRoom />
        <Service />
        <CallToActoin />
        <Gallery />
        <Features />
        <Client />
        <Contact />
        <Footer />
    </div>
}

export default Home_V1

