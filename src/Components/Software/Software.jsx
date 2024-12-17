import'./Software.css';
import img7 from '../../Media/img7.png'
import img8 from '../../Media/img8.png'
import img9 from '../../Media/img9.png'
import img10 from '../../Media/img10.png'
import img11 from '../../Media/img11.png'
import img12 from '../../Media/img12.png'
import img13 from '../../Media/img13.png'
import img14 from '../../Media/img14.png'
import img15 from '../../Media/img15.png'
import img16 from '../../Media/img16.png'
import img17 from '../../Media/img17.png'

function Software(){
    return(
        <>
            <div className='Software'>
                <h2>Top Software Courses with Placements in Getin Technologies</h2>
            </div>
            <div className='Sonftware1'>
                <div className='Sonftware2'>
                    <img src={img7}/>
                    <p>Python Fullstack Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img8}/>
                    <p>Java Fullstack Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img9}/>
                    <p>Digital Marketing Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img10}/>
                    <p>WordPress Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img11}/>
                    <p>Digital Analytics Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img12}/>
                    <p>UI/UX Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img13}/>
                    <p>Data Analytics Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img14}/>
                    <p>Flutter Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img15}/>
                    <p>AWS DevOps Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img13}/>
                    <p>Data Science Training</p>
                    <button>More Details</button>
                </div>
                <div className='Sonftware2'>
                    <img src={img16}/>
                    <p>Selenium Training</p>
                    <button>More Details</button>
                </div>
               
                <div className='Sonftware2'>
                    <img src={img17}/>
                    <p>Oracle Training</p>
                    <button>More Details</button>
                </div>
                <button className='mybutton'>More Courses..</button>
            </div>
          
        </>
    );
}
export default Software;