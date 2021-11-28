import React from 'react'
import Navbar from '../components/NavbarComponent'
import Categories from '../components/CategoriesComponent'
import Footer from '../components/FooterComponent'
import Newsletter from '../components/NewsletterComponent'

const Catalogue = () => {
    return (
        <>
            <title>Simply - Catalogue</title>
            <Navbar />
            <Categories />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Catalogue