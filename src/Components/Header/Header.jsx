import './Header.css'
import getin from '../../Media/logo.jpeg'
function Header(){
    return(
        <>     

            <div className="header">           
            <ul>
                <li>HOME</li>
                <li>TRAINING COURSES</li>
                <li>PLACEMEMTS</li>
            <div className="dropdown">
                <li>REVIEWS</li>
                <div className="drop">
                    <a href='#'>Whatsapp reviews</a>
                    <a href='#'>Google reviews</a>
                </div>
                </div>
                <div className="dropdown">
                <li>BRANCHES</li>
                <div className="drop">
                    <a href='#'>Kovilpatti</a>
                    <a href='#'>Virudhunagar</a>
                    <a href='#'>Tirunelveli</a>
                </div>
                </div>
                <li>GALLERY</li>
                <li>CERTIFIVATIONS</li>
                <li>CAREERS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <div className='iogo'>
              <img src={getin} />
        </div>
         
        </>
  
    );
}
export default Header;