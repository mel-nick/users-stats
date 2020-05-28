import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import headerBgSvg from '../../img/svg/header_bg.svg'
import pricingPackgeBgSvg from '../../img/svg/packages_bg.svg'

const Landing = () => {

    const headerStyles = {
        background: `url(${headerBgSvg}) no-repeat center center`,
        backgroundSize: 'cover'
    }
    const pricingPackgesStyles = {
        background: `url(${pricingPackgeBgSvg}) right center no-repeat`,
        padding: '30px 0'
    }
 
    return (
        <Fragment>
            <header className="header" style={headerStyles}>
                <Navbar/>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                    <h1 className="header-slogan text-white">
                        <span className="text-bold">Brainstorming </span>
                        for desired perfect Usability</h1>
                    <p className="description text-white">
                        Our design projects are fresh and simple and will benefit your business greatly. Learn more
                        about our work!
                    </p>
                    <div className="header-btn-container text-center text-md-left my-4 mb-md-0">
                    <Link to="/users" className="btn btn-light m-5">View Stats</Link>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <img className="header-img img-fluid" src="./img/svg/mobile.svg" alt="header mobile" />
                    </div>
                </div>
                </div>
            </header>
            <section className="benefits">
                <div className="container">
                <div className="row">
                    <div className="section-header col-12 col-md-5 text-center mx-auto">
                    <h4>Why <span className="text-bold">small business owners love</span> UStats?</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="section-description col-12 col-md-8 text-center mx-auto">
                    <p className="description text-black-50">Our design projects are fresh and simple and will benefit your
                        business greatly. Learn more about our work!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="benefits-item text-center my-3 my-md-0">
                        <img src="./img/svg/advantages_1.svg" alt="benefits" className="benefits-item-img img-fluid" />
                        <p className="benefits-item-headding text-bold">Clean Design</p>
                        <p className="benefits-item-description text-black-50">Increase sales by showing true dynamics of
                        your website.</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="benefits-item text-center  my-3 my-md-0">
                        <img src="./img/svg/advantages_2.svg" alt="benefits" className="benefits-item-img img-fluid" />
                        <p className="benefits-item-headding text-bold">Secure Data</p>
                        <p className="benefits-item-description text-black-50">Build your online store’s trust using Social
                        Proof &amp; Urgency.</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="benefits-item text-center  my-3 my-md-0">
                        <img src="./img/svg/advantages_3.svg" alt="benefits" className="benefits-item-img img-fluid" />
                        <p className="benefits-item-headding text-bold">Retina Ready</p>
                        <p className="benefits-item-description text-black-50">Realize importance of social proof in
                        customer’s purchase decision.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="managing-your-apps">
                <div className="container">
                <div className="row">
                    <div className="section-header col-12 col-md-6 my-4">
                    <h4 className="text-bold text-white mt-2">Start Managing your apps business, more faster</h4>
                    <p className="text-white my-4">Objectively deliver professional value with diverse web-readiness.
                        Collaboratively transition wireless customer service without goal-oriented catalysts for change.
                        Collaboratively.</p>
                    <div className="header-btn-container text-center text-md-left my-4 mb-md-0">
                        <a href="!#" className="btn btn-light btn-lg" rel="noreferrer noopener">Learn More</a>
                    </div>
                    </div>
                    <div className="managing-your-apps-img col-12 col-md-6  d-none d-md-block text-center">
                    <img className="img-fluid rounded mx-auto d-block mt-lg-n4" src="./img/svg/macbook.svg" alt="nb" />
                    </div>
                </div>
                </div>
            </section>
            <section className="pricing-packges" style={pricingPackgesStyles}>
                <div className="container">
                <div className="row">
                    <div className="section-header col-12 col-md-7 text-center mx-auto mt-5">
                    <h4><span className="text-bold">Afforadble Pricing and Packages</span> choose your best one</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="section-description col-12 col-md-7 text-center mx-auto">
                    <p className="description text-black-50">Monotonectally grow strategic process improvements vis-a-vis
                        integrated resources.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="pricing-packges-item text-center my-3 my-md-0">
                        <p className="pricing-packges-item-headding text-bold">Basic</p>
                        <img src="./img/svg/packages_1.svg" alt="pricing-packges" className="pricing-packges-item-img img-fluid" />
                        <p className="packges-item-price text-bold">$29</p>
                        <p className="pricing-packges-item-description text-black-50">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusandae odit sint hic! Natus porro sequi nostrum, cum ratione illo
                        inventore...</p>
                        <a href="!#" className="btn btn-main" rel="noreferrer noopener">Purchase now</a>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="pricing-packges-item text-center pricing-packges-item__main my-3 my-md-0">
                        <p className="pricing-packges-item-headding text-bold">Standart</p>
                        <img src="./img/svg/packages_2.svg" alt="pricing-packges" className="pricing-packges-item-img img-fluid" />
                        <p className="packges-item-price text-bold color-main">$49</p>
                        <p className="pricing-packges-item-description text-black-50">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusandae odit sint hic! Natus porro sequi nostrum, cum ratione illo
                        inventore...</p>
                        <a href="!#" className="btn btn-main" rel="noreferrer noopener">Purchase now</a>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                    <div className="pricing-packges-item text-center  my-3 my-md-0">
                        <p className="pricing-packges-item-headding text-bold">Unlimited</p>
                        <img src="./img/svg/packages_3.svg" alt="pricing-packges" className="pricing-packges-item-img img-fluid" />
                        <p className="packges-item-price text-bold">$129</p>
                        <p className="pricing-packges-item-description text-black-50">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusandae odit sint hic! Natus porro sequi nostrum, cum ratione illo
                        inventore...</p>
                        <a href="!#" className="btn btn-main" rel="noreferrer noopener">Purchase now</a>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7 text-center mx-auto mt-5">
                    <p className="contact-us">If you need custom services or Need more? 
                    <a href="!#" className="contact-us-link text-bold color-main" rel="noreferrer noopener">Contact us</a>
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}

export default Landing
