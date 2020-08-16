import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-list';

import Footer from './global-components/footer';

const BlogListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Standard" subheader="Blogs" Img="blog/blog-breadcrumb.jpg" />
        <BlogList />
        
        <Footer />
    </div>
}

export default BlogListPage

