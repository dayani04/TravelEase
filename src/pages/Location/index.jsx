import React from "react";
import NavBar from "../../component/molecules/NavBar";

const Location = () => {
    const imageUrl = "https://www.spendlifetraveling.com/wp-content/uploads/2019/02/must_visit_places_sri_lanka_sigiriya.jpg" 
    const imageUrl2 = "https://d1ubwt7z1ubyyw.cloudfront.net/uploads/dambulla-cave-temple-is-sri-lankas-oldest-buddhist-site-1675223566.jpg" 
    const imageUrl3 = "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Jaffna.jpg" 
    const imageUrl4 = "https://www.backpackerbanter.com/blog/wp-content/uploads/2018/11/best-places-to-visit-in-sri-lanka-backpacker-travel-sigiriya-kandy-dambulla-elephants.jpg" 
    const imageUrl5 = "https://pyt-blogs.imgix.net/2021/05/aviv-ben-or-4HuzkCaB92s-unsplash-1.jpg?auto=format&ixlib=php-3.3.0" 
    const imageUrl6 = "https://destinationlesstravel.com/wp-content/uploads/2019/04/DSC_8611.jpg" 
    const imageUrl7 = "https://travellemming.com/wp-content/uploads/Galle-Fort-Sri-Lanka.jpg" 
    const imageUrl8 = "https://www.holidify.com/images/cmsuploads/compressed/39695821345_dd3e47a8f2_b_20190712161507.jpg" 
    const imageUrl9 = "https://c.myholidays.com/blog/blog/content/images/2021/04/Ella.jpg" 
    const imageUrl0 = "https://th.bing.com/th/id/OIP.Yb1Vip3WmZ4DUKrVJajrLgHaE8?pid=ImgDet&w=474&h=316&rs=1" 

    return (
        <div className="Location">
           <NavBar/> 
           <img src={imageUrl} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl2} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl3} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl4} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl5} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl6} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl7} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl8} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl9} className="img-fluid" alt="Sigiriya" width="100" height="100" />
           <img src={imageUrl0} className="img-fluid" alt="Sigiriya" width="100" height="100" />

        </div>
    );
}

export default Location;
