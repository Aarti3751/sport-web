
import '../components/Nav.css';
import logo from '../OIP-removebg-preview.png';
import { Link } from "react-router-dom";

const Nav =()=>{

    return(
        <>
        <div id='nav'>
       <img  src={logo} alt='logo' className='logo'/> 
            
            <ul>
                <Link style={{textDecoration:'none',color:'white'}} to={'/'}><li>Home</li> </Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/explore'}> <li>Expolre</li></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/about'}><li>About </li></Link>
                <Link style={{textDecoration:'none',color:'white'}} to={'/contact'}><li>Contact </li></Link>
            </ul>
            

        </div>
        </>
    )
}
export default Nav;