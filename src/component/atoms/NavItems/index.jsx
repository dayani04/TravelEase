const NavItems=({path,name})=>{
    return (
       <div> <li className="nav-item">
            <a class="nav-link" href={path}>
                {name}
            </a>
        </li>
        
        </div> 
        
    )
}
export default NavItems; 