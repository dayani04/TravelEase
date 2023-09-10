import NavItems from "../../atoms/NavItems";

const NavBar=()=>{
    return (
        <div>
          <div class="navbar bg-dark border-bottom border-body"data-bs-theme="dark">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TravelEase</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <NavItems name={'Home'} path={'/'}/>
             <NavItems name={'Location'} path={'/Location'}/>
             <NavItems name={'Hotel'} path={'/Hotel'}/>
             <NavItems name={'Transpotation'} path={'/Transpotation'}/>
              
             
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
      </div>
    )
}
export default NavBar; 