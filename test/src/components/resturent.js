import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import LatestFood from './section-components/latest-food';
import Foodcta from './section-components/food-cta';
import FoodMenu from './section-components/food-menu';

import Footer from './global-components/footer';

const ResturentPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Resturent" subheader="Resturent" />
        <LatestFood />
        <Foodcta />
        <FoodMenu />
        
        <Footer />
    </div>
}

export default ResturentPage

