import './Main.css'
import photo from '../../Media/main.jpg'
import myad from '../../Media/myad.jpg'
function Main(){
    return(
        <>
            <div className='photo'>
                <img src={photo} title='independence Day'/>
            </div>
            <div className='para'>
                <p>Getin Technologies is Best Software Training with Placement Institutes in Kovilpatti and Virudhunagar.</p>
            </div>
            <div className='para1'>
            <p>Our Best training in both basic and advanced Software courses makes you shine in the IT Industry. We reinforce every candidate who craves to modernize themselves with the technology updates. Undoubtedly, Getin Technologies helps them the right trail to reach their IT Dreams.</p>
            </div>
            <div className='para2'>
                <p>Our Software training institute is focus our students Placement and their career growth !!!</p>
            </div>
            <div className='myad'>
                <img src={myad}/>
            </div>
            <div className='para3'>
                <p>Getin Technologies is one of the top <b>IT Training Institutes in Kovilpatti, Virudhunagar and Bangalore</b> specializing in all leading Software Technologies Providing best quality training solutions to Fresher and Experienced students. We are developing our students as a independent and dedicated employees through our Training. We have placed more than 3000+ individuals in Top MNC’s through our training programs and so we are well-known as one of the <b>best Placement Training Institutes in Tamilnadu.</b></p>
                <p>We offer professional career courses to eligible candidates and mold them into knowledgeable industry-expected skills. In our IT Training and Placement Institute in Kovilpatti, Virudhunagar and Bangalore. We cover the most popular IT courses with the most up-to-date curriculum. Because of the insufficient proficiency of the candidates, there will always be a skill gap in the industry for on-demand technologies. We place a greater emphasis on hands-on experience to ensure that our students outperform from the start. We conduct numerous mock interviews and assessments in order to compete in interviews to the best of our abilities. Our instructors provide our students with the necessary course knowledge to pass the technical rounds by providing them with numerous case studies and assignments.</p>
            </div>
        </>
    );
}
export default Main;