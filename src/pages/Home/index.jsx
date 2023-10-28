import React from "react";
import Footer from "../../component/molecules/Footer";
import NavBar from "../../component/molecules/NavBar";
const Home = () => {
    return (    

<div id="carouselExampleDark" class="carousel carousel-dark slide">
    <NavBar/> <br /> <br />
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

  </div>
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
  <h1 style={{ color: 'skyblue', fontWeight: 'bold', fontSize: '100px' }}>TravelEase</h1>

    <img src="https://i.pinimg.com/564x/c8/28/51/c8285195e37daec951e4c68803b7a13e.jpg" class="d-block w-100 increased-width" alt="..." />
    <div class="carousel-caption d-none d-md-block"> <br /> <br /> 
    </div>

  
    <img src="https://i.pinimg.com/564x/c8/28/51/c8285195e37daec951e4c68803b7a13e.jpg" class="d-block w-100 increased-width" alt="..." />
    
    <div class="carousel-caption d-none d-md-block"> <br /> <br /> 
  
    </div>
  

<br /> 
<p style={{ color: 'white' }}>Welcome to TravelEase, your passport to unlocking the world's wonders. We specialize in crafting bespoke journeys to enchanting destinations that cater to your every need. Experience the pure joy of seamless travel, where adventure and relaxation unite to create unforgettable memories. Begin your extraordinary voyage with us today, and let our expertise and personalized service transform your dream vacation into reality. Whether you crave cultural immersion, scenic beauty, or thrilling escapades, we've got you covered. Join us on this incredible journey where every moment is tailored to your desires. It's time to embark on an unforgettable adventure with TravelEase.</p>
<br /> <br />
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/236x/9a/07/66/9a07663baddadce837768e2270a7ab4f.jpg" class="card-img-top" alt="..."/>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/236x/f0/b4/88/f0b488b70965dabdc4003771573beb39.jpg" class="card-img-top" alt="..."/>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://i.pinimg.com/736x/b8/9d/84/b89d84671f1f42805241fa8ca5b8c5ad.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
<p> "Welcome to Your Ultimate Travel Companion. Explore. Dream. Discover. Your Journey Begins Here. Start Exploring the World Today!" </p>
  </div>
  <br />
<div class="carousel-item">
    <h1 style={{ color: 'skyblue', fontWeight: 'bold' }}>OUR SERVICES</h1>
    <h3 style={{ color: 'skyblue', fontWeight: 'bold' }}>01 Location</h3>


      <img
  src="https://i.pinimg.com/236x/e3/bf/4c/e3bf4cfae755957d6a5d471eb255ab15.jpg" class="d-block w-10 increased-width" alt="..."
  style={{ width: '100px !important', height: '100px !important' }}/>
<p style={{ color: 'white' }}>Your gateway to extraordinary destinations. Browse our handpicked collection of breathtaking places from around the Sri Lanka. Whether you're seeking vibrant cities, tranquil beaches, or remote wilderness, we have it all. Immerse yourself in diverse cultures, savor local flavors, and embark on unforgettable adventures. Begin by selecting your desired location, and let us craft a bespoke travel experience just for you. Get ready to explore, unwind, and create lasting memories. Your journey starts here, and we're here to make it extraordinary. Start the adventure of a lifetime by choosing your dream destination now</p>



<h3 style={{ color: 'skyblue', fontWeight: 'bold' }}>02 Hotel</h3>
<img src="https://i.pinimg.com/564x/1f/df/7a/1fdf7a2364b1eaabd6463b7473198df0.jpg"class="d-block w-10 increased-width"alt="..."
 style={{ width: '100px !important', height: '100px !important' }}/>
<p style={{ color: 'white' }}>"Discover your ideal hotel on our Hotel Select page. Explore a meticulously curated selection of top-rated accommodations. Whether you crave luxury, boutique charm, or budget-friendly comfort, we have options for every traveler. Dive into detailed descriptions, reviews, and photos to make an informed choice. From bustling city centers to serene getaways, we've sourced diverse options to suit your preferences. Your ultimate stay is just a click away. Start by exploring our handpicked collection and secure your booking effortlessly. Your comfort and convenience matter to us, and we're here to make your hotel selection as seamless as your journey itself. Find your perfect stay now."</p>

 

<h3 style={{ color: 'skyblue', fontWeight: 'bold' }}>03 Transpotaion</h3>
<img src="https://i.pinimg.com/564x/2a/ed/35/2aed3501f0aa8a271b278e48f539d74e.jpg"class="d-block w-10 increased-width"alt="..."
 style={{ width: '100px !important', height: '100px !important' }}/>
<p style={{ color: 'white' }}>"your gateway to exceptional lodging options worldwide. Our carefully curated list features a diverse range of top-rated hotels, ensuring there's something for every traveler's taste and budget. Whether you seek luxury, boutique charm, or economical comfort, our collection has been chosen with your preferences in mind. Each listing is accompanied by detailed descriptions, reviews, and high-quality photos, offering you valuable insights to make an informed choice. Your ideal stay is just a click away, and we're here to simplify the booking process. Explore our handpicked selection and secure your lodging effortlessly, because your comfort and satisfaction are our top priorities. Find your perfect hotel today."</p>


    </div>
   

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <br />  
  <Footer/>
</div>

    );
}


export default Home;

