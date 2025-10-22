import './App.css';
import { Link } from "react-router-dom";

function Home() {
return(
    <div className='Home'>
        <div className='menu'>
            
   
            <Link to="/Menu" className="menu-link">
                <h3>Menu</h3>
            </Link>
            <Link to="/info" className="menu-link">
                <h3>Info</h3>
            </Link>
            <h3>Order</h3>

        </div>
        <div className='homename'>
        
<div className='homewords'>
    <div className='homewordsh1'>
        <h1>Welcome to </h1>
        <h1> Paul's</h1>
        <h1> Steakhouse & Grille</h1>
        </div>
        {/* <h2> Hours:</h2>
        <h2>Monday-Sunday: 11am-10pm</h2>
        <div className='Location'>
        <h2>Location:</h2>
        <h2>2055 South Linden Rd Flint, MI 48532</h2>
        </div>
        <h2>Phone Number:</h2>
        <h2>58611111111</h2> */}

        </div>
        <div className='homeback'>
  
        
       
        </div>
        </div>
    </div>
);

}
export default Home;