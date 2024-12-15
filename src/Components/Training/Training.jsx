import './Training.css'
import Placement from '../../Media/img1.png'
import EMIOption from '../../Media/img2.png'
import DedicatedLab from '../../Media/img3.png'
import ElasticTiming from '../../Media/img4.png'
import Interview from '../../Media/img5.png'
import Features from '../../Media/img6.png'

function Training(){
    return(
        <>
        <div className="training">          
            <h2>WHY GETIN TECHNOLOGIES IS BEST TRAINING INSTITUTE</h2>
          
        </div>
        <div className='training1'>
        <p>If you are looking premium quality Software Training and Placements in Kovilpatti, Tuticorin, Tirunelveli and Virudhunagar, you are right place! We offer outstanding package for all!</p>
        </div >
        <div className='grid'>
            <div className='grid1'>
                <img src={Placement} />
                <h3>100% Placement</h3>
                <p>Our Quality Placement Team assured to get 100% Placement to our students as a Fresher or Experienced Placement.</p>
            </div>
            <div className='grid1'>
                <img src={EMIOption} />
                <h3>EMI Option</h3>
                <p>Getin Technologies allows EMI option you to spread the cost of your course fees into manageable monthly payments.</p>
            </div>
            <div className='grid1'>
                <img src={DedicatedLab} />
                <h3>Dedicated Lab</h3>
                <p>Our lab offers students hands-on learning, fostering creativity, collaboration, and practical skills.</p>
            </div>
            <div className='grid1'>
                <img src={ElasticTiming} />
                <h3>Elastic Timing</h3>
                <p>Our students can select the flexible time slots for their classroom and Online Sessions. Backup classes available for missed Classes.</p>
            </div>
            <div className='grid1'>
                <img src={Interview} />
                <h3>Mock Interview</h3>
                <p>Our Mock Interview Sessions boost our students Placement ratio. Our students can attend interviews confidently and Clearly.</p>
            </div>
            <div className='grid1'>
                <img src={Features} />
                <h3>Security Features</h3>
                <p>Our Building fully Equipped with HD CCTV for All classrooms and Entrance Gate. So Feel free about your Security.</p>
            </div>
        </div>
        </>
    );
}
export default Training;