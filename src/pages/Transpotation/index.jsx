import React from 'react';
import NavBar from '../../component/molecules/NavBar';
import './index.css';
import Footer from '../../component/molecules/Footer';


const Transportation = () => {
  // Define the showAlert function within the component
  const showAlert = () => {

    alert("You have successfully submitted");
  };

  return (
   <div>
      <NavBar />
      <br /><br />
      <h1>SELECT YOUR VEHICLE</h1>
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/2020_Toyota_HiAce_%28front%29.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>01</b>
              </h2>
              <h4 class="card-title">
                <b>Van</b>
              </h4>
              <p class="card-text">
                This is a Toyota Hiace van, offers spacious seating, versatile
                cargo capacity, and dependable performance. It's ideal for both
                passenger transport and commercial use, with a reputation for
                reliability and durability.
              </p>
              <p>One Day - $500</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaISuqleHfgfxaAoeepojHEqUFPiSTp5c3Lb4KbJbtHyaPAvMexjbyPCIw6tZdxm_gAm0&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>02</b>
              </h2>
              <h4 class="card-title">
                <b>AC Bus</b>
              </h4>
              <p class="card-text">
                This is a AC buses, offer climate-controlled comfort with air
                conditioning, spacious seating, and amenities like Wi-Fi and
                charging outlets for passenger convenience.
              </p>
              <p>One Day - $300</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i0.wp.com/autodirect.lk/wp-content/uploads/2022/03/DSC_7255-scaled.jpg?resize=798%2C466&ssl=1"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>03</b>
              </h2>
              <h4 class="card-title">
                <b>Car</b>
              </h4>
              <p class="card-text">
                This is a Mercedes-Benz cars, offer luxury, advanced
                technology, and performance. They include features like premium
                materials, cutting-edge infotainment, safety systems, and a wide
                range of models catering to various preferences..
              </p>
              <p>One Day - $900</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://i.pinimg.com/736x/bb/a2/ec/bba2ec19ae303d8131039f9cc029b761--war-memorials-water-tower.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>04</b>
              </h2>
              <h4 class="card-title">
                <b>Train</b>
              </h4>
              <p class="card-text">
                This is a Trains, provide efficient, mass transit with
                comfortable seating, restrooms, and dining options. Many offer
                Wi-Fi, power outlets, and scenic views, making travel enjoyable
                and eco-friendly.
              </p>
              <p>One Day - $250</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://bd.gaadicdn.com/upload/modellogo/64afb0b239cd1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>05</b>
              </h2>
              <h4 class="card-title">
                <b>Scooter</b>
              </h4>
              <p class="card-text">
                This is a Scooters, compact two-wheelers, perfect for city
                commuting. They offer fuel efficiency, easy parking, and often
                include storage compartments. Electric scooters are eco-friendly
                alternatives gaining popularity.
              </p>
              <p>One Day - $700</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOm1aqrf7kaQTyg_vSnv6zM3e2Vg2bnaEMxzKyiJiMnqAJHoGmJtgE3dP8crNe1l1ZKQ&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>
                <b>06</b>
              </h2>
              <h4 class="card-title">
                <b>Travel Jeep</b>
              </h4>
              <p class="card-text">
                This is a Travel jeeps, rugged vehicles ideal for off-road
                adventures. They provide four-wheel drive, durability, and ample
                seating for outdoor exploration, often equipped with features
                like roof racks and all-terrain tires.
              </p>
              <p>One Day - $800</p> <br />
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <form class="custom-form">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control custom-input-width" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter your Email"/>
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="disabledSelect" class="form-label">Select the Transpotation</label>
<select id="disabledSelect" class="form-select custom-select-width">
  <option>Select Your Transpotation</option>
  <option>01</option>
  <option>02</option>
  <option>03</option>
  <option>04</option>
  <option>05</option>
  <option>06</option>
  
  <br />
</select>
</div>

<div class="mb-3">
  <label for="nameInput" class="form-label">Number of Days stay the </label>
  <input type="text" class="form-control custom-input-width" id="nameInput" aria-describedby="nameHelp" placeholder="Enter your Days"/>
</div>


<div class="mb-3">
<label for="disabledSelect" class="form-label">Payment Method</label>
<select id="disabledSelect" class="form-select custom-select-width">
  <option><b>Select Your Payment Methode</b></option>
  <option>E Pay</option>
  <option>Card Payment</option>
</select>
<br /><br />
<button type="button" className="btn btn-primary" onClick={showAlert}>
Submit
 </button>
</div>
</form>
<br /> <br />
<Footer/>
    </div>
  );
}
export default Transportation;

