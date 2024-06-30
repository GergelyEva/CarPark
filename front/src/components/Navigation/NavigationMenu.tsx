import { NavLink } from 'react-router-dom';
import './NavigationMenu.css'


//isActive definit ca si un props, de tip boolean
const NavigationMenu=({isActive}:{isActive:boolean})=>{
  return(

<nav className="navigation-menu">
    <ul>
        <li>
            {/* NavLink component of the react-router-dom */}
            <NavLink to="/home" className={isActive?"active":""}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/basket" className={isActive?"active":""}>
            Basket
            </NavLink>
        </li>
        <li>
            <NavLink to="/overview" className={isActive?"active":""}>
            Overview
            </NavLink>
        </li>
    </ul>
</nav>
  )
}
export default NavigationMenu;
