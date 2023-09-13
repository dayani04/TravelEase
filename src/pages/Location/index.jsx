import Footer from "../../component/molecules/Footer";
import NavBar from "../../component/molecules/NavBar";

const Location = () => {
    const imageUrl = "https://i.pinimg.com/564x/21/19/52/211952d685301f73a1d0e9485b60552e.jpg" // Replace this with your actual image URLhttps://i.pinimg.com/564x/21/19/52/211952d685301f73a1d0e9485b60552e.jpg

    return (
        <div className="HomePagePicture"> <NavBar/> 
            <img src={imageUrl} className="img-fluid" alt="Travel" width="800" height="800" />
            <Footer/>
        </div>
    
    );
}

export default Location;
