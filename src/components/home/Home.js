import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Tours from '../tours/Tours'
import './Home.css'


function Home(props) {
    return (
        <div>
            <Header />
            <Tours/>
            <Footer />
        </div>
    )
}

export default Home;
// DataT={props.Data}