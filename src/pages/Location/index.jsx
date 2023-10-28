import React from "react";
import NavBar from "../../component/molecules/NavBar"
import'./index.css';
import Footer from "../../component/molecules/Footer";
const Location = () => {
  
  const showAlert = () => {
    alert("Your Selection Is Amazing");
  };

    return (
      <div> <NavBar/> <br /><br />
      <h1>SELECT YOUR AMAZING TRAVEL LOCATION</h1>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://www.spendlifetraveling.com/wp-content/uploads/2019/02/must_visit_places_sri_lanka_sigiriya.jpg" class="card-img-top" alt="..."/>

      <div class="card-body">
        <h5 class="card-title">SIGIRIYA</h5>
        <p class="card-text">Sigiriya, a UNESCO World Heritage site in Sri Lanka, is an ancient rock fortress with breathtaking frescoes and a lion-shaped gateway, constructed in the 5th century by King Kasyapa.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        01
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://www.tourism-of-india.com/blog/wp-content/uploads/2022/03/Colombo-srilanka.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">COLOMBO</h5>
        <p class="card-text">Colombo, the capital of Sri Lanka, is a vibrant city known for its mix of modern and colonial architecture, bustling markets, and cultural attractions like the National Museum and Gangaramaya Temple.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        02
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180222083159/iStock-531216313.jpg"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MIRISSA</h5>
        <p class="card-text">Mirissa, a coastal town in Sri Lanka, offers stunning beaches, whale watching, and a laid-back atmosphere. It's a popular destination for tourists seeking relaxation, surfing, and seafood dining.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
          03
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://th.bing.com/th/id/OIP.HX9XL_dniFUau98dv0M1JgHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">KANDY</h5>
        <p class="card-text">Kandy, in Sri Lanka's central highlands, is famed for the Temple of the Tooth, housing a relic of Buddha. It's known for its scenic beauty, lush tea plantations, and cultural richness.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        04
 </button>
      </div>
    </div>
  </div>
<div class="col">
    <div class="card">
      <img src= "https://www.bradtguides.com/wp-content/uploads/wysiwyg/destinations/asia/sri-lanka/light-house_galle-fort_sri-lanka.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">GALLE</h5>
        <p class="card-text">Galle, a coastal city in Sri Lanka, boasts a historic Dutch Fort, a UNESCO World Heritage site. It offers colonial charm, scenic beaches, and a blend of European and Asian influences.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        05
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://srilankatravelgram.com/wp-content/uploads/2021/02/Nine-Arches-Bridge.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BADULLA</h5>
        <p class="card-text">Badulla, a town in Sri Lanka's Uva Province, is known for its picturesque hill country scenery, tea plantations, and the striking Dunhinda Falls. It's a serene destination for nature enthusiasts.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        06
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://th.bing.com/th/id/OIP.SfeEZCgbjtSKD6LuEcPWfAHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MATARA</h5>
        <p class="card-text">Matara, a city in southern Sri Lanka, features beautiful beaches, historical landmarks like the Dutch Fort, and cultural attractions. It's a gateway to the country's southern coastal delights and scenic landscapes</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        07
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://www.travellankaconnection.com/images/blogs/must-visit-places-in-sri-lanka.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">POLONNAMRUWA</h5>
        <p class="card-text">Polonnaruwa, an ancient city in Sri Lanka, showcases well-preserved archaeological and architectural wonders from the 12th century, including royal palaces, temples, and the iconic Gal Vihara rock sculptures.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        08
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://th.bing.com/th/id/OIP.TaXYUgKHaaxnu_DR5hOlGgHaEb?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">NUWARA ELIYA</h5>
        <p class="card-text">Nuwara Eliya, often called "Little England," is a charming hill station in Sri Lanka. It's renowned for its tea plantations, cool climate, colonial architecture, and picturesque landscapes.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        09
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://www.lovesrilanka.org/wp-content/uploads/2020/04/Jaffna-Library-1200.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">JAFFNA</h5>
        <p class="card-text">Jaffna, in northern Sri Lanka, has a rich cultural heritage, with Hindu temples and historic sites. It's known for its unique cuisine, vibrant festivals, and post-war revival.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        10
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://th.bing.com/th/id/OIP._7Q0HeaOevL2HfG0-KGwsAHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">TRINCOMALEE</h5>
        <p class="card-text">Trincomalee, on Sri Lanka's northeast coast, boasts pristine beaches, the natural harbor of Trincomalee Bay, and cultural sites like the Koneswaram Temple. It's a hub for water sports and relaxation.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        11
 </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://th.bing.com/th/id/OIP.7wDFDHRz_ZBEZHP50KU_AQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">THEWATHTHA CHURCH</h5>
        <p class="card-text">The Tewaththa Church in Ragama, Sri Lanka, is a historic Catholic church with beautiful architecture and religious significance. It is a place of worship and pilgrimage for local Catholics.</p>
        <button type="button" className="btn btn-primary" onClick={showAlert}>
        12
 </button>
      </div>
    </div>


    </div>


<Footer />
</div>
</div>

    );
}
export default Location;