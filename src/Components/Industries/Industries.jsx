import './Industries.css';
import img30 from '../../Media/img30.jpg';
import img31 from '../../Media/img31.jpg';
import img32 from '../../Media/img32.jpg';
import img33 from '../../Media/img33.jpg';
import img34 from '../../Media/img34.jpg';
import img35 from '../../Media/img35.jpg';
import img36 from '../../Media/img36.jpg';
import img37 from '../../Media/img37.jpg';
import img38 from '../../Media/img38.jpg';
import img39 from '../../Media/img39.jpg';
import img40 from '../../Media/img40.jpg';
import img41 from '../../Media/img41.jpg';

function Industries(){
    return(
    <>
        <div className='Industries'>
            <h2>Our Placement Industries</h2>
        </div>
        <div className='Industries1'>
            <div className='Industries2'>
                <img src={img30}/>
                <p>Digital Marketing</p>
            </div>
            <div className='Industries2'>
                <img src={img31}/>
                <p>Networking</p>
            </div>
            <div className='Industries2'>
                <img src={img32}/>
                <p>Cyber Security</p>
            </div>
            <div className='Industries2'>
                <img src={img33}/>
                <p>DevOps</p>
            </div>
            <div className='Industries2'>
                <img src={img34}/>
                <p>Ecommerce</p>
            </div>
            <div className='Industries2'>
                <img src={img35}/>
                <p>Cloud Computing</p>
            </div>
            <div className='Industries2'>
                <img src={img36}/>
                <p>Web Development</p>
            </div>
            <div className='Industries2'>
                <img src={img37}/>
                <p>Drone</p>
            </div>
            <div className='Industries2'>
                <img src={img38}/>
                <p>IoT</p>
            </div>
            <div className='Industries2'>
                <img src={img39}/>
                <p>Automation</p>
            </div>
            <div className='Industries2'>
                <img src={img40}/>
                <p>App Development</p>
            </div>
            <div className='Industries2'>
                <img src={img41}/>
                <p>AI</p>
            </div>

        </div>
    </>
    );
}
export default Industries;