import Header from './Header'
import SlideShow from  './SlideShow'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import products from '../sources/products'

export default () => (
    <div>
        <Header />
        <ReactFullpage
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000} /* Options here */

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <SlideShow slides={products} />
                        </div>
                        <div className="section">
                            <h1>What is cyber?</h1>
                            <p>Cyber is the protection of computer systems and networks from the theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    </div>
)