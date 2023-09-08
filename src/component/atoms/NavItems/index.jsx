const NavItems=({path,name})=>{
    return (
        <li className="nav-item">
            <a class="nav-link" href={path}>
                {name}
            </a>
        </li>
    )
}
export default NavItems; 