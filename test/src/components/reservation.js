import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LatestFood from './section-components/latest-food';
import Video from './section-components/video';
import BookTable from './section-components/book-table';

import Footer from './global-components/footer';

const ReservationPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Resturent" subheader="Resturent" />
        <LatestFood />
        <Video />
        <BookTable />
       
        <Footer />
    </div>
}

export default ReservationPage

