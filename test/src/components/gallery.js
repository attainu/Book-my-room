import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Gallery from './section-components/gallery-page';

import Footer from './global-components/footer';

const GalleryPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Gallery" subheader="Gallery" />
        <Gallery />
        
        <Footer />
    </div>
}

export default GalleryPage

