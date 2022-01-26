import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home--container">
            
            <img className="home--image" src='https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg' alt=""/>

            <div className="home--row">
            <Product 
               id="01"
               title="See U in C by Ali Karim Sayed (Author)"
               price={4450}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SY344_BO1,204,203,200_.jpg"
                />
            <Product 
               id="02"
               title="Apple iPhone 11 (64GB) - Black"
               price={50999}
               image="https://images-eu.ssl-images-amazon.com/images/I/41FqG3cHV9L._SX300_SY300_QL70_FMwebp_.jpg"
                />
            <Product 
               id="03"
               title="Apple AirPods Pro"
               price={21490}
               image="https://m.media-amazon.com/images/I/71zny7BTRlL._SX679_.jpg"
                />        
            <Product 
               id="04"
               title="New Apple Watch SE (GPS, 44mm) - Space Grey"
               price={32900}
               image="https://images-eu.ssl-images-amazon.com/images/I/41DA7ETue4L._SY445_SX342_QL70_FMwebp_.jpg"
                />
               </div>
              <div className="home--row">  
             <Product 
               id="05"
               title="Redgear Pro Wireless Gamepad "
               price={1299}
               image="https://m.media-amazon.com/images/I/81SzaVbfZAL._AC_UL320_.jpg"
                />     
            <Product 
               id="06"
               title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV"
               price={38990}
               image="https://m.media-amazon.com/images/I/61GwJAhftvS._AC_UY218_.jpg"
                />
                <Product 
               id="07"
               title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
               price={2449}
               image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />  
                <Product 
               id="08"
               title="Acer Nitro 5 AN515-57 Gaming Laptop | Intel Core i5-11400H"
               price={76990}
               image="https://images-eu.ssl-images-amazon.com/images/I/41x2hlOf3RS._SY300_SX300_QL70_FMwebp_.jpg"
                />          
            </div>
        </div>  
    </div>
    )
}

export default Home
