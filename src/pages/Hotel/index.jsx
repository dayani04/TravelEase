
import Footer from '../../component/molecules/Footer';
import './index.css';
import NavBar from "../../component/molecules/NavBar";


const Hotel = () => {
  // Define the showAlert function within the component
  const showAlert = () => {
    alert("Your form has been submitted.");
  };


    return(
      <div> <NavBar/> <br/> <br/>
      <h1> SELECT YOUR HOTEL </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/7b/b0/00/sigiriya-village-hotel.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">SIGIRIYA -Village Hotel</h5>
              <p class="card-text">A village-themed hotel in the heart of Sri Lanka's Cultural Triangle, tucked away in peaceful tranquillity under the shade of the majestic Sigiriya Rock Fortress.<li> Price range: Prices for upcoming dates starts at $45 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/403038116.jpg?k=c92f9231294303d65c1551cd4424e3154256c5f79ae7b8b2f998984973b0cfef&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">SIGIRIYA - Water Cottage</h5>

              <p class="card-text"> Sigiriya Water Cottage is nestled in the very heart of Sigiriya, 25 minutes' walk of Sigiriya Craft Village. Featuring lake views, the rooms come with an electric kettle and glassware as well as with access to a sunbathing terrace.<li> Price range: Prices for upcoming dates start at $57 per night (We Price Match)</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/26/ed/c7/06/palmyra-nature-resort.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">SIGIRIYA - Nature Resort</h5>
              <p class="card-text"> Hotel Sigiriya Nature Resort is located at Near The police station Sigiriya, road in Sigiriya in 2.3 km from the centre.<li> Price range: Prices for upcoming dates starts at $50 for day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/91/34/0b/the-kingsbury-exterior.jpg?w=700&h=-1&s=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">COLOMBO - The Kingsbury</h5>
              <p class="card-text">The Kingsbury, Colombo features 229 beautiful rooms & suites providing a sleep sanctuary, with views of the Indian Ocean and the Port City.<li> Price range: Prices for upcoming dates starts at $70 per day</li></p>
            </div>
            </div>
          </div>
        <div class="col">
          <div class="card">
            <img src="https://www.een.com/wp-content/uploads/2020/12/hilton-bldg.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">COLOMBO - Hillton</h5>
              <p class="card-text">Connected to the World Trade Center, the Hilton offers 382 guestrooms and suites, an Executive Lounge overlooking the lotus pond offering a full breakfast and evening cocktails.<li> Price range: Prices for upcoming dates starts at $57 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/80043638.jpg?k=e71cfeccccd35d54ba5272323e199a217e11133c087a6895112571490da6acdd&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">COLOMBO - Galadari</h5>
              <p class="card-text">Galadari Hotel, traded as Galadari Hotels (Lanka) PLC, is a five-star luxury hotel in Colombo, Sri Lanka. Emirati conglomerate, Galadari Brothers are the controlling shareholders of the hotel company.<li> Price range: Prices for upcoming months starts with $60 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/441773367.jpg?k=cb3a922630f4ff67e0a1d7b1a4fc04dfa086dcb6e25851b9f09f4bc9cec86b24&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MIRISSA - River Inn</h5>
              <p class="card-text">Located 150 feet walk from the beach, Mirissa Beach Inn features free WiFi access at all areas. It provides tastefully furnished guestrooms fitted with a private balcony.<li> Price range: Prices for upcoming dates starts at $77 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/185467428.jpg?k=81b8b3b9944ffabc97686771b4c4bf02f153b8cd6a0c9b869110d35fc9d09043&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MIRISSA - Deep Blue</h5>
              <p class="card-text">Deep Blue is a private villa offering rooms with boutique style décor in Matara, 1640 feet from Polhena beach. It has a private beach area and an outdoor swimming pool.<li> Price range: Prices for upcoming days starts at $25 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://d2ottqtt629f68.cloudfront.net/2020/11/1000x900.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MIRISSA - Marino</h5>
              <p class="card-text">Located 150 m from Mirissa Beach, Marino Mirissa is a hotel offering free WiFi and private parking. It is about 1.4 mi from Mirissa center from Matara.<li> Price range: Prices for upcoming dates starts at $67 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://grand-kandyan-hotel.negombohotels.net/data/Imgs/OriginalPhoto/4202/420201/420201897/img-grand-an-hotel-kandy-11.JPEG" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">KANDY - The Kandyan</h5>
              <p class="card-text">The 4-star Kandyan Hotel lies 1.3 km away from the anglican Church of St Paul. Guests who stay in this Kandy hotel can park their car onsite.<li> Price range: Prices for upcoming dates starts at $87 per night</li> </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/ca/e5/mount-blue-kandy.jpg?w=700&h=-1&s=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">KANDY - Mount Blue</h5>
              <p class="card-text">Well set in the center of Kandy, Mount Blue Kandy provides air-conditioned rooms with free WiFi, free private parking and room service.<li> Price range: Prices for upcoming days starts from $55 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://www.thilankahotel.com/images/gallery/4%20(4)s.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">KANDY - Tower Inn </h5>
              <p class="card-text"> Kandy Tower Inn provides free WiFi throughout the property and a terrace. It's located 9-minute walk from Dalada Maligawa.<li> Price range: Prices starts at $88 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/136183368.jpg?k=ce92da0e6ae9f2ed0f4b694ce543dcfa4f53f1f22ed3f60f5dc937bf01e19ee4&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">GALLE - Old Dutch House</h5>
              <p class="card-text">Ideally located in the center of Galle, Old Dutch House has continental breakfast and free Wifithroughout the property. Featuring family rooms, this property also provides guests with a picnic area.<li>Price range: prices starts at $66 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/57/39/5739036_v2.jpeg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">GALLE - Amari</h5>
              <p class="card-text">Located at 5 km distance from the preserved Dutch sea Fort, the luxury hotel comprises 172 rooms and 2 restaurants. The beachfront property is set in Galle City district.<li>Price range: prices starts at $90 for a day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/02/38/f6/2c/front-of-the-jetwing.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">GALLE - Jetwing</h5>
              <p class="card-text">Boasting picturesque seaside landscapes on the outskirts of the coastal city, this home of Sri Lankan hospitality features a distinct reputation among hotels in Galle.<li>Price range: prices for upcoming dates starts at $43 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/111814346.jpg?k=3831fb65dbfaecd9076aca2913cc737be303db3f322086f42559de9edadfea42&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">BADULLA - Heritage Resort</h5>
              <p class="card-text">The Heritage Grand is offering accommodation in Badulla. Among the facilities of this property are a restaurant, along with free WiFi.<li>Price range: prices for upcoming dates starts at $55 per day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/326353549.jpg?k=ba29530eb1c57e8c17e93d314b8fc4634d42078c8b3dd76814fd8c7b0953b37c&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">BADULLA -City View </h5>
              <p class="card-text">Located in Badulla, within 14 miles of Demodara Nine Arch Bridge and 30 miles of Hakgala Botanical Garden.<li>Price range: prices for upcoming dates starts  $88 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://static.readytotrip.com/upload/information_system_24/1/5/7/item_1578005/information_items_1578005.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">BADULLA -Mount View </h5>
              <p class="card-text">If you're looking for a budget friendly small hotel in Badulla, look no further than Mount View Hotel. Guest rooms offer a flat screen TV.<li>Price range: prices starts at $67 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/73241181.jpg?k=8e3ce973665c205beef7d64da5d1ea7b02b563644e2f82b1dd8fdb8f0042cb87&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MATARA - mandara Resort</h5>
              <p class="card-text">Located along the south west coast of the country, Mandara Resort offers guests a choice of meticulously appointed accommodation options</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/08/f0/9a/0c/pearl-cliff-hotel.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MATARA - Pearl  Resort </h5>
              <p class="card-text">Simple rooms in a relaxed hotel offering a seafood restaurant, a private beach area & sea views.<li>Price range: prices starts at $66 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/98935927.jpg?k=80d7f5b6026de7517d14297ea7caa84a74c5153f92b09508d263b1de7606a7c1&o=" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">MATARA - Deep Blue</h5>
              <p class="card-text">Deep Blue is a private villa offering rooms with boutique style décor in Matara, 550 yards from Polhena beach. It has a private beach area and an outdoor swimming pool.<li>Price range: prices for upcoming dates starts at $70 per day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://the-lake-hotel-polonnaruwa.booked.net/data/Photos/OriginalPhoto/513/51388/51388183/Ekho-Lake-Hotel-Polonnaruwa-Exterior.JPEG" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">POLONNARUWA - The Lake Hotel </h5>
              <p class="card-text">Being located right next to Parakrama Samudra, every room has a breath-taking view of the reservoir.<li>Price range: prices starts at $55 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/229229450.jpg?k=e34d967e5739e2e7bf07dc3172d7de22fdf70eb3ec173721fff09140e2e1fbf7&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">POLONNARUWA - Home Guest </h5>
              <p class="card-text">Located 656 feet from Polonnaruwa ruins and 17 mi from Sigiriya, My Home Guest features air-conditioned rooms with free WiFi throughout the property.<li>Price range: prices for upcoming dates starts at $34 per </li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_420,h_300/https://www.sri-lankatourism.lk/wp-content/uploads/2019/09/s-18-420x300.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">POLONNARUWA - Lakes Edge </h5>
              <p class="card-text">Lakes Edge Holiday Bungalow features a garden views. The guest house is 2 km away from Polonnaruwa Gal Viharaya & while Parakrama samudraya is 100 meter away.<li>Price range: prices for upcoming dates starts at $45 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/263750059.jpg?k=db8194d7425e827662ffb93806bfaf492ac671e96d8dbe6f62ca5f04a6385853&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">NUWARA ELIYA - H2O Lakeside </h5>
              <p class="card-text">The hotel is located right in front of Gregory Lake. Yuo can see the entire Gregory lake and Piduruthalagala mountain range from the hotel.<li>Price range: prices for upcoming dates starts at $55 per day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/99/26/de/araliya-green-hills-hotel.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">NUWARA ELIYA - Vibe Way </h5>
              <p class="card-text">Situated in Nuwara Eliya, 3.1 km from Gregory Lake, Vibe way (Hostel & Market farm) features accommodation with a garden, free private parking, a shared lounge and a terrace.<li>Price range: prices for upcoming dates starts at $55 per night</li> </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/338218552.jpg?k=e01a4224a66ed28b63e7ba5a16081a343eb4d207215773e458ca9f324d2b363f&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">NUWARA ELIYA - Victoriya </h5>
              <p class="card-text">Victoria Inn offers guests an array of room amenities including a desk, and getting online is possible, as free wifi is available.<li>Price range: prices starts at $55 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/171034872.jpg?k=6269f8c83290d5fd6f4d71db08758352be8d90f481242753a8905acca18e7eab&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">JAFFNA - Valampuri </h5>
              <p class="card-text">Located in Jaffna, 200 metres from Jaffna Railway Station, The Valampuri provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a restaurant.<li>Price range: prices for upcoming dates starts at $87 per night</li> </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/81406226.jpg?k=8f5edce8fc768723e8abff5b6d51e0590df7f9c2b5b9dc3c0b5769626760df19&o=" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">JAFFNA - Yarl Mercury</h5>
              <p class="card-text">Easy, Fast And Secure Booking With Instant Confirmation. Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Get Instant Confirmation.<li>Price range: prices for upcoming dates starts at $68 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/219613527.jpg?k=ab3a37466a7ccde3bfb99869ded2da6ca1b793de95e8b83632cc24ca00835e76&o=" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">JAFFNA - D'Villa Garden</h5>
              <p class="card-text">Situated in Jaffna and within 1.9 km of Jaffna Railway Station, D'Villa Guest House has a shared lounge, non-smoking rooms, and free WiFithroughout the property.<li>Price range: prices for upcoming dates starts at $55 per day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/398112371.jpg?k=c88b26b49745f69ecc5f2449ea7e57ad531b404cf078c31fe579486c5ca18fca&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">TRINCOMALEE -Resort Maya</h5>
              <p class="card-text">Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Easy, Fast And Secure Booking With Instant Confirmation. Special Offers. Book Your Car Rental. Apartments. Secure Booking.<li>Price range: prices starts at $88 per day</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404121774.jpg?k=8b87dd891bb727aacacefdc8156a3c0e826234f7ec60d258adf1e147c40f95ee&o=&hp=1" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">TRINCOMALEE -The Tottam Beach Hotel</h5>
              <p class="card-text">Set in Trincomalee, within 100 metres of Sampalthivu Beach and 2.2 km of Uppuveli beach, The Tottam Beach Hotel - Trincomalee offers accommodation with a private beach area.<li>Price range: prices for upcoming dates starts at $78 per night</li></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://themiracleisland.com/images/acommodation/trinco-blu/6.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">TRINCOMALEE -boutique hotel </h5>
              <p class="card-text">Located in Trincomalee, 100 metres from Uppuveli beach, Trinco Boutique Hotel provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden.<li>Price range: prices for upcoming dates starts at $77 per night</li></p>
            </div>
          </div>
        </div>
      <br />
      <br />
      <form class="custom-form">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control custom-input-width" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter your Email"/>
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="disabledSelect" class="form-label">Select the Hotel</label>
<select id="disabledSelect" class="form-select custom-select-width">
  <option>Select Your Hotel</option>
  <option>------SIGIRIYA------</option>
  <option>SIGIRIYA - Village Hotel</option>
  <option>SIGIRIYA - Water Cottage</option>
  <option>SIGIRIYA - Nature Resort</option>
  <option>------COLOMBO------</option>
  <option>COLOMBO - The Kingsbury</option>
  <option>COLOMBO - Hillton</option>
  <option>COLOMBO - Galadari</option>
  <option>------MIRISSA------</option>
  <option>MIRISSA - River Inn</option>
  <option>MIRISSA - Deep Blue</option>
  <option>MIRISSA - Marino</option>
  <option>------KANDY------</option>
  <option>KANDY - The Kandyan</option>
  <option>KANDY - Mount Blue</option>
  <option>KANDY - Tower Inn</option>
  <option>------GALLE------</option>
  <option>GALLE - Old Dutch House</option>
  <option>GALLE - Amari</option>
  <option>GALLE - Jetwing</option>
  <option>------BADULLA------</option>
  <option>BADULLA - Heritage Resort</option>
  <option>BADULLA - City View</option>
  <option>BADULLA - Mount View</option>
  <option>------MATARA------</option>
  <option>MATARA - mandara Resort</option>
  <option>MATARA - Pearl  Resort</option>
  <option>MATARA - Deep Blue</option>
  <option>------POLONNARUWA------</option>
  <option>POLONNARUWA - The Lake Hotel</option>
  <option>POLONNARUWA - Home Guest</option>
  <option>POLONNARUWA - Lakes Edge</option>
  <option>------NUWARA ELIYA------</option>
  <option>NUWARA ELIYA - H2O Lakeside</option>
  <option>NUWARA ELIYA - Vibe Way</option>
  <option>NUWARA ELIYA - Victoriya</option>
  <option>------JAFFNA------</option>
  <option>JAFFNA - Valampuri</option>
  <option>JAFFNA - Yarl Mercury</option>
  <option>JAFFNA - D'Villa Garden</option>
  <option>------TRINCOMALEE------</option>
  <option>TRINCOMALEE - Resort Maya</option>
  <option>TRINCOMALEE - The Tottam Beach Hotel</option>
  <option>TRINCOMALEE - boutique hotel</option>
  <br />
</select>
</div>
<div class="mb-3">
  <label for="nameInput" class="form-label">Number of Days stay the hotel</label>
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
      <br />
      <br />
      <Footer/>
</div>
</div>

    );
    

}
export default Hotel;