import Footer from "../../component/molecules/Footer";
import NavBar from "../../component/molecules/NavBar";

const Home = () => {
    const imageUrl = "https://th.bing.com/th/id/OIP.Yb1Vip3WmZ4DUKrVJajrLgHaE8?pid=ImgDet&w=474&h=316&rs=1" // Replace this with your actual image URL

    return (
        <div className="HomePagePicture"> <NavBar/> 
            <img src={imageUrl} className="img-fluid" alt="Travel" width="800" height="800" />
            <Footer/>
        </div>
    
    );
}

export default Home;
