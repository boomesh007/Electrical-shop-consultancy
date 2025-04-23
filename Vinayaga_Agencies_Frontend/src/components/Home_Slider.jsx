import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Service from './ServiceSection';
import Brand from './Brand';
import Home_smallcaro from './Home_smallcaro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shop from '../assets/Home images/shop.png';

const mockedProducts = [
  {
    _id: 1,
    video: 'https://thumbs.dreamstime.com/b/electrician-s-supplies-electrical-scheme-white-background-closeup-150067150.jpg',
    text: 'Bringing light and power to your world, one switch at a time.',
    textAlign: 'center',
  },
  {
    _id: 2,
    video: 'https://media.istockphoto.com/id/872630898/photo/different-painting-supplies-on-white-wooden-table.jpg?s=612x612&w=0&k=20&c=b0NvoMG3z5Min239T9BVZLaZsDrMvANUkLFydugf1p4=',
    text: 'Bringing color and creativity to your spaces, one stroke at a time',
    textAlign: 'center',
  },
  {
    _id: 3,
    video: 'https://c8.alamy.com/comp/B04BKA/electric-fans-on-a-conference-table-B04BKA.jpg',
    text:'Stirring up comfort and breeze, one spin at a time',
    textAlign: 'center',
  },
];

const HomeSlider = () => {
  const products = mockedProducts;

  return (
    <>
      <Carousel 
        pause="hover" 
        style={{ width: '1200px', margin: 'auto' }} 
        interval={1000} // This will make the images change every 3 seconds
        controls={false} // Optionally, you can disable controls (next/prev buttons)
        indicators={true} // Optionally, show indicators for the slides
      >
        {products.map((product, index) => (
          <Carousel.Item key={product._id}>
            <div 
              style={{
                position: 'relative', 
                width: '100%', 
                height: '450px', 
                justifyContent: 'center', 
                display: 'flex', 
                alignItems: 'center', // Centers the image vertically
                justifyContent: 'center', // Centers the image horizontally
              }}
            >
              <img src={product.video} width="100%" alt="product" style={{ objectFit: 'cover' }} />
            

              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%', 
                transform: 'translateX(-50%)', 
                textAlign: 'center', 
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
              }}>
                {product.text}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Home_smallcaro />

      
      <section className="about-us">
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <p>At Tamilnadu Traders, we are dedicated to providing customers with a convenient and reliable platform to fulfill all their electrical hardware needs. Since 2014, we have been committed to offering a diverse range of high-quality electrical supplies to cater to various projects and requirements.</p>
            <p>Our mission is to simplify the shopping experience for both professionals and DIY enthusiasts in the electrical industry. With user-friendly navigation, detailed product descriptions, and secure payment options, we make it easy for customers to find and purchase the products they need with confidence.</p>
            <p>What sets us apart is our commitment to customer satisfaction and convenience. We prioritize fast order processing, reliable shipping, and responsive customer support to ensure a seamless shopping experience from start to finish.</p>
            {/* <div className="col-md-6">
              <Card>
                <Card.Img variant="top" src={shop} />
              </Card>
            </div> */}
          </div>
        </div>
      </section>
      <Service /><br /><br />
      <Brand />
    </>
  );
};

export default HomeSlider;
