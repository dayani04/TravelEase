

const Home = () => {
    console.log("Welcome to our web page");
    const imageUrl = "https://i.pinimg.com/564x/21/19/52/211952d685301f73a1d0e9485b60552e.jpg" // Replace this with your actual image URLhttps://i.pinimg.com/564x/21/19/52/211952d685301f73a1d0e9485b60552e.jpg
    console.log("Welcome to our web page");
    return (
        <div className="HomePagePicture"> 
            <img src={imageUrl} className="img-fluid" alt="Travel" width="500" height="500" />
    
        </div>
    
    );
}

export default Home;
