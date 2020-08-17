import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';

import Footer from './global-components/footer';

const BlogDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details"  Img="bg/breadcrumb-02.jpg" />
        <BlogDetails />
        
        <Footer />
    </div>
}

export default BlogDetailsPage

