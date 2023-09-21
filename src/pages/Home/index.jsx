import Footer from "../../component/molecules/Footer";
import NavBar from "../../component/molecules/NavBar";
const Home = () => {
    return (
<<<<<<< HEAD
        <div className="HomePagePicture"> <NavBar/> 

            <img src={imageUrl} className="img-fluid" alt="Travel" width="500" height="500" />
    <Footer/>
        </div>
=======
>>>>>>> c9b3865c93055f9b0ea66704b1fa8a9207e6d43a
    
<div id="carouselExampleDark" class="carousel carousel-dark slide">
    <NavBar/> <br /> <br />
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
    <img src="https://i.pinimg.com/564x/fe/8d/25/fe8d254700e90a9e31b04e6366f853cd.jpg" class="d-block w-100 increased-width" alt="..." />
    <div class="carousel-caption d-none d-md-block">
      <h3>TravelEase</h3>
      <p>Unlock the world's wonders with TravelEase. We craft bespoke journeys to enchanting destinations, catering to your every need. Discover the joy of seamless travel, where adventure and relaxation unite. Start your unforgettable voyage with us today.</p>
    </div>
  </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.pinimg.com/564x/1b/0a/0e/1b0a0e9a9f12a0f12d8109e97d17b194.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/564x/01/89/97/0189975f70819ff893a9323dbe618a4e.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
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
  <br />  <br />
  <Footer/>
</div>

    );
}
export default Home;