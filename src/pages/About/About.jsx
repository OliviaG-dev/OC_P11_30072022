import Data from "../../services/dataService";
import Header from "../../components/Header/Header";
import ImageAbout from "../../assets/ImageAbout.png";
import Accordion from "../../components/Accordion/Accordion"
import "./About.css"

const About = () => {
    const data = new Data();
    const AboutData = data.getDataAbout();
    
    console.log(AboutData);
    return(
    <>
        <Header text={''} picture={{src:ImageAbout, alt:'image paysage'}}/>
    <main className="about__accordion" >
        {
            AboutData.map((about) => {
                return <Accordion key={about.id} id={about.id} title={about.title}>
                    {about.text}
                </Accordion>
            })
        }
    </main>
    
    
    </>
    
)
}


export default About