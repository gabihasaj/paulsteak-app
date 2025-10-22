import './App.css';
import { Link } from "react-router-dom";

function Info() {
return(
 <div className='Info'>
    <div className='Infoback'>
        <div className='menu'>
            
   
            <Link to="/" className="menu-link">
                <h3>Home</h3>
            </Link>


        </div>
        

        <h2> Hours:</h2>
        <h2>Monday-Saturday: 11am-10pm</h2>
        <h2>Sunday: 11am-9pm</h2>

       
        <h2>Location:</h2>
        <h2>2055 South Linden Rd Flint, MI 48532</h2>
        <h2>Phone Number:</h2>
        <h2>(810)422-5621</h2>

        </div>

        </div>
  
        
       

);

}
export default Info;