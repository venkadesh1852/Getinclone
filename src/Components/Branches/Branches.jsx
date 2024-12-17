import './Branches.css'
import vnr from'../../Media/vnr.jpg';
import kvp from '../../Media/kvp.jpg';

function Branches(){
    return(
        <>
        <div className='Branches'>
                <h2>Getin Technologies Branches</h2>
        </div>
        <div className='Branches1'>
            <div className='Branches2'>
                <img src={vnr}/>
                <h3>Virudhunager Branch</h3>
            </div>
            <div className='Branches2'>
                <img src={kvp}/>
                <h3>Kovilpatti Branch</h3>
            </div>
        </div>
        <div className='Branches3'>
            <div className='Branches4'>
                <h2>Software Training</h2>
                <p>Getin Technologies providing top-notch, industry-aligned software training to empower all levels of learners, from beginners to advanced professionals. We offer a dynamic array of courses that equip learners with the hands-on skills necessary to excel in their respective software courses. The curriculum curated by a team of expert mentors, keeping key industry needs and trends in mind. We focus on offering practical, real-world insights.</p>
                <button>More Details</button>
            </div>
            <div className='Branches4'>
                <h2>Placement Training</h2>
                <p>Our Placement Training committed to bridging the gap between your academic qualifications and industry demands, providing comprehensive training followed by successful placement assistance. We offer comprehensive, industry-aligned training programs in various software domains. Our Placement training modules have been carefully curated to satisfy the demands of the ever-evolving tech industry and set our trainees on a successful career path.</p>
                <button>More Details</button>
            </div>
            <div className='Branches4'>
                <h2>Internship Training</h2>
                <p>Getin Technologies Internship Training program commit to empowering the next generation of tech innovators, we offer meaningful, project-based internship Training that pave the way for a successful career in the software industry. We believe that valuable industry exposure forms the backbone of a successful professional journey. Our Internship Training program strives to go beyond the basic academic knowledge and offers hands-on experience.</p>
                <button>More Details</button>
            </div>
        </div>
        </>
    );
}
export default Branches;
