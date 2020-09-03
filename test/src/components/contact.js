import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactMap from './section-components/contact-map';
import ContactForm from './section-components/contact-form';

import Footer from './global-components/footer';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact" Img="" />
        <ContactInfo />
        <ContactMap />
        <ContactForm />
        <Footer />
    </div>
}

export default ContactPage

