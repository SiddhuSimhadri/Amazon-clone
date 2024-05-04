import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container topimg'>
            <img className='home__image' 
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='homeimage' />
        </div>

        <div className='home__row top'>
            <Product 
                id='12321341'
                title='The lean Startup: How constant innovation creates rapidly successful Business Paperback' 
                price={ 29.99 } 
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                rating={5}
            />
            <Product title="Kenwood kMix stand Mixer for baking, Stylish kitchen mixer with K-beater, Dough hook and Whisk, 5 Litre Glass Bowl" 
            price={239.0} image='https://images-cdn.ubuy.co.in/6531cb40134d2750305e5384-kenwood-kmix-stand-mixer-for-baking.jpg' rating={4}/>
        </div>

        <div className='home__row'>
            <Product 
                id = '4903850'
                title="Samsung LC49RG9ØSSUXEN 491 Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            />
            <Product 
                id="23445930"
                title="Amazon Echo (3rd generation) I Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9—inch, Wi—Fi, 128GB)— Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SL1500_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product 
                id="90829532"
                title="Samsung LC49RG9ØSSUXEN 491 Curved LED Gaming MonitorSuper Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className='home__row'>
            <Product 
                id="90829352"
                title="Samsung LC49RG9ØSSUXEN 491 Curved LED Gaming MonitorSuper Ultra Wide Dual WQHD 5120 x 1440"
                price={800.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/81fxjeu8fdL._SL1500_.jpg"
            />

            <Product 
                id="90849332"
                title="Oaky Pencil Holder Case for Apple Mini 6 8.3 inch 2021 6th Gen. Folio Back Cover Trifold Stand Auto Wake/Sleep Cover Support 2nd Gen Pencil Charging - Black"
                price={605.98}
                rating={5}
                image="https://m.media-amazon.com/images/I/61Gw3hXNCVS._SL1500_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product 
                id="90829331"
                title="HONOR Pad 9 with Free Bluetooth Keyboard, 12.1-Inch 2.5K Display, 16GB (8+8GB Extended), 256GB Storage, Snapdragon 6 Gen 1 (4nm), 8 Speakers, Up-to 17 Hours..."
                price={625.98}
                rating={3}
                image="https://m.media-amazon.com/images/I/711rRUziI5L._SL1500_.jpg"
            />

            <Product 
                id="90829331"
                title="Lenovo Q-Series 24 Inch (60.5Cm) 1920x1080 Pixels FHD IPS Monitor | Height Adjustment, 2X3W Speakers, 75Hz, AMD FreeSync, HDMI, DP, Smart Display Customization, Raven Black"
                price={1045.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/71r07rY2wcL._SL1500_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product 
                id="90829352"
                title="Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 512GB Storage)"
                price={809.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/71RVuBs3q9L._SL1500_.jpg"
            />

            <Product 
                id="90829332"
                title="
                Safari Polypropylene Pentagon Hardside Small Size Cabin Luggage Speed_Wheel 8 Wheel Suitcase Trolley Bags for Travel Black Color 55Cm"
                price={1094.98}
                rating={5}
                image="https://m.media-amazon.com/images/I/61piNi70giL._SL1500_.jpg"
            />

            <Product 
                id="90829365"
                title="Van Heusen Men's Regular Fit Polo Shirt"
                price={89.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/51AFOSRby6L._SY741_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product 
                id="90829369"
                title="SAllen Solly Men's Regular Fit Polo T-Shirt"
                price={65.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/61dPB92+YkL._SY741_.jpg"
            />
            <Product 
                id="90829370"
                title="Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)"
                price={105.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71kE75JMKjL._SY879_.jpg"
            />
            <Product 
                id="90829380"
                title="Pepe Jeans Men's Cotton Boxer Shorts Relaxed"
                price={69.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/81N-dDJ4e4L._SX679_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product 
                id="90829350"
                title="Realswiss Commercial Functional Trainer Gym Machine with 200 Kg Weight Stack (Black, Silver)"
                price={509.98}
                rating={5}
                image="https://m.media-amazon.com/images/I/41H3NlydpnL._SX300_SY300_QL70_FMwebp_.jpg"
            />

            <Product 
                id="90829351"
                title="
                BURNLAB 6 In 1 Multifunctional Weight Training Kit- Dumbells, Kettlebells, Barbells & Push Up Brackets In 1 (12 Kilograms)
                Item Weight:12.0 Kilograms"
                price={490.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/618Nlj8pN3L._SL1080_.jpg"
            />
        </div>
    </div>
  )
}

export default Home