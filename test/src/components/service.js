import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import WhyChooseUs from './section-components/why-choose-us-single';
import Service from './section-components/service-v2';
import CounterUP from './section-components/counter-up';
import ClientV2 from './section-components/client-v2';

import Footer from './global-components/footer';

const ServicePage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services" subheader="Services" />
        <WhyChooseUs />
        <Service />
        <CounterUP />
        <ClientV2 />
        
        <Footer />
    </div>
}

export default ServicePage

